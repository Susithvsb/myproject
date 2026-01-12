import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to A.K Catering Services</h1>
          <p className="hero-tagline">Delicious Events, Memorable Moments</p>
          <p className="hero-description">
            We specialize in creating extraordinary culinary experiences for your special occasions.
            From intimate gatherings to grand celebrations, we bring passion and flavor to every event.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Book Your Event
            </Link>
            <Link to="/menu" className="btn btn-secondary">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose A.K Catering Services?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Exquisite Menu</h3>
            <p>Wide variety of traditional and modern dishes crafted with love</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🍳</div>
            <h3>Expert Chef</h3>
            <p>Years of experience in creating memorable culinary experiences</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎉</div>
            <h3>All Occasions</h3>
            <p>Weddings, corporate events, birthdays, and more</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Quality Service</h3>
            <p>Dedicated to making your event perfect in every detail</p>
          </div>
        </div>
      </section>

      <section className="quick-navigation">
        <h2>Explore Our Services</h2>
        <div className="nav-cards">
          <Link to="/menu" className="nav-card">
            <div className="nav-card-icon">📋</div>
            <h3>Our Menu</h3>
            <p>Browse our delicious selection of dishes</p>
          </Link>
          <Link to="/events" className="nav-card">
            <div className="nav-card-icon">📸</div>
            <h3>Past Events</h3>
            <p>See our previous successful events</p>
          </Link>
          <Link to="/about" className="nav-card">
            <div className="nav-card-icon">👤</div>
            <h3>About Us</h3>
            <p>Learn about A.K Catering Services</p>
          </Link>
          <Link to="/contact" className="nav-card">
            <div className="nav-card-icon">📞</div>
            <h3>Contact Us</h3>
            <p>Get in touch to plan your event</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
