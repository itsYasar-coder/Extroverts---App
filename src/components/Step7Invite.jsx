import React from 'react';
import { motion } from 'framer-motion';
import './Step7Invite.css';

const Step7Invite = ({ formData, updateData, onComplete, onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: 20 }}
      className="step7-wrapper"
    >

      <div className="step7-header-row">
        <h1 className="logo-e">E<span className="logo-dot">•</span></h1>
        <span className="step7-getting-ready-text">
          GETTING READY
        </span>
      </div>

 
      <div className="step7-manifesto">
        <p>KINDNESS = GOOD <span className="step7-highlight">HAIR</span> DAY</p>
        <p>SIP IN? <span className="step7-highlight">CHIP</span> IN.</p>
        <p>GHOSTING IS FOR <span className="step7-highlight">HALLOWEEN</span>.</p>
        <p>OUTFITS LOUD, <span className="step7-highlight">INTENTIONS</span> CLEAR.</p>
        <p>JOINING? FREE. HOSTING? <span className="step7-highlight">ALSO</span> FREE.</p>
        <p>EARLLY IS <span className="step7-highlight">ICONIC</span>.</p>
        <p>YES. <span className="step7-highlight">SPELLING</span> MISTAKE.</p>
      </div>
      

      <div className="step7-input-group">
        <label className="step7-input-label">
          ENTER INVITE CODE (optional)
        </label>
        
        <input 
          type="text" 
          value={formData.inviteCode || ''}
          onChange={(e) => updateData('inviteCode', e.target.value)}
          className="step7-custom-input"
        />
      </div>

      <p className="step7-helper-text">
        Enter invite code and get up to +30 HVTs!
      </p>

      <div className="step7-action-buttons">
        <button 
          onClick={onComplete}
          className="step7-btn-primary"
        >
          SIGN UP
        </button>
        <button 
          onClick={onBack}
          className="step7-btn-secondary"
        >
          BACK
        </button>
      </div>
    </motion.div>
  );
};

export default Step7Invite;