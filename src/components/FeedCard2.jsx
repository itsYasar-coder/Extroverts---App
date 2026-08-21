import React from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';
import silverBadge from '../assets/silver-badge.png';
import './FeedCard2.css';

const FeedCard2 = () => {
  return (
    <div className="outer-event-card" style={{ marginTop: '24px' }}>
      <div className="outer-card-content" style={{ padding: '8px' }}>
        <div className="event-description-text">
          <p>
            IS A MUST—TREAT OTHERS HOW YOU'D WANT TO BE TREATED. EVERYONE HERE IS LOOKING FOR REASONS TO <span className="location-highlight">PARTY</span>, SO BRING YOUR BEST VIBE AND EXPECT THE SAME FROM OTHERS. LET'S PARTY RESPONSIBLY AND MAKE EVERY EXPERIENCE A GREAT ONE!
          </p>
        </div>

        <div className="event-header-row" style={{ marginTop: '40px' }}>
          <div>
            <h2 className="event-title large-title">Cafe</h2>
            <p className="event-subtitle">PRIVATE PARTY</p>
          </div>
          
        
          <div className="custom-badge-wrapper">
            <img src={silverBadge} alt="Silver Badge" className="custom-badge-img" />
          </div>
          
        </div>
        
        <div className="event-host-row margin-bottom-large">
          <div>
            <p className="host-label">Jsjsjsj</p>
            <p className="host-name">@chetan</p>
          </div>
          <div className="event-tag tag-gold">
            ☕ Coffee Break
          </div>
        </div>

        <div className="event-details-box">
          <div className="details-top-row">
            <div className="detail-item border-right">
              <span>9:49 PM</span>
              <Clock size={16} color="#888888" />
            </div>
            <div className="detail-item">
              <span>12/09/26</span>
              <Calendar size={16} color="#888888" />
            </div>
          </div>
          <div className="details-bottom-row">
            <p className="location-text">
              Helly & Chilly Cafe Palanpur,<br />
              AF - 1, 2, Shilp Arcade, 3, Abu Hi...
            </p>
            <MapPin size={18} color="#888888" />
          </div>
        </div>
        <button className="join-btn">JOIN</button>
      </div>
    </div>
  );
};

export default FeedCard2;