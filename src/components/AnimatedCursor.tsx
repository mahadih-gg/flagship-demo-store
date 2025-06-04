import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CursorIcon from './svg/cursor.icon';

const AnimatedCursor = () => {
  const [showPing, setShowPing] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout>;
    let pingOn: ReturnType<typeof setTimeout>;
    let pingOff: ReturnType<typeof setTimeout>;

    const loop = () => {
      pingOn = setTimeout(() => setShowPing(true), 150);   // Start ping ~150ms in
      pingOff = setTimeout(() => setShowPing(false), 700); // Stop ping after 550ms
      intervalId = setTimeout(loop, 2300); // Matches 0.8s + 1.5s delay
    };

    loop();

    return () => {
      clearTimeout(intervalId);
      clearTimeout(pingOn);
      clearTimeout(pingOff);
    };
  }, []);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute -bottom-3 right-3"
    >
      <motion.div
        initial={{ opacity: 1, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: [1, 0.85, 1.05, 1],
          rotate: [0, 10, 2, 0],
        }}
        transition={{
          duration: 0.8,
          times: [0, 0.3, 0.7, 1],
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1.5,
          ease: 'easeInOut',
        }}
        className="relative"
      >
        <span className="relative z-10">
          <CursorIcon />
        </span>

        {showPing && (
          <>
            <span
              className="absolute -top-1 lg:-top-2 -left-1 lg:-left-2 size-2 md:size-3 xl:size-5 rounded-full bg-blue-500 opacity-90 animate-ping"
              style={{
                animationDuration: '0.6s',
                animationTimingFunction: 'ease-out',
              }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCursor;
