import React from 'react';
import { Bell, Star } from 'lucide-react';
import FeedCard1 from './FeedCard1';
import FeedCard2 from './FeedCard2';
import FeedCard3 from './FeedCard3';
import silverBadge from '../assets/silver-badge.png'; 
import vipBadge from '../assets/vip membership.png';

import './Screen5MainFeed.css';

const Screen5MainFeed = () => {
  return (
    <div className="feed-page-wrapper">
      <header className="feed-header">
        <h1 className="feed-app-logo">E</h1>
        <div className="header-actions">
          <div className="vip-pill-badge">
            <div className="vip-solid-tag">VIP</div>
            <span className="vip-pill-number">0</span>
          </div>
          <Bell size={24} color="#FFFFFF" strokeWidth={1.5} className="icon-spacing" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            <circle cx="8" cy="12" r="1.5" fill="#FFFFFF" stroke="none"/>
            <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" stroke="none"/>
            <circle cx="16" cy="12" r="1.5" fill="#FFFFFF" stroke="none"/>
          </svg>
        </div>
      </header>


      <section className="club-status-section">
        <p className="section-label">YOUR CLUB</p>
        <div className="club-outlined-box">
          <div className="club-info-row-new">
            <h3 className="club-name-new">Silver Club Member</h3>
            
            <div className="custom-badge-wrapper large">
              <img src={vipBadge} alt="VIP Membership" className="custom-badge-img" />
            </div>
          </div>
          <div className="progress-bar-bg-new">
            <div className="progress-bar-fill-new" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="vibe-tokens-new">
          <div className="token-coin-new">
            <Star size={13} fill="#000000" color="#000000" />
          </div>
          <p>20 HVTS TO GOLDEN CLUB</p>
        </div>
      </section>


      <section className="feed-cards-container">
        <FeedCard1 />
        <FeedCard2 />
        <FeedCard3 />
      </section>

      <footer className="app-footer-credits">
        Extroverts 2026 | v1.8.5 | Himanshu
      </footer>
      
    </div>
  );
};

export default Screen5MainFeed;