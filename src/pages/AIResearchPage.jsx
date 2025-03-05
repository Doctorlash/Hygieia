import React from 'react';
import { motion } from 'framer-motion';
import './AIResearchPage.css';

const AIResearchPage = () => {
  return (
    <div className="ai-research-container">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="header"
      >
        <h1>Pioneering AI in Cybersecurity</h1>
        <p>
          Explore our research initiatives in AI, machine learning, and their
          transformative impact on cybersecurity.
        </p>
      </motion.header>

      {/* Research Areas & Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="research-areas"
        >
        <h2>Research Areas & Projects</h2>
        <div className="research-list">
          {/* AI-Driven Threat Intelligence */}
          <motion.div
            className="research-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>AI-Driven Threat Intelligence</h3>
            <p>
              Harnessing AI to identify emerging threats and vulnerabilities
              before they materialize.
            </p>
          </motion.div>

          {/* Predictive Analytics & Risk Modeling */}
          <motion.div
            className="research-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Predictive Analytics & Risk Modeling</h3>
            <p>
              Leveraging data analytics to forecast potential cybersecurity
              vulnerabilities.
            </p>
          </motion.div>

          {/* Behavioral Biometrics & Facial Recognition */}
          <motion.div
            className="research-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
<h3>Behavioral Biometrics & Facial Recognition</h3>
            <p>
              Advanced user verification techniques using biometric data and
              facial recognition to prevent fraud.
            </p>
          </motion.div>

          {/* Collaborative Research & Partnerships */}
          <motion.div
            className="research-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Collaborative Research & Partnerships</h3>
            <p>
              Collaborations with universities, research labs, and tech companies
              to push the boundaries of cybersecurity innovation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Publications & Webinars Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="resources"
      >
        <h2>Publications & Webinars</h2>
        <p>Browse through our library of research papers, articles, and expert talks.</p>
        <div className="resource-list">
          <motion.div
            className="resource-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Research Papers & Articles</h3>
            <p>Download in-depth research and insights on AI in cybersecurity.</p>
            <button className="download-btn">Download Now</button>
          </motion.div>

          <motion.div
            className="resource-item"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Webinars & Video Talks</h3>
            <p>Watch recorded presentations and discussions from our research team.</p>
            <button className="download-btn">Watch Now</button>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="cta"
      >
        <h2>Join Our Research Community</h2>
        <p>Stay updated with our latest research and developments in AI and cybersecurity.</p>
        <button className="cta-btn">Subscribe for Updates</button>
      </motion.section>
    </div>
  );
};

export default AIResearchPage;



