import React from 'react';
import './TourismPage.css'; // Import the CSS file

const TourismPage: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to our Tourism Website</h1>
          <p>Discover the world's most breathtaking destinations</p>
          <a href="/destinations" className="cta-button">Explore Destinations</a>
        </section>

        <section className="destinations">
          <h2>Popular Destinations</h2>
          <div className="destination-card">
            <img src="images/cute.jpg" alt="Destinatisson" />
            <div className="destination-details">
              <h3>Destination Name</h3>
              <p>Explore the beauty of this amazing destination with stunning landscapes and rich culture.</p>
              <a href="/destinations/1" className="read-more">Read More</a>
            </div>
          </div>
          <div className="destination-card">
            <img src="images/cute1.jpg" alt="Destination" />
            <div className="destination-details">
              <h3>Destination Name</h3>
              <p>Discover the hidden gems of this beautiful location and immerse yourself in the local traditions.</p>
              <a href="/destinations/2" className="read-more">Read More</a>
            </div>
          </div>
          {/* Add more destination cards */}
        </section>

        <section className="activities">
          <h2>Popular Activities</h2>
          <div className="activity-card">
            <img src="images/Merlion-Statue.jpg" alt="Activity" />
            <div className="activity-details">
              <h3>Activity Name</h3>
              <p>Embark on an unforgettable adventure with this exciting activity and create lasting memories.</p>
              <a href="/activities/1" className="read-more">Read More</a>
            </div>
          </div>
          <div className="activity-card">
            <img src="images/Marina-Bay-Sands.jpg" alt="Activity" />
            <div className="activity-details">
              <h3>Activity Name</h3>
              <p>Experience the thrill of this amazing activity and enjoy an adrenaline-pumping experience.</p>
              <a href="/activities/2" className="read-more">Read More</a>
            </div>
          </div>
          {/* Add more activity cards */}
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Tourism Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TourismPage;
