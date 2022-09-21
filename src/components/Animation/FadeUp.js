import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

function FadeUpWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: '50px',
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default FadeUpWhenVisible;
