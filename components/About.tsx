import { about } from '@/data/about'
import TechStack from './About/TechStack'

export default function About() {
    return (
        <div className='grid grid-cols-3'>
            <TechStack />
        </div>
    )
}
