import React from 'react'
import { BackgroundGradient } from '../ui/background-gradient'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { TbScreenshot } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import Link from './Link';
import { Tech } from './Tech';
import { Contributor } from './Contributor';

interface Technologies {
    id: number;
    name: string;
    image: string;
};

interface Contributors {
    id: number;
    name: string;
    image: string;
    link: string;
};

interface propsInterface { name: string, descripton: string, image: string, github: string, screenshots?: string, video?: string, liveDemo?: string, technologies: Technologies[], contributors?: Contributors[] }

export default function ProjectCard({ name, descripton, image, github, screenshots, video, liveDemo, technologies, contributors }: propsInterface) {
    return (
        <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900 min-w-[250px] lg:max-w-xl">
            <div className='flex justify-center items-center w-full bg-slate-100/[0.09] rounded-[22px] overflow-hidden'>
                <Image
                    src={image}
                    alt="jordans"
                    width={500}
                    height={500}
                    // style={{ rotate: '10deg' }}
                    className="object-contain w-full"
                />
            </div>
            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                {name}
            </p>

            <p className="text-sm text-neutral-400">
                {descripton}
            </p>
            <div className="flex flex-row items-center justify-start my-10 w-full flex-wrap">
                <Tech items={technologies} />
            </div>
            {contributors && <div className="flex flex-row items-center justify-start mt-10 w-full flex-wrap">
                <Contributor items={contributors} />
            </div>}
            <div className='flex flex-wrap gap-2 justify-center p-2'>
                {github && <Link url={github} icon={<FaGithub size={'1.75rem'} />} text='code' />}
                {screenshots && <Link url={screenshots} icon={<TbScreenshot size={'1.75rem'} />} text='screenshots' />}
                {video && <Link url={video} icon={<AiOutlineYoutube size={'1.75rem'} />} text='video' />}
                {liveDemo && <Link url={liveDemo} icon={<TbWorld size={'1.75rem'} />} text='live Demo' />}
            </div>
        </BackgroundGradient >
    )
}
