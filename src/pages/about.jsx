import React from 'react'
import { motion } from 'framer-motion';
import './About.css';


const About = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="header"
      >
        <h1>About Treos: Your Trusted Partner in Cybersecurity</h1>
        <p>
                  Discover our journey, mission, and vision as we lead the way in securing organizations against modern cybersecurity threats.
        </p>
      </motion.header>

      {/* Our Story & Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="our-story"
      >
    <h2>Our Story & Mission</h2>
        <div className="story-content">
          {/* Our History */}
          <motion.div
            className="story-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Our History</h3>
            <p>
              Treos was founded with the vision of providing world-class cybersecurity solutions to protect organizations from evolving threats. Our journey began in 2010, and since then, we have grown into a global leader in the cybersecurity industry.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className="story-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Mission Statement</h3>
            <p>
              Our mission is to deliver innovative, comprehensive, and cutting-edge cybersecurity solutions that empower organizations to stay ahead of the curve in the fight against cyber threats.
            </p>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            className="story-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Vision Statement</h3>
            <p>
              We envision a world where organizations, large and small, operate with confidence, knowing their data and systems are fully protected. We aim to be at the forefront of the cybersecurity industry, setting new standards for security and innovation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership & Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="leadership"
      >
        <h2>Leadership & Team</h2>
        <div className="team-content">
          {/* Leadership Profile */}
          <motion.div
            className="team-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/leadership1.jpg" alt="Leadership" />
            <h3>John Doe - CEO</h3>
            <p>
              John is the visionary leader behind Treos, with over 20 years of experience in the cybersecurity industry. His leadership has steered the company to international success.
              </p>
          </motion.div>

          {/* Team Profile */}
          <motion.div
            className="team-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/leadership2.jpg" alt="Team Member" />
            <h3>Jane Smith - CTO</h3>
            <p>
              Jane is the technological mastermind driving Treos' product development and innovation. She has been instrumental in integrating AI into our cybersecurity solutions.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Awards & Certifications Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="awards"
      >
        <h2>Awards & Certifications</h2>
        <div className="awards-content">
          <motion.div
            className="award-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>ISO/IEC 27001 Certified</h3>
            <p>
              Treos is ISO/IEC 27001 certified, ensuring that we meet global standards for information security management.
              </p>
          </motion.div>

          <motion.div
            className="award-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Cybersecurity Excellence Award</h3>
            <p>
              We were awarded the Cybersecurity Excellence Award for our innovative cybersecurity solutions and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="cta"
      >
        <h2>Join Our Team</h2>
        <p>Are you passionate about cybersecurity? Join Treos and help make a difference in the digital world.</p>
        <a href="/careers" className="cta-btn">Explore Careers</a>
      </motion.section>
    </div>
  );
};



export default About