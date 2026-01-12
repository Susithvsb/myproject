import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>A.K Catering Services</h3>
          <p>Creating memorable moments through exceptional food and service.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/events">Past Events</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Owner: A. Karthik</p>
          <p>Email: info@akcateringservices.com</p>
          <p>Phone: +91 9715583019</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} A.K Catering Services. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
