import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { AnimatedTooltip } from '../ui/AnimatedToolTip';

interface Technology {
    id: number;
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
        <div className="flex flex-col items-center justify-center w-full h-full my-auto">
            <div className="flex flex-wrap items-center justify-center">
                <AnimatedTooltip items={technologies} />
            </div>
        </div>
    );
}
