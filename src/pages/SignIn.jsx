import Hero from "../components/Hero/Hero"
import LogIn from "../components/LogIn/LogIn"

const SignIn = () => {
    return (
        <>
            <Hero
                cName="mid-hero"
                bgImage='/Images/dest2-1.png'
                title="Log In"
            />
            <LogIn />
        </>
    )
}

export default SignIn
