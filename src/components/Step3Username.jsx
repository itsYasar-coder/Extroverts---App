import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Step3Username.css';

const Step3Username = ({ formData, updateData, onNext, onBack }) => {
  const [usernameError, setUsernameError] = useState('');

  const handleProceed = () => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;

    if (!formData.username.trim()) {
      setUsernameError('Username is required');
    } else if (formData.username.length < 3) {
      setUsernameError('Username must be at least 3 characters');
    } else if (!usernameRegex.test(formData.username)) {
      setUsernameError('Only letters, numbers, and underscores allowed');
    } else {
      setUsernameError('');
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="step3-wrapper"
    >

      <div className="step3-header-row">
        <h1 className="logo-e">E<span className="logo-dot">•</span></h1>
        <span className="step3-getting-ready-text">
          GETTING READY
        </span>
      </div>

      <h2 className="step3-title">Create a username that fits your vibe!</h2>

      <div className="step3-input-group">
        <label className="step3-input-label">USERNAME</label>
        <input
          type="text"
          className={`step3-custom-input ${usernameError ? 'step3-input-error' : ''}`}
          value={formData.username}
          onChange={(e) => {
            updateData('username', e.target.value.toLowerCase().replace(/\s/g, ''));
            setUsernameError('');
          }}
        />
        {usernameError && <span className="step3-error-text">{usernameError}</span>}
      </div>

      <p className="step3-helper-text">
        All your Superlatives and Invites will come your way with this name,
         so make it unforgettable!
      </p>

      <div className="step3-action-buttons">
        <button className="step3-btn-primary" onClick={handleProceed}>
          NEXT
        </button>
        <button className="step3-btn-secondary" onClick={onBack}>
          BACK
        </button>
      </div>
    </motion.div>
  );
};

export default Step3Username;