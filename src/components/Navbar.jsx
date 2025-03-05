
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      display: "block",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    closed: {
      opacity: 0, 
      x: "-100%",
      transitionEnd: {
        display: "none"
      },
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className="navbar"
      initial={false}
      animate={{ backgroundColor: "rgba(0,0,0,0.9)" }}
    >
      <motion.div 
        className="logo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="treos logo.png" alt="Treos Logo" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        TREOS INC.
      </motion.h1>

      <motion.button 
        className="menu-toggle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
      >
        &#9776;
      </motion.button>

      <motion.nav
        className="main-nav"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <motion.ul>
          {[
            { to: "/", text: "Home" },
            { to: "/services", text: "Services" },
            { to: "/products", text: "Products" },
            { to: "/ai-research", text: "AI Research" },
            { to: "/virtual-academy", text: "Virtual Academy" },
            { to: "/blog", text: "Blog" },
            { to: "/resources", text: "Resources" },
            { to: "/portal", text: "login"}
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.to}>{item.text}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
}


export default Navbar;
