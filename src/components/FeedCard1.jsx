import React from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react'; 
import './FeedCard1.css';

const SILVER_BADGE_URL = "https://imgs.search.brave.com/PsK9hSv7FT5QkTG9wvqtC3yGIPNbw14A2LKrpDLtFI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzgv/MDc0LzIxMC9zbWFs/bC92aW50YWdlLXNp/bHZlci1iYWRnZS1s/dXh1cnktbGFiZWwt/cG5nLnBuZw";

const FeedCard1 = () => {
  return (
    <div className="outer-event-card">

   
      <div className="nested-inner-card">
        <div className="inner-gradient-bg pink-gradient"></div>
        <div className="nested-card-content">
          <div className="event-header-row">
            <div>
              <h2 className="event-title small-title">Parttyyy</h2>
              <p className="event-subtitle">PRIVATE PARTY</p>
            </div>

          
            <div className="custom-badge-wrapper small">
              <img src={SILVER_BADGE_URL} alt="Silver Badge" className="custom-badge-img" />
            </div>
             </div>

          <div className="event-host-row margin-bottom-medium">
            <div>
              <p className="host-label">Party</p>
              <p className="host-name small-host">@bhanuhu</p>
            </div>
            <div className="event-tag tag-orange">
              🍽️ Dinner Event
            </div>
          </div>

          <div className="event-details-box nested-grid">
            <div className="details-top-row">
              <div className="detail-item border-right">
                <span>2:11 PM</span>
                <Clock size={16} color="#888888" />
              </div>
              <div className="detail-item">
                <span>02/09/26</span>
                <Calendar size={16} color="#888888" />
              </div>
            </div>
          </div>
        </div>
        <div className="fade-to-black-overlay"></div>
      </div>

      <div className="outer-card-content party-jam-compact">
        <div className="event-header-row">
          <div>
            <h2 className="event-title large-title">Party jam</h2>
            <p className="event-subtitle">PRIVATE PARTY</p>
          </div>

          <div className="custom-badge-wrapper">
            <img src={SILVER_BADGE_URL} alt="Silver Badge" className="custom-badge-img" />
          </div>

        </div>

        <div className="event-host-row margin-bottom-large">
          <div>
            <p className="host-label">Party</p>
            <p className="host-name">@jatinraja</p>
          </div>
          <div className="event-tag tag-purple">
            🎸 Music Jam
          </div>
        </div>

        <div className="event-details-box">
          <div className="details-top-row">
            <div className="detail-item border-right">
              <span>9:24 PM</span>
              <Clock size={16} color="#888888" />
            </div>
            <div className="detail-item">
              <span>03/09/26</span>
              <Calendar size={16} color="#888888" />
            </div>
          </div>
          <div className="details-bottom-row">
            <p className="location-text">
              Wow Hair And Beauty Cafe<br />
              - Salon In Palampur, Above C...
            </p>
            <MapPin size={18} color="#888888" />
          </div>
        </div>
        <button className="join-btn">JOIN</button>
      </div>
    </div>
  );
};

export default FeedCard1;