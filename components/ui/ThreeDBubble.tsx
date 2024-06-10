import React from 'react';
import styles from './Bubble.module.css';
import { motion } from 'framer-motion';

export default function ThreeDBubble({ otherClass }: {
    otherClass?: string
}) {

    return (
        <motion.section
            drag
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            className={`${styles.stage} ${otherClass}`}>

            <figure
                className={`${styles.ball} ${styles.bubble}`}
            />

        </motion.section>
    );
}
