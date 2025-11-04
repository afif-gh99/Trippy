import { Link, NavLink } from 'react-router'
import './NavBar.css'
import { useState } from 'react';
const NavBar = ({ logo, items, btn, burger }) => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
        handleMenu()
    };

    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <nav>
            <h1>{logo}</h1>
            <div className={showMenu ? "active" : " "} >
                <ul>
                    {items?.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    className={({ isActive }) => isActive ? "active" : ""}
                                    to={item?.url}
                                    onClick={handleScrollToTop}
                                >
                                    {item?.icon}
                                    {item?.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <Link onClick={handleScrollToTop} className='sign' to='/signup'>{btn}</Link>
            </div>
            <span onClick={handleMenu}>{burger}</span>
        </nav>
    )
}
// function showNav() {
//     const navBar = document.querySelector('nav div')
//     navBar.classList.toggle("active")
// }
export default NavBar
