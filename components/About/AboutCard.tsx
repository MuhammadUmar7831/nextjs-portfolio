import React from 'react'

export default function AboutCard({ title, description, img, Component, otherClass }: {
    title?: string,
    description?: string,
    img?: string,
    Component?: React.ReactNode,
    otherClass?: string,
}) {
    return (
        <div className={`flex gap-5 border rounded-2xl border-white/[0.2] bg-black-300 ${otherClass}`}>
            <div>
                <p className='text-md tracking-wide font-thin'>{description}</p>
                <h1 className='text-3xl font-bold'>{title}</h1>
            </div>
            {Component}
            {img && <img src={img} alt="image" />}
        </div>
    )
}
