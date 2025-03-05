import React from 'react';
import { motion } from 'framer-motion';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="header"
      >
        <h1>Insights & Updates from the Cybersecurity Frontline</h1>
        <p>
          Stay ahead in cybersecurity with the latest news, trends, and best practices to protect your organization and
          personal data.
        </p>
      </motion.header>

      {/* Blog Categories */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="categories"
      >
        <h2>Blog Categories</h2>
        <div className="category-list">
          <motion.div
            className="category-item"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Industry News</h3>
            <p>Stay updated on the latest cybersecurity trends and threats.</p>
          </motion.div>
          <motion.div
            className="category-item"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Best Practices</h3>
            <p>Learn tips and guidelines for securing your digital assets.</p>
          </motion.div>
          <motion.div
            className="category-item"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Product Updates</h3>
            <p>Announcements and improvements to Treos cybersecurity solutions.</p>
          </motion.div>
          <motion.div
            className="category-item"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Thought Leadership</h3>
            <p>Expert opinions on the future of cybersecurity and AI.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Posts */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="featured-posts"
      >
        <h2>Featured Posts</h2>
        <div className="post-grid">
          <motion.div
            className="post-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="https://via.placeholder.com/500x300" alt="Post 1" />
            <h3>Cybersecurity Threats in 2025</h3>
            <p>
              The cybersecurity landscape is rapidly evolving. Learn what to expect in the coming years and how to stay
              secure.
            </p>
          </motion.div>
          <motion.div
            className="post-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="https://via.placeholder.com/500x300" alt="Post 2" />
            <h3>AI and the Future of Cybersecurity</h3>
            <p>Exploring how artificial intelligence will change the cybersecurity industry.</p>
          </motion.div>
          <motion.div
            className="post-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="https://via.placeholder.com/500x300" alt="Post 3" />
            <h3>Building a Robust Cybersecurity Strategy</h3>
            <p>Strategies to defend against the most sophisticated attacks and vulnerabilities.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="newsletter"
      >
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest updates on cybersecurity best practices.</p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </motion.section>
    </div>
  );
};

export default BlogPage;


