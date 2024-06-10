import { about } from '@/data/about'
import TechStack from './About/TechStack'
import Location from './About/Location'

export default function About() {
    return (
        <div className='grid grid-cols-3'>
            <TechStack />
            <Location />
        </div>
    )
}
