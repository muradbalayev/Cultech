import Destinations from '../components/Home/Destinations'
import Hero from '../components/Home/Hero'
import Map from '../components/Home/Map'

const HomePage = () => {
    return (
        <div className='flex flex-col items-center'>
            <Hero />
            <div className='w-full lg:px-16 md:px-12 sm:px-8 px-4'>
            <Destinations />
            <Map />
            </div>
        </div>
    )
}

export default HomePage
