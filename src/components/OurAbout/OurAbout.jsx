import './OurAbout.css'

const OurAbout = ({ title, desc }) => {
    return (
        <div className='content'>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default OurAbout
