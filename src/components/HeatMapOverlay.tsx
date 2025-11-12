import { motion } from 'framer-motion';
import type { Booth } from '../types';
import { getBuzzColor } from '../utils/colors';

interface HeatMapOverlayProps {
  booths: Booth[];
}

const HeatMapOverlay = ({ booths }: HeatMapOverlayProps) => {
  return (
    <g opacity="0.4">
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
        </filter>
      </defs>

      {booths.map((booth) => {
        const color = getBuzzColor(booth.buzzScore);
        const radius = 50 + booth.buzzScore * 50;

        return (
          <motion.circle
            key={booth.id}
            cx={booth.x}
            cy={booth.y}
            r={radius}
            fill={color}
            filter="url(#blur)"
            initial={{ r: radius, opacity: 0.6 }}
            animate={{ r: radius, opacity: 0.6 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </g>
  );
};

export default HeatMapOverlay;
