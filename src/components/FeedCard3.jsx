import React from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';
import silverBadge from '../assets/silver-badge.png'; 
import './FeedCard3.css';

const FeedCard3 = () => {
  return (
    <div className="outer-event-card" style={{ marginTop: '24px', position: 'relative' }}>
      <div className="notification-floating-popup">
        <div className="drag-handle-small"></div>
        <div className="notif-content-row">
          <div>
            <h3 className="notif-title">NOTIFICATIONS</h3>
            <p className="notif-subtitle">Stay in the loop about parties, invites & more.</p>
          </div>
          <button className="notif-close-btn">×</button>
        </div>
      </div>

      <div className="outer-card-content" style={{ padding: '8px', paddingTop: '20px' }}>
        <div className="event-header-row">
          <div>
            <h2 className="event-title large-title">Let's hang out at night</h2>
            <p className="event-subtitle">PRIVATE PARTY</p>
          </div>
          
          <div className="custom-badge-wrapper">
            <img src={silverBadge} alt="Silver Badge" className="custom-badge-img" />
          </div>
          
        </div>
        
        <div className="event-host-row margin-bottom-large">
          <div>
            <p className="host-label">Bshhshsh</p>
            <p className="host-name">@chetan</p>
          </div>
          <div className="event-tag tag-gold">
            ☕ Coffee Break
          </div>
        </div>

        <div className="event-details-box" style={{ marginBottom: '8px' }}>
          <div className="details-top-row">
            <div className="detail-item border-right">
              <span>6:35 AM</span>
              <Clock size={16} color="#888888" />
            </div>
            <div className="detail-item">
              <span>11/09/26</span>
              <Calendar size={16} color="#888888" />
            </div>
          </div>
          
          <div className="details-bottom-row">
            <div className="striped-inner-box"></div>
            <MapPin size={18} color="#555555" />
          </div>
        </div>

        <p className="confidential-note">
          <strong>CONFIDENTIAL—</strong> Location visible only to members
        </p>

        <button className="join-btn" style={{ position: 'relative', zIndex: 10 }}>JOIN</button>
        <div className="huge-watermark">CONFIDENTIAL CONFIDENT</div>
      </div>
    </div>
  );
};

export default FeedCard3;