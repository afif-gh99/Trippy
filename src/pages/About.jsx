import AboutCont from "../components/AboutCont/AboutCont"
import Hero from "../components/Hero/Hero"
import OurAbout from "../components/OurAbout/OurAbout"

const About = () => {
    return (
        <>
            <Hero
                cName="mid-hero"
                bgImage='/Images/about-image.jpg'
                title="About"
            />
            <AboutCont />
        </>
    )
}

export default About
