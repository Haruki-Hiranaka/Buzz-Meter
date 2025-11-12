import type { Booth } from '../types';

const HISTORY_LENGTH = 15; // 15 minutes of data points

export function generateInitialBooths(): Booth[] {
  const boothData = [
    // 1F 校舎（教室内）
    { name: 'お化け屋敷', x: 120, y: 155, category: 'Games' },
    { name: '科学実験室', x: 220, y: 155, category: 'Exhibition' },
    { name: 'プラネタリウム', x: 320, y: 155, category: 'Exhibition' },
    
    // 1F 廊下
    { name: '焼きそば屋台', x: 140, y: 245, category: 'Food' },
    { name: 'たこ焼き屋台', x: 300, y: 245, category: 'Food' },
    
    // 2F 校舎（教室内）
    { name: '美術展示', x: 120, y: 425, category: 'Exhibition' },
    { name: '書道体験', x: 220, y: 425, category: 'Exhibition' },
    { name: '射的ゲーム', x: 320, y: 425, category: 'Games' },
    
    // 2F 廊下
    { name: 'カフェ', x: 140, y: 515, category: 'Food' },
    { name: '輪投げ', x: 300, y: 515, category: 'Games' },
    
    // 体育館
    { name: 'ダンス発表', x: 150, y: 715, category: 'Performance' },
    { name: 'バンド演奏', x: 300, y: 715, category: 'Performance' },
    
    // グラウンド（広いので多めに配置）
    { name: '合唱部', x: 600, y: 250, category: 'Performance' },
    { name: 'フリーマーケット', x: 820, y: 250, category: 'Exhibition' },
    { name: 'ミニゲーム大会', x: 710, y: 350, category: 'Games' },
    { name: '屋台エリア', x: 550, y: 500, category: 'Food' },
    { name: 'ヨーヨー釣り', x: 870, y: 500, category: 'Games' },
    { name: '写真展示', x: 710, y: 600, category: 'Exhibition' },
  ];

  return boothData.map((data, i) => {
    // Distribution: 85% in 70-120%, 10% in 50-70%, 5% in 120%+
    const rand = Math.random();
    let initialScore: number;
    
    if (rand < 0.85) {
      // 85% chance: 70-120% (0.7-1.2) - main zone
      initialScore = 0.7 + Math.random() * 0.5;
    } else if (rand < 0.95) {
      // 10% chance: 50-70% (0.5-0.7)
      initialScore = 0.5 + Math.random() * 0.2;
    } else {
      // 5% chance: 120-254% (1.2-2.54)
      initialScore = 1.2 + Math.random() * 1.34;
    }
    
    const history = generateInitialHistory(initialScore);

    return {
      id: `booth-${i + 1}`,
      name: data.name,
      x: data.x,
      y: data.y,
      buzzScore: initialScore,
      history,
      category: data.category,
    };
  });
}

function generateInitialHistory(currentScore: number): number[] {
  const history: number[] = [];
  let score = Math.max(0.5, currentScore - 0.3);

  for (let i = 0; i < HISTORY_LENGTH; i++) {
    history.push(score);
    score = Math.max(0.5, Math.min(2.54, score + (Math.random() - 0.4) * 0.1));
  }

  return history;
}

export function updateBuzzScores(booths: Booth[]): Booth[] {
  const updatedBooths = booths.map((booth) => {
    // Completely random distribution each time
    // Distribution: 85% in 70-120%, 10% in 50-70%, 5% in 120-198%
    const rand = Math.random();
    let newScore: number;
    
    if (rand < 0.85) {
      // 85% chance: 70-120% (0.7-1.2)
      newScore = 0.7 + Math.random() * 0.5;
    } else if (rand < 0.95) {
      // 10% chance: 50-70% (0.5-0.7)
      newScore = 0.5 + Math.random() * 0.2;
    } else {
      // 5% chance: 120-198% (1.2-1.98)
      newScore = 1.2 + Math.random() * 0.78;
    }

    // Update history
    const newHistory = [...booth.history.slice(1), newScore];

    return {
      ...booth,
      buzzScore: newScore,
      history: newHistory,
    };
  });

  // Ensure no duplicate percentages when rounded
  const roundedScores = new Map<number, number>();
  
  return updatedBooths.map((booth) => {
    let rounded = Math.round(booth.buzzScore * 100);
    
    // If this percentage already exists, add a small offset
    while (roundedScores.has(rounded)) {
      booth.buzzScore += 0.01; // Add 1% increment
      rounded = Math.round(booth.buzzScore * 100);
    }
    
    roundedScores.set(rounded, booth.buzzScore);
    
    return booth;
  });
}

export function detectSpike(booth: Booth): boolean {
  const recentHistory = booth.history.slice(-3);
  const increase = booth.buzzScore - recentHistory[0];
  return increase > 0.3;
}
