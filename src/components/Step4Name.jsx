import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Step4Name.css';

const Step4Name = ({ formData, updateData, onNext, onBack }) => {
  const [nameError, setNameError] = useState('');

  const handleProceed = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (formData.name.trim().length < 2) {
      setNameError('Name must be at least 2 characters');
    } else if (!nameRegex.test(formData.name)) {
      setNameError('Please enter a valid name (letters only)');
    } else {
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="step4-wrapper"
    >

      <div className="step4-header-row">
        <h1 className="logo-e">E<span className="logo-dot">•</span></h1>
        <span className="step4-getting-ready-text">
          GETTING READY
        </span>
      </div>

      <h2 className="name-step-title">"Name, please, for the party check !"</h2>

      <div className="name-input-group">
        <label className="name-input-label">NAME</label>
        <input
          type="text"
          className={`name-custom-input ${nameError ? 'name-input-error' : ''}`}
          value={formData.name}
          onChange={(e) => {
            updateData('name', e.target.value);
            setNameError('');
          }}
        />
        {nameError && <span className="name-error-text">{nameError}</span>}
      </div>

      <p className="name-helper-text">
        This is the name shown as on members and requests. Cannot be changed later.
      </p>

      <div className="name-action-buttons">
        <button className="name-btn-primary" onClick={handleProceed}>
          NEXT
        </button>
        <button className="name-btn-secondary" onClick={onBack}>
          BACK
        </button>
      </div>
    </motion.div>
  );
};

export default Step4Name;