import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-content">
        <motion.div 
          className="footer-links"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ul>
            <li><motion.a whileHover={{ scale: 1.1 }} href="#">Privacy Policy</motion.a></li>
            <li><motion.a whileHover={{ scale: 1.1 }} href="#">Terms of Service</motion.a></li>
            <li><motion.a whileHover={{ scale: 1.1 }} href="#">Careers</motion.a></li>
            <li><motion.a whileHover={{ scale: 1.1 }} href="#">Social Media</motion.a></li>
            <li><motion.a whileHover={{ scale: 1.1 }} href="#">Site Map</motion.a></li>
            <li><motion.div whileHover={{ scale: 1.1 }}><Link to="/about">About Us</Link></motion.div></li>
            <li><motion.div whileHover={{ scale: 1.1 }}><Link to="/contact">Contact Us</Link></motion.div></li>
          </ul>
        </motion.div>
        <motion.div 
          className="social-links"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a whileHover={{ scale: 1.1 }} href="https://facebook.com">Facebook</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="https://twitter.com">Twitter</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="https://linkedin.com">LinkedIn</motion.a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          &copy; 2025 Treos Inc. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}

export default Footer
