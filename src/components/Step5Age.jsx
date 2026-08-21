import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Step5Age.css';

const Step5Age = ({ formData, updateData, onNext, onBack }) => {
  const [showModal, setShowModal] = useState(false);
  const [dob, setDob] = useState({ dd: '', mm: '', yyyy: '' });
  const [ageError, setAgeError] = useState('');
  const [calculatedAge, setCalculatedAge] = useState(formData.dob ? 'Verified' : '');

  const mmRef = useRef(null);
  const yyyyRef = useRef(null);

  const handleDobChange = (field, value) => {
    const numericValue = value.replace(/[^0-9]/g, '');

    if (field === 'dd') {
      if (numericValue !== '' && parseInt(numericValue) > 31) return;
    }
    if (field === 'mm') {
      if (numericValue !== '' && parseInt(numericValue) > 12) return;
    }
    if (field === 'yyyy') {
      if (numericValue !== '' && parseInt(numericValue) > 2026) return;
    }

    setDob(prev => ({ ...prev, [field]: numericValue }));

    if (field === 'dd' && numericValue.length === 2) mmRef.current.focus();
    if (field === 'mm' && numericValue.length === 2) yyyyRef.current.focus();
    setAgeError('');
  };

  const calculateAgeAndProceed = () => {
    const { dd, mm, yyyy } = dob;

    if (!dd || !mm || yyyy.length !== 4) {
      setAgeError("Please enter a complete date.");
      return;
    }

    const birthDate = new Date(`${yyyy}-${mm}-${dd}`);
    const today = new Date();

    if (birthDate.toString() === 'Invalid Date') {
      setAgeError("Invalid date format.");
      return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      setAgeError("You must be at least 18 years old to join.");
    } else {
      setAgeError('');
      setCalculatedAge(age);
      updateData('dob', `${dd}/${mm}/${yyyy}`);
      setShowModal(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="step5-wrapper"
    >

      <div className="step5-header-row">
        <h1 className="logo-e">E<span className="logo-dot">•</span></h1>
        <span className="step5-getting-ready-text">
          GETTING READY
        </span>
      </div>

      <h2 className="step5-title">How many years have you been partying?</h2>

      <div className="step5-input-group">
        <label className="step5-input-label">AGE</label>
        <input
          type="text"
          className="step5-custom-input"
          value={calculatedAge}
          placeholder="Tap to enter DOB"
          readOnly
          onClick={() => setShowModal(true)}
        />
      </div>

      <p className="step5-helper-text">
        We need your age to verify you're eligible and help others know who they're connecting with.
      </p>

      <div className="step5-action-buttons">
        <button
          className="step5-btn-primary"
          onClick={() => { if (calculatedAge) onNext(); else setShowModal(true); }}
        >
          NEXT
        </button>
        <button className="step5-btn-secondary" onClick={onBack}>
          BACK
        </button>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="step5-modal-overlay"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="step5-modal-content"
            >
              <div className="step5-modal-handle"></div>

              <div className="step5-modal-header">
                <h3 className="step5-modal-title">DATE OF BIRTH</h3>
                <span onClick={() => setShowModal(false)} className="step5-modal-close">×</span>
              </div>

              <div className="step5-dob-container">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="DD"
                  maxLength={2}
                  value={dob.dd}
                  onChange={e => handleDobChange('dd', e.target.value)}
                  className="step5-dob-input"
                />
                <input
                  ref={mmRef}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="MM"
                  maxLength={2}
                  value={dob.mm}
                  onChange={e => handleDobChange('mm', e.target.value)}
                  className="step5-dob-input"
                />
                <input
                  ref={yyyyRef}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="YYYY"
                  maxLength={4}
                  value={dob.yyyy}
                  onChange={e => handleDobChange('yyyy', e.target.value)}
                  className="step5-dob-input year"
                />
              </div>

              {ageError && <p className="step5-error-text">{ageError}</p>}

              <button
                onClick={calculateAgeAndProceed}
                className="step5-modal-proceed-btn"
              >
                PROCEED
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Step5Age;