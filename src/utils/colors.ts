export function getBuzzColor(score: number): string {
  // Map score to color gradient (up to 198%)
  if (score < 0.8) {
    // 50-80%: Blue to green
    const t = (score - 0.5) / 0.3;
    return interpolateColor('#3b82f6', '#10b981', t);
  } else if (score < 1.2) {
    // 80-120%: Green to amber
    const t = (score - 0.8) / 0.4;
    return interpolateColor('#10b981', '#f59e0b', t);
  } else if (score < 1.5) {
    // 120-150%: Amber to red
    const t = (score - 1.2) / 0.3;
    return interpolateColor('#f59e0b', '#ef4444', t);
  } else {
    // 150-198%: Red to purple
    const t = Math.min((score - 1.5) / 0.48, 1);
    return interpolateColor('#ef4444', '#a855f7', t);
  }
}

function interpolateColor(color1: string, color2: string, t: number): string {
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);

  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);

  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
