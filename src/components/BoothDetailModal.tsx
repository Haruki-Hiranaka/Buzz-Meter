import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import SparklineChart from './SparklineChart';

const BoothDetailModal = () => {
  const { booths, selectedBoothId, selectBooth } = useStore();
  const selectedBooth = booths.find((b) => b.id === selectedBoothId);

  if (!selectedBooth) return null;

  return (
    <AnimatePresence>
      {selectedBooth && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => selectBooth(null)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden md:bottom-auto md:top-1/2 md:-translate-y-1/2"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-indigo-600 p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedBooth.name}</h2>
                  <p className="text-indigo-100 text-sm">{selectedBooth.category}</p>
                </div>
                <button
                  onClick={() => selectBooth(null)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Current score with circular progress */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e2e8f0"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#6366f1"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '0 352' }}
                      animate={{
                        strokeDasharray: `${Math.min(selectedBooth.buzzScore * 176, 352)} 352`,
                      }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className="text-4xl font-bold text-primary"
                    >
                      {Math.round(selectedBooth.buzzScore * 100)}%
                    </motion.div>
                    <div className="text-sm text-slate-500">盛り上がり度</div>
                  </div>
                </div>
              </div>

              {/* Sparkline chart */}
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-3">
                  過去15分のトレンド
                </h3>
                <SparklineChart data={selectedBooth.history} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BoothDetailModal;
