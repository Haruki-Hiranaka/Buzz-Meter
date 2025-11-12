import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from './store/useStore';
import VenueMap from './components/VenueMap';
import RankingPanel from './components/RankingPanel';
import BoothDetailModal from './components/BoothDetailModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { updateBuzzScores, startSimulation } = useStore();

  useEffect(() => {
    // Simulate initial loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      startSimulation();
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, [startSimulation]);

  useEffect(() => {
    // Update buzz scores every 3 seconds
    const interval = setInterval(() => {
      updateBuzzScores();
    }, 3000);

    return () => clearInterval(interval);
  }, [updateBuzzScores]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">BuzzMeter</h2>
          <p className="text-slate-600">会場データを読み込み中...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">B</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">BuzzMeter</h1>
                <p className="text-sm text-slate-600">学園祭リアルタイム盛り上がり可視化</p>
              </div>
            </div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-full"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-red-600">LIVE</span>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 h-[calc(100vh-88px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <VenueMap />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Ranking panel */}
      <RankingPanel />

      {/* Booth detail modal */}
      <BoothDetailModal />
    </div>
  );
}

export default App;
