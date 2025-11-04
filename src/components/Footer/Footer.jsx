import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="top">
                <div className="text">
                    <h1>Trippy</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div className="social">
                    <i className="fa-brands fa-facebook-square"></i>
                    <i className="fa-brands fa-instagram-square"></i>
                    <i className="fa-brands fa-behance-square"></i>
                    <i className="fa-brands fa-twitter-square"></i>
                </div>
            </div>
            <div className="links">
                <ul>
                    <h2>Project</h2>
                    <li>Changelog</li>
                    <li>Status</li>
                    <li>License</li>
                    <li>All Versions</li>
                </ul>
                <ul>
                    <h2>Community</h2>
                    <li>GitHub</li>
                    <li>Issues</li>
                    <li>Project</li>
                    <li>Twitter</li>
                </ul>
                <ul>
                    <h2>Help</h2>
                    <li>Support</li>
                    <li>Troubleshooting</li>
                    <li>Contact us</li>
                </ul>
                <ul>
                    <h2>Others</h2>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>License</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
