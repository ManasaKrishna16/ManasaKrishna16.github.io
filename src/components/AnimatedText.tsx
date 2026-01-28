import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'word' | 'character';
  once?: boolean;
}

const AnimatedText = ({ 
  text, 
  className = '', 
  delay = 0,
  type = 'word',
  once = true
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  
  const elements = type === 'word' ? text.split(' ') : text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: type === 'word' ? 0.08 : 0.03, delayChildren: delay },
    }),
  };
  
  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };
  
  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ perspective: '1000px' }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block origin-bottom"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {element}
          {type === 'word' && <span className="inline-block">&nbsp;</span>}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
