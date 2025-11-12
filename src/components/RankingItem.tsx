import { motion } from 'framer-motion';
import type { Booth } from '../types';
import { useStore } from '../store/useStore';

interface RankingItemProps {
  booth: Booth;
  rank: number;
}

const RankingItem = ({ booth, rank }: RankingItemProps) => {
  const selectBooth = useStore((state) => state.selectBooth);

  const getMedalEmoji = (rank: number) => {
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return rank;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'from-yellow-400 to-yellow-600';
      case 2:
        return 'from-gray-300 to-gray-500';
      case 3:
        return 'from-orange-400 to-orange-600';
      default:
        return 'from-slate-200 to-slate-300';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => selectBooth(booth.id)}
      className="bg-white rounded-lg p-4 shadow-md border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-3">
        {/* Rank badge */}
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${getRankColor(
            rank
          )} flex items-center justify-center text-white font-bold shadow-md`}
        >
          {rank <= 3 ? getMedalEmoji(rank) : rank}
        </div>

        {/* Booth info */}
        <div className="flex-1">
          <h3 className="font-semibold text-slate-800">{booth.name}</h3>
          <p className="text-xs text-slate-500">{booth.category}</p>
        </div>

        {/* Buzz score */}
        <motion.div
          key={booth.buzzScore}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-right"
        >
          <div className="text-2xl font-bold text-primary">
            {Math.round(booth.buzzScore * 100)}%
          </div>
          <div className="text-xs text-slate-500">盛り上がり</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RankingItem;
