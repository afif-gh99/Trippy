import './Trip.css'

const Trip = ({ image, title, brief }) => {
    return (
        <div className='card'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <h2>{title}</h2>
            <p>{brief}</p>
        </div>
    )
}

export default Trip
