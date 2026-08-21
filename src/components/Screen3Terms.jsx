import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Screen3Terms.css';

const Screen3Terms = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-container"
        initial={{ y: "60%" }} 
        animate={{ y: 0 }}    
        exit={{ y: "100%" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }} 
        onDragEnd={(_, info) => {
          if (info.offset.y > 100) onClose(); 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drag-handle"></div>
        <div className="modal-header">
          <h2 className="modal-title">TERMS AND CONDITIONS</h2>
          <button className="close-icon-btn" onClick={onClose}><X size={24} /></button>
        </div>
        
        <div className="modal-body-content">
          <p>Welcome to Extroverts! Please take a moment to read these to ensure a safe and enjoyable experience for everyone:</p>
          <p><strong>Respect and Kindness:</strong> Treat everyone with respect and courtesy.</p>
          <p><strong>Personal Contributions:</strong> Each attendee is responsible for their own expenses.</p>
          <p><strong>App's Responsibility:</strong> The app connects people, we do not interfere in personal interactions.</p>
          <p><strong>Zero Tolerance for Harassment:</strong> Any form of harassment is not tolerated.</p>
          <p><strong>Sexual Conduct:</strong> All interactions must be consensual.</p>
          <p><strong>Safety First:</strong> Prioritize your safety.</p>
          <p><strong>Alcohol & Substances:</strong> Drink responsibly.</p>
          <p><strong>No Unapproved Recordings:</strong> Respect privacy.</p>
          <p><strong>Right to Leave:</strong> You can leave at any time.</p>
          <p>Thank you for helping us maintain a fun, respectful environment for everyone!</p>
        </div>

        <button className="consent-btn" onClick={onClose}>I UNDERSTAND</button>
        
        <div className="terms-footer-note">
          Read complete specification at hn-e.github.io/hn-e/terms-conditions. Domain khareedenge to ye change karna h, yaad dilana.
        </div>
      </motion.div>
    </div>
  );
};

export default Screen3Terms;