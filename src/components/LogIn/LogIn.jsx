import { Link } from 'react-router'
import './LogIn.css'

const LogIn = () => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='log-box'>
            <h1>Log in to your account</h1>
            <form>
                <input type="email" id="email" placeholder='Your Email' />
                <input type="password" className="password" placeholder='Password' />
                <input type="password" className="password" placeholder='Repeat yout password' />
                <input type="submit" value="Log In" />
            </form>
            <p>Don't have an account? <Link onClick={handleScrollToTop} to='/signup'>Signup here </Link></p>
        </div>
    )
}

export default LogIn
