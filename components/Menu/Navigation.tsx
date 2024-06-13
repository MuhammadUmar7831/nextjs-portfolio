import React, { RefObject, useRef } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
    open: {
        x: 0,
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        x: "100%",
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    }
};

interface NavigationProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    menuRefs: RefObject<HTMLElement>[]
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, setOpen, menuRefs }: NavigationProps) => {

    const menu = [
        { id: 0, text: 'Home' },
        { id: 1, text: 'Tech Stack' },
        { id: 2, text: 'Projects' },
        { id: 3, text: 'Contact' }
    ];

    return (
        <>
            {isOpen && <div
                onClick={() => setOpen(false)}
                className={`fixed top-0 right-0 h-full w-screen bg-transparent`}
            />}
            <motion.ul
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className="fixed  px-4 top-0 right-0 min-w-[300px] max-w-[600px] w-1/2 h-full bg-white flex flex-col justify-between gap-2 lg:gap-4 shadow-lg shadow-white"

            >
                <div />
                <div className="flex flex-col justify-center gap-2 lg:gap-4">
                    {menu.map((item) => (
                        <MenuItem key={item.id} text={item.text} i={item.id} menuRef={menuRefs[item.id]} setOpen={setOpen} />
                    ))}</div>
                <h2 className="w-full font-semibold py-4 text-black text-center">
                    &copy; {new Date().getFullYear()} Muhammd Umar . All rights reserved .
                </h2>
            </motion.ul>
        </>
    );
};

export default Navigation;
