import React from 'react';
import styles from './Bubble.module.css';
import { motion } from 'framer-motion';

export default function ThreeDBubble({ otherClass }: { otherClass?: string }) {

    return (
        <motion.div
            drag
            transition={{ type: 'spring', stiffness: 100 }}
            className={`${styles.stage} ${otherClass}`}
        >
            <figure

                className={`${styles.ball} ${styles.bubble}`} />
        </motion.div>

    );
}
