/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { useTheme } from './Theme';

const ThemeToggle = () => {
  const { isSpecialMode, setIsSpecialMode } = useTheme();

  return (
    <div className="fixed top-5 lg:right-80 lg:pr-10 flex items-center gap-2 z-50">
      <span className="text-zinc-400 text-sm">Normal</span>
      <motion.button
        onClick={() => setIsSpecialMode(!isSpecialMode)}
        className="relative w-20 h-10 rounded-full bg-zinc-700 cursor-pointer group overflow-hidden"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute top-1 left-1 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"
          animate={{
            x: isSpecialMode ? 40 : 0,
            rotate: isSpecialMode ? 360 : 0,
            backgroundColor: isSpecialMode ? "#8B5CF6" : "#6B7280",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 15,
              filter: "drop-shadow(0 0 15px rgba(139, 92, 246, 0.8))",
            }}
          >
            <Wand2
              className={`w-5 h-5 ${isSpecialMode ? 'text-white' : 'text-zinc-300'}`}
            />
          </motion.div>
        </motion.div>
      </motion.button>
      <span className="text-zinc-400 text-sm">Special</span>
    </div>
  );
};

export default ThemeToggle;
