import './MainTitle.css'

const MainTitle = ({ title, desc }) => {
    return (
        <div className="main-title">
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default MainTitle
