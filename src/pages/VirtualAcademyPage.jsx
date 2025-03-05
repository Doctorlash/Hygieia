import React from 'react'
import { motion } from 'framer-motion';
import './Virtual.css';

const VirtualAcademyPage = () => {
  return (

    <div className="app-container">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="header"
      >
        <h1>Treos Virtual Academy</h1>
        <p>Empowering Cybersecurity Professionals</p>
      </motion.header>

      <motion.section
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        className="intro"
      >
        <h2>Introduction</h2>
        <p>
          Our mission is to educate and empower professionals with the latest courses in cybersecurity, AI, and data
          analytics. Get hands-on experience with top-tier experts and gain industry-recognized certifications.
        </p>
</motion.section>

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="courses"
      >
        <h2>Course Offerings</h2>
        <div className="course-list">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="course-item"
          >
            <h3>Cybersecurity Courses</h3>
            <p>Fundamentals to advanced threat management.</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="course-item"
          >
            <h3>AI & Machine Learning for Security</h3>
            <p>Learn how AI can predict and mitigate threats.</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="course-item"
          >
            <h3>Data Analytics in Cybersecurity</h3>
            <p>Interpret data to enhance your security measures.</p>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="features"
      >
        <h2>Features of the Academy</h2>
        <ul>
          <li>
            <strong>Interactive Learning Modules:</strong> Video lessons, quizzes, and hands-on labs.
          </li>
          <li>
            <strong>Certifications:</strong> Earn industry-recognized certifications.
          </li>
          <li>
            <strong>Expert Instructors:</strong> Learn from seasoned professionals in cybersecurity and AI.
          </li>
          <li>
            <strong>Community Forums:</strong> Engage with peers and experts in live discussions.
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="cta"
      >
        <h2>Ready to Get Started?</h2>
        <p>Explore our courses and take your skills to the next level.</p>
        <a href="/courses" className="cta-button">
          Explore Courses
        </a>
      </motion.section>
    </div>
  );
};



export default VirtualAcademyPage