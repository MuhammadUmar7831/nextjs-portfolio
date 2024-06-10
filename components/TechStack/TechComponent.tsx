import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useState } from 'react'

interface Technology {
    name: string;
    image: string;
}

export default function TechComponent({ technologies }: { technologies: Technology[] }) {
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

    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);

    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );

    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );

    return (
        <motion.div
            className='flex gap-2 flex-wrap relative p-4'
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
                    <AnimatePresence mode="popLayout">
                        {hoveredTechnology === technology.name && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-10 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                            >
                                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                                <div className="absolute w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                {/* <div className="font-bold text-white relative z-30 text-base">
                                    {technology.name}
                                </div> */}
                                <div className="text-white text-xs">{technology.name}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {/* {hoveredTechnology === technology.name && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 10 }}
                            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                            className='absolute bottom-16 transform -translate-x-1/2 bg-black-100 text-white text-xs font-semibold rounded py-2 px-2'
                        >
                            {technology.name}
                        </motion.div>
                    )} */}
                </motion.div>
            ))}
        </motion.div>
    )
}
