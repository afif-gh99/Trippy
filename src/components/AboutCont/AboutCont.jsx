import OurAbout from '../OurAbout/OurAbout'
import './AboutCont.css'

const AboutCont = () => {
    return (
        <div className='about-container'>
            <OurAbout
                title="Our History"
                desc="Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. rippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence."
            />
            <OurAbout
                title="Our Mission"
                desc="Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness."
            />
            <OurAbout
                title="Our Vision"
                desc="To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients."
            />

        </div>
    )
}

export default AboutCont
