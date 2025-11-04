import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import { FaAddressBook, FaBars, FaBriefcase, FaCircleInfo, FaHouseUser } from 'react-icons/fa6'
import Footer from "../components/Footer/Footer"

let items = [
    { icon: <FaHouseUser />, title: "Home", url: '/' },
    { icon: <FaCircleInfo />, title: "About", url: '/about' },
    { icon: <FaBriefcase />, title: "Services", url: '/services' },
    { icon: <FaAddressBook />, title: "Contact", url: '/contact' },
]
const Root = () => {
    return (
        <>
            <Header>
                <NavBar
                    logo="Trippy"
                    items={items}
                    btn="Sign Up"
                    burger={<FaBars />}
                />
            </Header>
            <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default Root
