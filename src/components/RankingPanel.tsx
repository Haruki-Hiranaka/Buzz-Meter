import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import RankingItem from './RankingItem';

const RankingPanel = () => {
  const booths = useStore((state) => state.booths);

  // Get top 5 booths by buzz score
  const topBooths = [...booths]
    .sort((a, b) => b.buzzScore - a.buzzScore)
    .slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-8 right-8 w-80 bg-white/80 backdrop-blur-md rounded-xl shadow-2xl border border-slate-200 overflow-hidden md:top-8 md:right-8 max-md:bottom-4 max-md:top-auto max-md:left-4 max-md:right-4 max-md:w-auto"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-indigo-600 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-bold text-lg">いまバズってる TOP5</h2>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-3 h-3 bg-red-500 rounded-full"
          />
        </div>
      </div>

      {/* Ranking list */}
      <div className="p-4 space-y-3">
        {topBooths.map((booth, index) => (
          <RankingItem key={booth.id} booth={booth} rank={index + 1} />
        ))}
      </div>
    </motion.div>
  );
};

export default RankingPanel;
