import Hero from "../components/Hero/Hero"
import MainTitle from "../components/MainTitle/MainTitle"
import Trips from "../components/Trips/Trips"

const Services = () => {
    return (
        <>
            <Hero
                cName="mid-hero"
                bgImage='/Images/ser-image.png'
                title="Services"
            />
            <MainTitle
                title="Recent Trips"
                desc="You can discover unique destination using Google Maps."
            />
            <Trips />
        </>
    )
}

export default Services
