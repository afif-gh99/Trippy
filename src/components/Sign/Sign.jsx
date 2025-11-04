import { Link } from 'react-router'
import './Sign.css'

const Sign = () => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className='sign-box'>
            <h1>Create an account</h1>
            <form>
                <input type="text" id="name" placeholder='Your Name' />
                <input type="email" id="email" placeholder='Your Email' />
                <input type="password" className="password" placeholder='Password' />
                <input type="password" className="password" placeholder='Repeat yout password' />
                <input type="submit" value="Register" />
            </form>
            <p>Have already an account? <Link onClick={handleScrollToTop} to='/signin'>Login here</Link></p>
        </div>
    )
}

export default Sign
