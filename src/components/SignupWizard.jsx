import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SignupWizard.css';
import Step3Username from './Step3Username';
import Step4Name from './Step4Name';
import Step5Age from './Step5Age';
import Step6Pronouns from './Step6Pronouns';
import Step7Invite from './Step7Invite';

const SignupWizard = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    name: '',
    dob: '',
    pronouns: [],
    inviteCode: '',
    newsletter: false
  });

  const [emailError, setEmailError] = useState('');
  const [newsletterError, setNewsletterError] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const [timer, setTimer] = useState(30); 
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000); 
    } else if (timer === 0) {
      setCanResend(true); 
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const updateData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (key === 'email') setEmailError('');
  };

  const handleEmailProceed = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(formData.email)) {
      setEmailError('Please enter a valid email address');
    } else if (!formData.newsletter) {
      setNewsletterError(true);
    } else {
      setStep(2);
      setTimer(30); 
      setCanResend(false);
      setNewsletterError(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);
    setOtpError('');

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otpValues[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendOtp = () => {
    if (canResend) {
      setTimer(30); 
      setCanResend(false);
      setOtpValues(['', '', '', '', '', '']); 
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus(); 
      }
      setOtpError('');
      alert("New OTP sent to your email! (Simulation)"); 
    }
  };

  const handleVerify = () => {
    if (otpValues.includes('')) {
      setOtpError('Please enter the complete 6-digit OTP.');
      return;
    }
    setOtpError('');
    setStep(3);
    setOtpValues(['', '', '', '', '', '']);
  };

  return (
    <div className="signup-wrapper">
      {step <= 2 && (
        <header className="wizard-header">
          <h1 className="logo-e">E<span className="logo-dot">•</span></h1>
        </header>
      )}

      <div className="wizard-content">
        <AnimatePresence mode="wait">
          
    
          {step === 1 && (
            <motion.div key="step1" initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:20}}>
              <h2 className="step-title">Enter your email</h2>
              
              <div className="input-group">
                <input 
                  type="email"  
                  placeholder="EMAIL" 
                  className={`custom-input ${emailError ? 'input-error' : ''}`}
                  value={formData.email}
                  onChange={(e) => updateData('email', e.target.value)}
                />
                {emailError && <span className="error-text">{emailError}</span>}
              </div>

           
              <label className="checkbox-row">
                <input 
                  type="checkbox" 
                  className="custom-checkbox" 
                  checked={formData.newsletter}
                  onChange={(e) => {
                    updateData('newsletter', e.target.checked);
                    setNewsletterError(false);
                  }}
                  style={newsletterError ? { borderColor: '#ff4444' } : {}}
                />
                <span className="checkbox-text" style={newsletterError ? { color: '#ff4444' } : {}}>
                  I'd like to subscribe to your newsletter
                </span>
              </label>
              {newsletterError && (
                <span style={{ color: '#ff4444', fontSize: '0.75rem', marginTop: '-12px', marginBottom: '18px', display: 'block' }}>
                  You must check this box to proceed.
                </span>
              )}

            
              <button className="btn-primary" onClick={handleEmailProceed}>
                PROCEED
              </button>
            </motion.div>
          )}

      
          {step === 2 && (
            <motion.div key="step2" initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:20}}>
              <h2 className="step-subtitle">ENTER OTP</h2>
              
              <div className="otp-container">
                {otpValues.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => inputRefs.current[index] = el}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    style={otpError ? { borderBottomColor: '#ff4444' } : {}}
                  />
                ))}
              </div>
              
              <div 
                className={`resend-text ${canResend ? 'active' : 'disabled'}`}
                onClick={() => {
                  if (canResend) handleResendOtp();
                }}
              >
                {canResend ? 'Resend OTP' : `Resend OTP in ${timer}s`}
              </div>

              {otpError && (
                <p style={{ color: '#ff4444', fontSize: '0.85rem', textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
                  {otpError}
                </p>
              )}

              <div className="action-buttons-column">
                <button className="btn-primary" onClick={handleVerify}>
                  VERIFY
                </button>
                <button className="btn-secondary" onClick={() => setStep(1)}>
                  GO BACK
                </button>
              </div>

              <p className="helper-text">
                ⓘ A 6-digit OTP has been sent to<br/>
                <span className="highlight-text">{formData.email}</span>.
              </p>
            </motion.div>
          )}

     
          {step === 3 && (
            <Step3Username 
              formData={formData} 
              updateData={updateData} 
              onNext={() => setStep(4)} 
              onBack={() => setStep(2)} 
            />
          )}

       
          {step === 4 && (
            <Step4Name 
              formData={formData} 
              updateData={updateData} 
              onNext={() => setStep(5)} 
              onBack={() => setStep(3)} 
            />
          )}

    
          {step === 5 && (
            <Step5Age 
              formData={formData} 
              updateData={updateData} 
              onNext={() => setStep(6)} 
              onBack={() => setStep(4)} 
            />
          )}


          {step === 6 && (
            <Step6Pronouns 
              formData={formData} 
              updateData={updateData} 
              onNext={() => setStep(7)} 
              onBack={() => setStep(5)} 
            />
          )}


          {step === 7 && (
            <Step7Invite 
              formData={formData} 
              updateData={updateData} 
              onComplete={onComplete} 
              onBack={() => setStep(6)} 
            />
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignupWizard;