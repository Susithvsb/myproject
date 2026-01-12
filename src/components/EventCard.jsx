import '../styles/EventCard.css'

function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.eventType} />
      </div>
      <div className="event-content">
        <h3>{event.eventType}</h3>
        <p className="event-date">{event.date}</p>
        <p className="event-guests">{event.guests} Guests</p>
        <p className="event-description">{event.description}</p>
        <div className="event-dishes">
          <strong>Featured Dishes:</strong>
          <ul>
            {event.featuredDishes.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EventCard
