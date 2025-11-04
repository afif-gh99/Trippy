import ContactUs from "../components/ContactUs/ContactUs"
import Hero from "../components/Hero/Hero"

const Contact = () => {
    return (
        <>
            <Hero
                cName="mid-hero"
                bgImage='/Images/contact-image.png'
                title="Contact"
            />
            <ContactUs />
        </>
    )
}

export default Contact
