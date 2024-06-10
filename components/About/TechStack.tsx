import React from 'react'
import AboutCard from './AboutCard'
import Tecnologies from './Tecnologies'

export default function TechStack() {
    return (
        <AboutCard
            title='My Tech Stack'
            description='I constantly try to improve'
            otherClass='col-span-3 lg:col-span-2 flex-col lg:flex-row justify-center items-center p-10'
            Component={
                <div className="lg:w-2/3">
                    <Tecnologies />
                </div>
            } />
    )
}
