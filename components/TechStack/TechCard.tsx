import React from 'react'
import { Button } from '../ui/MovingBorder'

export default function TechCard({ title, description, img, otherClass, Component }: { title: string, description?: string, img?: string, otherClass?: string, Component: React.ReactNode }) {
    return (
        <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className={`content flex gap-5 border rounded-2xl border-white/[0.2] bg-black-300 ${otherClass}`}>
            <div>
                <p className='text-md tracking-wide font-thin'>{description}</p>
                <h1 className='text-3xl font-bold'>{title}</h1>
            </div>
            {Component}
            {img && <img src={img} alt="image" />}
        </Button>
    )
}
