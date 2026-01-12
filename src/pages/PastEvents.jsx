import { Link } from 'react-router-dom'
import { pastEvents } from '../data/pastEvents'
import EventCard from '../components/EventCard'
import '../styles/PastEvents.css'

function PastEvents() {
  return (
    <div className="past-events-page">
      <div className="events-container">
        <div className="events-header">
          <h1>Our Past Events</h1>
          <p>Showcasing some of our successful catering experiences</p>
        </div>

        <div className="events-grid">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="events-cta">
          <h2>Ready to Create Your Own Memorable Event?</h2>
          <p>Contact us today to discuss your catering needs</p>
          <Link to="/contact" className="btn-cta">
            Plan Your Event
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PastEvents
