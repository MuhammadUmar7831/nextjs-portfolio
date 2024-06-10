import React from 'react'
import { motion } from 'framer-motion'

export default function MagicButton({ title, icon, position, btnClass, handleClick }: {
    title: string,
    icon: React.ReactNode,
    position: string,
    btnClass?: string,
    handleClick?: () => void
}) {
    return (
        <motion.button
            className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none md:w-60 mt-2"
            whileHover={{
                background: 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
                transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.85, rotate: -5, transition: { duration: 0.2 } }}
            onClick={handleClick}
        >
            <motion.span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                whileHover={{ opacity: 0, transition: { duration: 0.5 } }}
            />
            <motion.span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 hover:bg-transparent transition-colors px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${btnClass}`}
                whileHover={{ background: 'transparent', transition: { duration: 0.5 } }}
            >
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </motion.span>
        </motion.button>
    )
}
