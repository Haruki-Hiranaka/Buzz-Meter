import { motion } from 'framer-motion';

interface SparklineChartProps {
  data: number[];
}

const SparklineChart = ({ data }: SparklineChartProps) => {
  const width = 600;
  const height = 120;
  const padding = 10;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  // Generate path
  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return { x, y };
  });

  const pathData = points
    .map((point, index) => {
      if (index === 0) return `M ${point.x} ${point.y}`;
      return `L ${point.x} ${point.y}`;
    })
    .join(' ');

  // Generate area path (for gradient fill)
  const areaPathData =
    pathData +
    ` L ${points[points.length - 1].x} ${height - padding} L ${padding} ${
      height - padding
    } Z`;

  return (
    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        style={{ maxHeight: '120px' }}
      >
        <defs>
          <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <g opacity="0.1">
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
            <line
              key={ratio}
              x1={padding}
              y1={padding + ratio * (height - padding * 2)}
              x2={width - padding}
              y2={padding + ratio * (height - padding * 2)}
              stroke="#64748b"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Area fill */}
        <motion.path
          d={areaPathData}
          fill="url(#sparklineGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Line */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="#6366f1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Data points */}
        {points.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#6366f1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + index * 0.02, duration: 0.2 }}
          />
        ))}

        {/* Time labels */}
        <text
          x={padding}
          y={height - 2}
          fontSize="10"
          fill="#64748b"
          textAnchor="start"
        >
          15分前
        </text>
        <text
          x={width - padding}
          y={height - 2}
          fontSize="10"
          fill="#64748b"
          textAnchor="end"
        >
          現在
        </text>
      </svg>
    </div>
  );
};

export default SparklineChart;
