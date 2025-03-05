import React, {useState} from 'react'
import { motion } from 'framer-motion';
import './portal.css'; // Custom CSS for styling



const Portal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showError, setShowError] = useState(false);
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (email === 'client@treos.com' && password === 'securepassword') {
        setIsLoggedIn(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <motion.div
      className="client-portal-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Portal Header */}
      <motion.div
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
      >
        <h1>Welcome to the Treos Client Portal</h1>
        <p>Your gateway to exclusive resources, documentation, and support.</p>
      </motion.div>
{/* Login Form */}
{!isLoggedIn ? (
        <motion.div
          className="login-form"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
        >
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
          />
</div>

<div className="form-group">
  <label htmlFor="password">Password</label>
  <input
    type="password"
    id="password"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
</div>

{showError && (
  <motion.div
    className="error-message"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <p>Invalid email or password. Please try again.</p>
  </motion.div>
)}

<button type="submit" className="login-btn">Login</button>
</form>
</motion.div>
) : (
<motion.div
className="welcome-message"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}
>
<h2>Welcome, Client!</h2>
<p>You are now logged in to your secure portal. Access your resources, support, and more.</p>
<button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
Logout
</button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Portal