import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const services = [
  { icon: "🛡", title: "Threat & Vulnerability Assessments", description: "Comprehensive evaluations to identify security weaknesses." },
  { icon: "🔒", title: "Managed Security Services", description: "24/7 monitoring, incident detection, and rapid response." },
  { icon: "💻", title: "Penetration Testing", description: "Real-world attack simulations to uncover vulnerabilities." },
  { icon: "🏗", title: "Security Architecture & Integration", description: "Custom-tailored security frameworks for your infrastructure." },
  { icon: "🕵‍♂", title: "Incident Response & Forensics", description: "Immediate action and thorough investigation post-incident." },
  { icon: "⚖", title: "Risk & Compliance Management", description: "Ensuring regulatory compliance and risk mitigation." },
  { icon: "🧑‍💼", title: "Facial Recognition Access Control", description: "Innovative biometric security solutions integrated with your physical and digital security ecosystems." },
  { icon: "☁", title: "Cloud Security Solutions", description: "Protecting data and applications in the cloud." },
];

const Services = () => {
  return (
    <motion.section 
      className="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="services-intro"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>Our Cybersecurity & Information Security Services</h3>
        <p>At TREOS, we offer a holistic approach to security, blending traditional cybersecurity with next-gen AI integrations to provide comprehensive protection for your organization.</p>
      </motion.div>
     
      <div className="service-cards">
        {services.map((service, index) => (
          <motion.div 
            className="service-card" 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="service-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="case-studies"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2>Case Studies / Success Stories</h2>
        <p>Here are some of our client success stories that demonstrate the impact of our services:</p>
        <ul>
          <li><strong>Client 1:</strong> Increased threat detection accuracy by 35% with Managed Security Services.</li>
          <li><strong>Client 2:</strong> Prevented 4 major data breaches with our Penetration Testing services.</li>
        </ul>
      </motion.div>

      <motion.div 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>Ready to secure your organization?</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="/contact-us" className="cta-link">Speak with our experts</a>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Services;
