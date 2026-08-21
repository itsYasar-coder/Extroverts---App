import React from 'react';
import './Screen1Welcome.css';

const Screen1Welcome = ({ onContinue }) => {
  return (
    <div className="screen-container welcome-screen">
      <div className="logo-section">
        <h1 className="app-logo">E</h1>
      </div>

      <div className="content-section">
        <p className="app-tagline">AN APP ONLY FOR</p>
        <h1 className="app-title">EXTROVERTS</h1>
        <p className="warning-text">
          <span className="warning-label">Warning:</span> Entering may lead to spontaneous dancing and unsolicited high-fives!
        </p>
      </div> 

      <div className="action-section">
        <button className="primary-btn" onClick={onContinue}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Screen1Welcome; 