import Trip from '../Trip/Trip'
import './Trips.css'

const Trips = () => {
    return (
        <div className='trips'>
            <Trip
                image='/Images/trip1.png'
                title="Trip in Indonesia"
                brief="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
            />
            <Trip
                image='/Images/trip2.png'
                title="Trip in Malaysia"
                brief="Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"
            />
            <Trip
                image='/Images/trip3.png'
                title="Trip in France"
                brief="France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
            />
        </div>
    )
}

export default Trips
