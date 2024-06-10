import React from 'react'
import TechCard from './TechCard'
import { backendTechnologies, frontendTechnologies, programmingLanguages } from '@/data/Technologies'
import TechComponent from './TechComponent'

export default function TechStack() {
    return (
        <section className='grid grid-cols-3'>
            {/* frontend */}
            <TechCard title='Frontend Tech'
                description={`I've created beautiful using`}
                otherClass='col-span-2 flex-col lg:flex-row justify-center items-center p-10'
                Component={
                    <div className="lg:w-2/3">
                        <TechComponent technologies={frontendTechnologies} />
                    </div>}
            />
            {/* backend */}
            <TechCard title='Backend Tech'
                description={`I've build my own apis using`}
                otherClass='col-span-1 flex-col lg:flex-row justify-center items-center p-10'
                Component={
                    <div className="lg:w-2/3">
                        <TechComponent technologies={backendTechnologies} />
                    </div>}
            />
            {/* Programming Languages */}
            <TechCard title='Languages'
                description={`I've strong basis in theese`}
                otherClass='col-span-1 flex-col lg:flex-row justify-center items-center p-10'
                Component={
                    <div className="lg:w-2/3">
                        <TechComponent technologies={programmingLanguages} />
                    </div>}
            />
        </section>
    )
}
