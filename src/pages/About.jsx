import '../styles/About.css'

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About A.K Catering Services</h1>
          <p className="subtitle">Crafting Culinary Excellence Since Day One</p>
        </div>

        <section className="about-section">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              A.K Catering Services was founded with a passion for creating memorable dining experiences
              that bring people together. We believe that great food is the heart of every celebration,
              and our commitment to quality, flavor, and service has made us a trusted name in the catering industry.
            </p>
            <p>
              From intimate family gatherings to grand celebrations, we've been serving our community
              with dedication and culinary expertise, ensuring that every event we cater becomes a
              cherished memory for our clients.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Meet A. Karthik</h2>
            <div className="chef-profile">
              <div className="chef-info">
                <p>
                  As the owner and head chef of A.K Catering Services, A. Karthik brings years of
                  culinary expertise and a deep understanding of traditional flavors combined with
                  modern presentation. His journey in the culinary world began with a passion for
                  creating dishes that not only satisfy the palate but also tell a story.
                </p>
                <p>
                  Karthik's commitment to using the finest ingredients, combined with his innovative
                  approach to traditional recipes, has earned him recognition for excellence in catering.
                  He personally oversees every event, ensuring that each dish meets the highest standards
                  of quality and taste.
                </p>
                <p>
                  With a warm personality and attention to detail, Karthik ensures that every client's
                  vision is brought to life through carefully crafted menus and impeccable service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">💒</div>
                <h3>Weddings</h3>
                <p>Complete wedding catering services with customizable menus for your special day</p>
              </div>
              <div className="service-item">
                <div className="service-icon">🏢</div>
                <h3>Corporate Events</h3>
                <p>Professional catering for conferences, meetings, and corporate gatherings</p>
              </div>
              <div className="service-item">
                <div className="service-icon">🎂</div>
                <h3>Birthdays & Celebrations</h3>
                <p>Make your celebrations memorable with our delicious party menus</p>
              </div>
              <div className="service-item">
                <div className="service-icon">🎉</div>
                <h3>Festivals & Special Occasions</h3>
                <p>Traditional and modern dishes for all your festive celebrations</p>
              </div>
              <div className="service-item">
                <div className="service-icon">🍽️</div>
                <h3>Custom Menus</h3>
                <p>Tailored menus designed specifically for your event and preferences</p>
              </div>
              <div className="service-item">
                <div className="service-icon">👥</div>
                <h3>Small & Large Events</h3>
                <p>From intimate gatherings to large-scale events, we cater to all sizes</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Our Values</h2>
            <div className="values-list">
              <div className="value-item">
                <strong>Quality First:</strong> We use only the finest, freshest ingredients in all our dishes.
              </div>
              <div className="value-item">
                <strong>Customer Satisfaction:</strong> Your happiness is our top priority, and we work tirelessly to exceed expectations.
              </div>
              <div className="value-item">
                <strong>Innovation:</strong> We blend traditional recipes with modern culinary techniques for unique flavors.
              </div>
              <div className="value-item">
                <strong>Reliability:</strong> Count on us to deliver on time, every time, with consistent quality.
              </div>
              <div className="value-item">
                <strong>Passion:</strong> Our love for food and service drives everything we do.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
