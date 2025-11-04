import { Outlet } from "react-router"
import Hero from "../components/Hero/Hero"
import Sign from "../components/Sign/Sign"

const SignUp = () => {
    return (
        <>
            <Hero
                cName="mid-hero"
                bgImage='/Images/sign-image.png'
                title="Sign Up"
            />
            <Sign />
        </>
    )
}

export default SignUp
