import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const FadeInWhenVisible= ({ children })=> {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: '50px',
    threshold: 0.4,
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
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default FadeInWhenVisible;
