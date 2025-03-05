import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Home.css';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="video-background">
          <video autoPlay loop muted>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.div 
          className="hero-content"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={fadeIn}>Securing Your Digital Future</motion.h1>
          <motion.p variants={fadeIn}>Treos delivers advanced cybersecurity solutions to protect your organization's data and assets.</motion.p>
          <motion.div 
            className="cta-buttons"
            variants={fadeIn}
          >
            <Link to="/services" className="cta-btn primary">Discover Our Solutions</Link>
            <Link to="/contact" className="cta-btn secondary">Get Started</Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Key Highlights Section */}
      <motion.section 
        className="highlights"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="highlight-item"
          variants={fadeIn}
        >
          <div className="icon">🔒</div>
          <h3>99.9% Uptime Guarantee</h3>
        </motion.div>
        <motion.div 
          className="highlight-item"
          variants={fadeIn}
        >
          <div className="icon">🛡</div>
          <h3>24/7 Threat Monitoring</h3>
        </motion.div>
        <motion.div 
          className="highlight-item"
          variants={fadeIn}
        >
          <div className="icon">🤖</div>
          <h3>Next-Gen Facial Recognition Security</h3>
        </motion.div>
      </motion.section>

      {/* Featured Sections */}
      <motion.section 
        className="featured-sections"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="featured-item"
          variants={fadeIn}
        >
          <h2>Our Services Snapshot</h2>
          <div className="services-icons">
            <motion.div whileHover={{ scale: 1.1 }} className="service-icon">🔍</motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="service-icon">🚨</motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="service-icon">💻</motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section 
        className='featured-section'
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="featured-item"
          variants={fadeIn}
          whileHover={{ scale: 1.02 }}
        >
          <div className="featured-icon">
            <motion.img 
              src="/treos1.jpg" 
              alt="Threat Assessment"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <h2>Threat Assessment</h2>
          <p>Discover our comprehensive cybersecurity services such as Threat Assessment, Incident Response, and Penetration Testing.</p>
          <Link to="/services" className="learn-more-link">Learn More</Link>
        </motion.div>

        <motion.div 
          className="featured-item"
          variants={fadeIn}
          whileHover={{ scale: 1.02 }}
        >
          <div className="featured-icon">
            <motion.img 
              src="https://via.placeholder.com/50?text=⚙" 
              alt="Products & Innovations"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <h2>Products & Innovations</h2>
          <p>Explore our cutting-edge products, especially the Facial Recognition Security Solution. <Link to="/products" className="learn-more-link">Learn More</Link></p>
        </motion.div>

        <motion.div 
          className="featured-item"
          variants={fadeIn}
          whileHover={{ scale: 1.02 }}
        >
          <div className="featured-icon">
            <motion.img 
              src="https://via.placeholder.com/50?text=🧠" 
              alt="AI Research"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <h2>Latest from AI Research</h2>
          <p>Stay updated on our current research projects and breakthroughs in AI and cybersecurity.</p>
          <Link to="/ai-research" className="learn-more-link">Learn More</Link>
        </motion.div>

        <motion.div 
          className="featured-item"
          variants={fadeIn}
          whileHover={{ scale: 1.02 }}
        >
          <div className="featured-icon">
            <motion.img 
              src="https://via.placeholder.com/50?text=🎓" 
              alt="Virtual Academy"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <h2>Virtual Academy Preview</h2>
          <p>We offer training programs in Cybersecurity, AI, and Data Analytics. <Link to="/academy" className="learn-more-link">Explore Courses</Link></p>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="testimonials"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn}>What Our Clients Say</motion.h2>
        <motion.div 
          className="client-logos"
          variants={staggerChildren}
        >
          <motion.img 
            src="https://via.placeholder.com/100" 
            alt="Client Logo 1"
            whileHover={{ scale: 1.1 }}
            variants={fadeIn}
          />
          <motion.img 
            src="https://via.placeholder.com/100" 
            alt="Client Logo 2"
            whileHover={{ scale: 1.1 }}
            variants={fadeIn}
          />
          <motion.img 
            src="https://via.placeholder.com/100" 
            alt="Client Logo 3"
            whileHover={{ scale: 1.1 }}
            variants={fadeIn}
          />
        </motion.div>
        <motion.p variants={fadeIn}>"Treos has been a game-changer in securing our organization's data!"</motion.p>
      </motion.section>

      {/* Footer CTA */}
      <motion.section 
        className="footer-cta"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn}>Ready to fortify your defenses?</motion.h2>
        <motion.div variants={fadeIn}>
          <Link to="/contact" className="cta-btn primary">Contact Us Today</Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
