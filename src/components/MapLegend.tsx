import { motion } from 'framer-motion';

const MapLegend = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-slate-200"
    >
      <h3 className="text-base font-bold text-primary mb-3">BuzzMeter!</h3>
      
      <div className="flex items-center gap-3">
        {/* Gradient bar */}
        <div className="relative w-8 h-32 rounded-full overflow-hidden shadow-md">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #3b82f6 0%, #10b981 20%, #f59e0b 50%, #ef4444 75%, #a855f7 100%)',
            }}
          />
        </div>
        
        {/* Labels */}
        <div className="flex flex-col justify-between h-32 text-xs font-semibold">
          <div className="text-purple-600">SUPER HIGH</div>
          <div className="text-orange-600">HIGH</div>
          <div className="text-slate-400">・</div>
          <div className="text-slate-400">・</div>
          <div className="text-slate-400">・</div>
        </div>
      </div>
    </motion.div>
  );
};

export default MapLegend;
