import { technologies } from '@/data/Technologies'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface Technology {
    name: string;
    image: string;
}

export default function Technologies() {
    const [hoveredTechnology, setHoveredTechnology] = useState<string | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <motion.div
            className='flex gap-2 flex-wrap relative'
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
        >
            {technologies.map((technology: Technology) => (
                <motion.div
                    key={technology.name}
                    className='relative rounded-full h-14 w-14 bg-black-200 p-2 flex items-center justify-center'
                    variants={itemVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    onMouseEnter={() => setHoveredTechnology(technology.name)}
                    onMouseLeave={() => setHoveredTechnology(null)}
                >
                    <img
                        src={technology.image}
                        alt={technology.name}
                        className='object-contain'
                    />
                    {hoveredTechnology === technology.name && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 10 }}
                            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                            className='absolute bottom-16 transform -translate-x-1/2 bg-black-100 text-white text-xs font-semibold rounded py-2 px-2'
                        >
                            {technology.name}
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </motion.div>
    )
}
