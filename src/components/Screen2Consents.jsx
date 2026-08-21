import React, { useState } from 'react';
import './Screen2Consents.css';
import Screen3Terms from './Screen3Terms'; 

const Screen2Consents = ({ onAccept }) => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="consents-page-wrapper">
      <div className="consents-container">
        
        <div className="consent-logo-header">
          <h1 className="consent-app-logo">E</h1>
        </div> 
        
        <div className="consent-text-body">
          <p className="consent-paragraph">
            BY USING THIS APP, YOU'RE AGREEING TO KEEP THINGS FUN, SAFE, AND RESPECTFUL... AND ALSO AGREEING TO OUR TERMS AND CONDITIONS. POLITENESS IS A MUST—TREAT OTHERS HOW YOU’D WANT TO BE TREATED. EVERYONE HERE IS LOOKING FOR REASONS TO <span className="consent-highlight">PARTY</span>, SO BRING YOUR BEST VIBE AND EXPECT THE SAME FROM OTHERS. LET'S PARTY RESPONSIBLY AND MAKE EVERY EXPERIENCE A GREAT ONE!
          </p>
        </div>

        <div className="consent-footer-action">
          <p className="consent-proceed-info">
            To proceed, accept <span className="terms-link" onClick={() => setShowTerms(true)}>Terms and Conditions</span>
          </p>
          <button className="consent-btn" onClick={onAccept}>
            ACCEPT
          </button>
        </div>
      </div>

      {showTerms && (
        <Screen3Terms onClose={() => setShowTerms(false)} />
      )}
    </div>
  );
};

export default Screen2Consents;