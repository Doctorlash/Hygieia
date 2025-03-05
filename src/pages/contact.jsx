import React from 'react'
import { motion } from 'framer-motion';
import './Contact.css';


// Dummy map location URL, replace with actual API or embedded map
const mapLocation = "https://developers.google.com/maps/documentation/javascript/place";

const Contact = () => {
    return (
        <div className="contact-us">
          {/* Header Section */}
          <motion.div
            className="header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Get in Touch with Treos</h1>
            <p>We'd love to hear from you! Whether you have questions or want to discuss a partnership, feel free to reach out.</p>
          </motion.div>
    
          {/* Contact Form Section */}
          <motion.div
            className="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
              <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </motion.div>

      {/* Direct Contact Details Section */}
      <motion.div
        className="direct-contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2>Direct Contact</h2>
        <ul>
          <li><strong>Phone:</strong> +1 (555) 123-4567</li>
          <li><strong>Email:</strong> contact@treos.com</li>
          <li><strong>Address:</strong> 123 Cyber St, Tech City, TX 75001</li>
        </ul>
      </motion.div>

{/* Map and Social Links Section */}
<motion.div
        className="map-social"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="map">
          <h2>Our Location</h2>
          <iframe
            src={mapLocation}
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h2>Need More Help?</h2>
        <p>If you want to schedule a consultation or a demo, don’t hesitate to reach out to us.</p>
        <a href="/request-demo" className="cta-btn">Request a Consultation</a>
      </motion.div>
    </div>
  );
};


export default Contact