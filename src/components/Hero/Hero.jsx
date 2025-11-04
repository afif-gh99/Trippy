import './Hero.css'

const Hero = ({ bgImage, title, desc, btn, cName }) => {
    return (
        <div className={cName}>
            <img src={bgImage} alt="" />
            <div className="hero-text">
                <h1>{title}</h1>
                {desc && <p>{desc}</p>}
                {btn && <button>{btn}</button>}
            </div>
        </div>
    )
}

export default Hero
