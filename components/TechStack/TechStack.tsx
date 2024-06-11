import React from 'react';
import TechCard from './TechCard';
import { backendTechnologies, databases, frontendTechnologies, programmingLanguages, toolsLib } from '@/data/Technologies';
import TechComponent from './TechComponent';

export default function TechStack() {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* frontend */}
            <TechCard
                title="Frontend Tech"
                description={`I've created beautiful applications using`}
                otherClass="col-span-1 lg:col-span-2"
                contentClass="flex flex-col lg:flex-row justify-center items-center gap-2"
                Component={
                    <div className="w-full lg:w-2/3">
                        <TechComponent technologies={frontendTechnologies} />
                    </div>
                }
            />
            {/* backend */}
            <TechCard
                title="Backend Tech"
                description={`I've built my own APIs using`}
                otherClass="col-span-1"
                contentClass="flex flex-col lg:flex-row justify-center items-center gap-2"
                Component={
                    <div className="w-full lg:w-2/3">
                        <TechComponent technologies={backendTechnologies} />
                    </div>
                }
            />
            {/* Databases */}
            <TechCard
                title="Databases"
                description={`I've also managed these'`}
                otherClass="col-span-1"
                contentClass="flex flex-col lg:flex-row justify-center items-center gap-2"
                Component={
                    <div className="w-full lg:w-2/3">
                        <TechComponent technologies={databases} />
                    </div>
                }
            />
            {/* Programming Languages */}
            <TechCard
                title="Programming Languages"
                description={`I have a strong basis in these`}
                otherClass="col-span-1 lg:col-span-2"
                contentClass="flex flex-col lg:flex-row justify-center items-center gap-2"
                Component={
                    <div className="w-full lg:w-2/3">
                        <TechComponent technologies={programmingLanguages} />
                    </div>
                }
            />
            {/* Tools/Lib */}
            <TechCard
                title="Tools/Lib"
                description={`I am familiar to these`}
                otherClass="col-span-1 lg:col-span-3"
                contentClass="flex flex-col lg:flex-row justify-center items-center gap-2"
                Component={
                    <div className="w-full lg:w-2/3">
                        <TechComponent technologies={toolsLib} />
                    </div>
                }
            />
        </section>
    );
}
