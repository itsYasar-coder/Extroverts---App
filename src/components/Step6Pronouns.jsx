import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Step6Pronouns.css';

const PRONOUNS_LIST = [
  'he', 'him', 'his', 'she', 'her', 'hers',
  'they', 'them', 'theirs', 'ze', 'zir', 'zirs',
  've', 'ver', 'vis'
];

const Step6Pronouns = ({ formData, updateData, onNext, onBack }) => {
  const [showModal, setShowModal] = useState(false);
  const [localSelection, setLocalSelection] = useState(formData.pronouns || []);

  const togglePronoun = (p) => {
    if (localSelection.includes(p)) {
      setLocalSelection(localSelection.filter(item => item !== p));
    } else {
      if (localSelection.length < 3) {
        setLocalSelection([...localSelection, p]);
      }
    }
  };

  const confirmSelection = () => {
    updateData('pronouns', localSelection);
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="step6-wrapper"
    >

      <div className="step6-header-row">
        <h1 className="logo-e">E<span className="logo-dot">•</span></h1>
        <span className="step6-getting-ready-text">
          GETTING READY
        </span>
      </div>

      <h2 className="step6-title">Which pronouns feel right for you?</h2>

      <div className="step6-input-group">
        <label className="step6-input-label">PRONOUNS</label>
        <div
          className="step6-custom-input"
          onClick={() => setShowModal(true)}
        >
          {formData.pronouns && formData.pronouns.length > 0
            ? formData.pronouns.join(', ')
            : <span style={{ color: '#666' }}>Tap to select</span>}
        </div>
      </div>

      <p className="step6-helper-text">
        Select the pronouns that feel right for you.
      </p>

      <div className="step6-action-buttons">
        <button className="step6-btn-primary" onClick={onNext}>
          NEXT
        </button>
        <button className="step6-btn-secondary" onClick={onBack}>
          BACK
        </button>
      </div>


      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="step6-modal-overlay"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="step6-modal-content"
            >


              <div className="step6-modal-header">
                <div>
                  <h3 className="step6-modal-title">SELECT PRONOUNS</h3>
                  <p className="step6-modal-subtitle">Select upto 3</p>
                </div>
                <span onClick={() => setShowModal(false)} className="step6-modal-close">×</span>
              </div>


              <div className="step6-modal-list">
                {PRONOUNS_LIST.map((p) => {
                  const isSelected = localSelection.includes(p);
                  return (
                    <div
                      key={p}
                      onClick={() => togglePronoun(p)}
                      className="step6-modal-list-item"
                    >

                      <div className={`step6-checkbox ${isSelected ? 'selected' : ''}`}>
                        {isSelected && <span className="step6-checkmark">✓</span>}
                      </div>
                      <span className="step6-list-text">{p}</span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={confirmSelection}
                className="step6-modal-proceed-btn"
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

export default Step6Pronouns;