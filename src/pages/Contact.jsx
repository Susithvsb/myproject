import { useState } from 'react'
import { menuItems, eventTypes } from '../data/menuItems'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    numberOfPeople: '',
    selectedDishes: [],
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDishChange = (dishId) => {
    setFormData(prev => ({
      ...prev,
      selectedDishes: prev.selectedDishes.includes(dishId)
        ? prev.selectedDishes.filter(id => id !== dishId)
        : [...prev.selectedDishes, dishId]
    }))
  }

  const getAllDishes = () => {
    const allDishes = []
    Object.values(menuItems).forEach(category => {
      category.forEach(dish => {
        allDishes.push(dish)
      })
    })
    return allDishes
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        numberOfPeople: '',
        selectedDishes: [],
        message: ''
      })
    }, 5000)
  }

  if (submitted) {
    return (
      <div className="contact-page">
        <div className="contact-container">
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your inquiry has been submitted successfully.</p>
            <p>We'll get back to you soon to discuss your event details.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Tell us about your event and we'll help you plan the perfect menu</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-section">
            <h2>Event Details</h2>
            
            <div className="form-group">
              <label htmlFor="eventType">Event Type *</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventDate">Event Date *</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="numberOfPeople">Number of People *</label>
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Select Dishes</h2>
            <p className="section-description">
              Choose the dishes you'd like for your event. You can select multiple items from our menu.
            </p>
            <div className="dishes-selection">
              {Object.entries(menuItems).map(([category, dishes]) => (
                <div key={category} className="dish-category">
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
                  <div className="dish-checkboxes">
                    {dishes.map((dish) => (
                      <label key={dish.id} className="dish-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.selectedDishes.includes(dish.id)}
                          onChange={() => handleDishChange(dish.id)}
                        />
                        <span>
                          <strong>{dish.name}</strong> - {dish.description}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h2>Your Contact Information</h2>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Requirements or Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about any dietary restrictions, special requirements, or questions you have..."
              ></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
