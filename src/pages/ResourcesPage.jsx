import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ResourcePage.css"

const ResourcesPage = () => {
  return(
  <div className="app-container">
  {/* Header Section */}
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="header"
  >
    <h1>Empowering You with Knowledge</h1>
    <p>
      A hub for downloadable content, case studies, and how-to guides designed to help organizations enhance their
      security posture.
    </p>
  </motion.header>

  {/* Resource Types */}
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="resources"
>
  <h2>Resource Types</h2>
        <div className="resource-list">
          {/* White Papers & eBooks */}
          <motion.div
            className="resource-item"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>White Papers & eBooks</h3>
            <p>In-depth research and guides on cybersecurity topics.</p>
            <button className="download-btn">Download Now</button>
          </motion.div>

          {/* Case Studies */}
          <motion.div
            className="resource-item"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Case Studies</h3>
            <p>Real-world examples of how Treos solutions have made an impact.</p>
            <button className="download-btn">Download Now</button>
          </motion.div>

          {/* Webinars & Videos */}
          <motion.div
            className="resource-item"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Webinars & Videos</h3>
            <p>Educational content and expert discussions.</p>
            <button className="download-btn">Download Now</button>
          </motion.div>

          {/* Infographics & Cheat Sheets */}
          <motion.div
            className="resource-item"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Infographics & Cheat Sheets</h3>
            <p>Quick references on best practices and threat trends.</p>
            <button className="download-btn">Download Now</button>
          </motion.div>
        </div>
      </motion.section>

      {/* Lead Capture Form */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="lead-capture"
      >
        <h2>Stay Updated</h2>
        <p>Subscribe to receive the latest resources and cybersecurity news directly to your inbox.</p>
        <form className="capture-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
            required
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default ResourcesPage;
