import React from 'react'
import { LinkPreview } from './ui/link-preview'
import ProjectCard from './Projects/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
    return (
        <section className='w-full mt-44'>
            <div className='w-full mb-10'>
                <h1 className='text-5xl text-center font-bold tracking-wider py-2'>
                    Recent {" "}
                    <LinkPreview isStatic={true} url="/images/project.gif" imageSrc='/images/project.gif' className='bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent'>
                        Projects
                    </LinkPreview>
                    {" "}
                </h1>
                <p className='text-center mt-2 text-xl tracking-wider'>developed by{" "}
                    <span className='bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent'>me</span>
                    {" "}with ❤️
                </p>
            </div>
            <div className='flex flex-wrap gap-4'>
                {projects.map((project) => (
                    <ProjectCard key={project.id} name={project.title} descripton={project.description} image={project.imageSrc} github={project.github} screenshots={project.screenshots} video={project.video} liveDemo={project.liveDemo} technologies={project.technologies} contributors={project.contributors} />
                ))}
            </div>
        </section>
    )
}
