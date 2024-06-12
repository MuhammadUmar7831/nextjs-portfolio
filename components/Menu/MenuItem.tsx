import * as React from "react";
import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ text, i, menuRef, setOpen }: { text: string, i: number, menuRef: React.RefObject<HTMLElement>, setOpen: (open: boolean) => void }) => {

    const handleClick = () => {
        if (menuRef.current) {
            const topPosition = menuRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPosition,
                behavior: "smooth",
            });
            setOpen(false);
        }
    }

    return (
        <motion.li
            className="w-fit mx-auto text-2xl md:text-3xl lg:text-4xl text-black cursor-pointer"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
        >
            <span style={{ color: colors[i] }}>{text}</span>
        </motion.li>
    );
};
