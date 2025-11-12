export interface Booth {
  id: string;
  name: string;
  x: number;
  y: number;
  buzzScore: number;
  history: number[];
  category?: string;
}

export interface SimulationState {
  booths: Booth[];
  isRunning: boolean;
  updateInterval: number;
  lastUpdate: number;
}
