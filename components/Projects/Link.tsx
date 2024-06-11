import React from 'react'

export default function Link({ url, icon, text }: { url: string, icon: React.ReactNode, text: string }) {
    return (
        <div className='flex items-center tracking-wider'>
            <a href={url} target='_blank' className='flex items-center gap-2'>
                {icon}
                <span>{text}</span>
            </a>
        </div>
    )
}
