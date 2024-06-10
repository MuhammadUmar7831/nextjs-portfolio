import { about } from '@/data/about'
import TechStack from './About/TechStack'

export default function About() {
    return (
        <section>
            <h1 className=' text-4xl mb-10'>About Me</h1>
            <div className='grid grid-cols-3'>
                <TechStack />
            </div>
        </section>
    )
}
