import './Destinations.css'

const Destinations = ({ title, desc, img1, img2, dir }) => {
    return (
        <div className={dir ? "destination " + dir : "destination"
        }>
            <div className="descrption">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <div className="images">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
        </div >
    )
}

export default Destinations
