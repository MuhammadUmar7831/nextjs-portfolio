import React from 'react';
import { Button, MovingBorder } from '../ui/MovingBorder';
import { cn } from '@/utils/cn';

export default function TechCard({ title, description, img, otherClass, contentClass, Component }: { title: string, description?: string, img?: string, otherClass?: string, contentClass?: string, Component: React.ReactNode }) {
    return (
        <div className={`relative text-xl p-[1px] overflow-hidden content flex gap-5 border rounded-[1.75rem] border-white/[0.2] bg-black-300 ${otherClass}`}>
            {/* <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
            > */}
            <div
                className="absolute inset-0 rounde-[1.75rem]"
                style={{ borderRadius: `calc(${'1.75rem'} * 0.96)` }}
            >
                <MovingBorder duration={Math.floor(Math.random() * 10000) + 10000} rx="30%" ry="30%">
                    <div
                        className={cn(
                            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
                        )}
                    />
                </MovingBorder>
            </div>
            <div className={cn(
                "relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased p-10",
                contentClass
            )}>
                <div>
                    <p className='text-md tracking-wide font-thin'>{description}</p>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                </div>
                {Component}
                {img && <img src={img} alt="image" />}
                {/* </Button> */}
            </div>
        </div>
    );
}
