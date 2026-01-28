import { motion } from 'framer-motion';
import { Code, Cpu } from 'lucide-react';

export const TechIconCode = () => {
    return (
        <motion.div
            animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="text-primary"
        >
            <Code size={40} />
        </motion.div>
    );
};

export const TechIconChip = () => {
    return (
        <motion.div
            animate={{
                rotateZ: [0, 360],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
            className="text-primary"
        >
            <Cpu size={32} />
        </motion.div>
    );
};
