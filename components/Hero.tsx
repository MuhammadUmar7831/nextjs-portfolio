import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/SpotLight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ThreeDBubble from "./ui/ThreeDBubble";
import { SparklesCore } from "./ui/sparkels";
import { LinkPreview } from "./ui/link-preview";
import styles from './ui/GridBg.module.css';
import { motion } from "framer-motion";

export function Hero() {

    return (
        <div className="pb-20 pt-36 flex flex-col items-center">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className={`${styles.light} h-screen w-full bg-black-100 absolute top-0 left-0 flex items-center justify-center z-0`} >
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className="flex flex-col items-center justify-center my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web Magic with Next.js
                    </p>
                </div>

                <p className="z-10 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    Hi, I'm
                    <LinkPreview url="https://muhammad-umar.vercel.app/images/me.png" isStatic={true} imageSrc="https://muhammad-umar.vercel.app/images/me.png" className="font-bold uppercase  z-30">
                        <span className="uppercase font-base px-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-transparent bg-clip-text">Umar</span>
                    </LinkPreview>
                    , aspiring Software Engineer.
                </p>

                <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative">
                        <TextGenerateEffect
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                            words={"Code. Create. Innovate. Dominate."}
                        />
                    </h1>
                    <div className="w-[40rem] h-20 relative overflow-x-hidden">
                        {/* Gradients */}
                        <motion.div animate={{ x: ['-100%', '0%', '100%', '-100%'], y: 0 }} transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }} className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <motion.div animate={{ x: ['-100%', '0%', '100%', '-100%'], y: 0 }} transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}  className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <motion.div animate={{ x: ['-100%', '0%', '100%', '-100%'], y: 0 }} transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}  className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <motion.div animate={{ x: ['-100%', '0%', '100%', '-100%'], y: 0 }} transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}  className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </div>

                <div className="relative w-full">
                    <ThreeDBubble otherClass={"absolute -top-80 left-0 w-40 h-40"} />
                    <ThreeDBubble otherClass={"absolute -top-80 left-0 w-10 h-10"} />
                    <ThreeDBubble otherClass={"absolute -top-80 left-40 w-5 h-5"} />
                </div>

                <MagicButton
                    icon={<FaLocationArrow />}
                    position="right"
                    title={"Show my work"}
                />
            </div>

        </div>
    );
}