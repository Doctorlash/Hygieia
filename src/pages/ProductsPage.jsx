import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductsPage.css';

const ProductsPage = () => {
  const products = [
    {
      title: 'Facial Recognition Security Solution',
      description:
        'Biometric verification, real-time threat analysis, and integration with existing systems for enhanced security.',
      features: [
        'Biometric verification',
        'Real-time threat analysis', 
        'Seamless integration with existing systems',
      ],
      benefits: [
        'Enhanced access control',
        'Reduced fraud risk',
        'Seamless user experience',
      ],
      demo: '/video-demo-facial-recognition',
    },
    {
      title: 'Intrusion Detection Systems',
      description: 'Real-time network monitoring and threat detection.',
      features: [
        'Network traffic monitoring',
        'Real-time threat alerts',
        'Advanced intrusion detection algorithms',
      ],
      benefits: [
        'Early detection of attacks',
        'Minimized impact of intrusions',
        'Continuous monitoring',
      ],
      demo: '/video-demo-intrusion-detection',
    },
    {
      title: 'Encryption & Data Protection Tools', 
      description: 'Tools to secure sensitive data and communications.',
      features: [
        'End-to-end encryption',
        'Data masking and tokenization',
        'Secure communication protocols',
      ],
      benefits: [
        'Protect sensitive business data',
        'Ensure compliance with regulations',
        'Prevent unauthorized data access',
      ],
      demo: '/video-demo-encryption-tools',
    },
    {
      title: 'Mobile Security Solutions',
      description: 'Secure remote access and data protection for mobile devices.',
      features: [
        'Device encryption',
        'Secure VPN access',
        'Mobile threat defense',
      ],
      benefits: [
        'Enhanced mobile device security',
        'Secure remote work environments',
        'Protection against mobile threats',
      ],
      demo: '/video-demo-mobile-security',
    },
  ];

  return (
    <motion.div 
      className="products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="background-overlay">
        <div className="content">
          <motion.h1 
            className="products-header"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Innovative Security Solutions by Treos
          </motion.h1>
          <motion.p 
            className="overview"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            At Treos, we combine advanced technology with robust security protocols to safeguard your business from evolving
            threats.
          </motion.p>

          <motion.div className="product-list">
            <AnimatePresence>
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="product-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="product-image">
                    <motion.img
                      src={'./treos/treos1'}
                      alt={product.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <h4>Features:</h4>
                  <ul>
                    {product.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <h4>Benefits:</h4>
                  <ul>
                    {product.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={product.demo} className="cta-button">
                      Watch Demo
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="/product-specifications.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button"
                    >
                      Download Brochure
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
    
          <motion.div 
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>
              Interested in a personalized demo or speaking with a product specialist?{' '}
              <motion.span whileHover={{ scale: 1.05 }}>
                <Link to="/contact" className="cta-link">
                  Request a Demo
                </Link>
              </motion.span>
              {' or '}
              <motion.span whileHover={{ scale: 1.05 }}>
                <Link to="/contact" className="cta-link">
                  Speak with a Product Specialist
                </Link>
              </motion.span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsPage;
