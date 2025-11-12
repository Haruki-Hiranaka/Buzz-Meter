import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import type { Booth } from '../types';
import { useStore } from '../store/useStore';
import { getBuzzColor } from '../utils/colors';

interface BoothMarkerProps {
  booth: Booth;
  isTopBooth: boolean;
}

const BoothMarker = memo(({ booth, isTopBooth }: BoothMarkerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const selectBooth = useStore((state) => state.selectBooth);

  const color = getBuzzColor(booth.buzzScore);

  return (
    <g
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => selectBooth(booth.id)}
      style={{ cursor: 'pointer' }}
    >
      {/* Glow effect for high scores */}
      {booth.buzzScore > 0.7 && (
        <motion.circle
          cx={booth.x}
          cy={booth.y}
          r="25"
          fill={color}
          opacity="0.3"
          animate={{
            r: [25, 35, 25],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Tent/Booth shape */}
      <g>
        {/* Tent base */}
        <motion.path
          d={`M ${booth.x - 20} ${booth.y + 10} L ${booth.x} ${booth.y - 15} L ${booth.x + 20} ${booth.y + 10} Z`}
          fill={color}
          stroke="white"
          strokeWidth="2"
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeOut',
          }}
          style={{
            transformOrigin: `${booth.x}px ${booth.y}px`,
          }}
        />
        {/* Tent pole */}
        <motion.line
          x1={booth.x}
          y1={booth.y - 15}
          x2={booth.x}
          y2={booth.y + 10}
          stroke="white"
          strokeWidth="2"
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeOut',
          }}
          style={{
            transformOrigin: `${booth.x}px ${booth.y}px`,
          }}
        />
        {/* Flag on top */}
        <motion.path
          d={`M ${booth.x} ${booth.y - 15} L ${booth.x + 8} ${booth.y - 20} L ${booth.x} ${booth.y - 18} Z`}
          fill="#ef4444"
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeOut',
          }}
          style={{
            transformOrigin: `${booth.x}px ${booth.y}px`,
          }}
        />
      </g>

      {/* Label for TOP 5 booths or on hover */}
      {(isTopBooth || isHovered) && (
        <g>
          {/* Soft white background with shadow */}
          <rect
            x={booth.x - 50}
            y={booth.y - 60}
            width="100"
            height={isHovered ? 35 : 25}
            fill="rgba(255, 255, 255, 0.95)"
            stroke="rgba(148, 163, 184, 0.3)"
            strokeWidth="1"
            rx="8"
            filter="url(#softShadow)"
          />
          <text
            x={booth.x}
            y={booth.y - (isHovered ? 45 : 42)}
            textAnchor="middle"
            fill="#334155"
            fontSize="11"
            fontWeight="600"
          >
            {booth.name}
          </text>
          {isHovered && (
            <text
              x={booth.x}
              y={booth.y - 30}
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              {booth.category}
            </text>
          )}
        </g>
      )}
      
      {/* Soft shadow filter definition */}
      <defs>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </g>
  );
});

BoothMarker.displayName = 'BoothMarker';

export default BoothMarker;
