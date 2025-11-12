import { useStore } from '../store/useStore';
import BoothMarker from './BoothMarker';
import HeatMapOverlay from './HeatMapOverlay';
import MapLegend from './MapLegend';
import SchoolMap from './SchoolMap';

const VenueMap = () => {
  const booths = useStore((state) => state.booths);
  
  // Get top 5 booths for label display
  const topBooths = [...booths]
    .sort((a, b) => b.buzzScore - a.buzzScore)
    .slice(0, 5)
    .map(b => b.id);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-50 to-emerald-50">
      <svg
        viewBox="0 0 1000 800"
        className="w-full h-full max-w-6xl max-h-[800px]"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Background - Sky */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
        </defs>
        <rect width="1000" height="800" fill="url(#skyGradient)" rx="8" />
        
        {/* School buildings and facilities */}
        <SchoolMap />

        {/* Heat map overlay */}
        <HeatMapOverlay booths={booths} />

        {/* Booth markers */}
        {booths.map((booth) => (
          <BoothMarker key={booth.id} booth={booth} isTopBooth={topBooths.includes(booth.id)} />
        ))}
      </svg>

      {/* Legend */}
      <MapLegend />
    </div>
  );
};

export default VenueMap;
