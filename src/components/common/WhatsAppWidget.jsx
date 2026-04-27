
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './WhatsAppWidget.css';


const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const { contactNumber, fullName } = useSelector((state) => state.profile);


  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (message.trim() !== "") {
      const url = `https://wa.me/${contactNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      const url = `https://wa.me/${contactNumber}?text=${encodeURIComponent("Hello! I'm interested in your services.")}`;
      window.open(url, '_blank');
    }

  };

  return (
    <div className="whatsapp-widget-container">
      {/* WhatsApp Popup */}
      <div className={`whatsapp-popup ${isOpen ? 'open' : ''}`}>
        <div className="whatsapp-header">
          <img
            src="https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900929.jpg"
            alt="Profile"
          />
          <div className="whatsapp-header-info">
            <h4>{fullName}</h4>

            <p><span style={{ color: '#45f07a' }}>●</span> Online</p>
          </div>
        </div>

        <div className="whatsapp-body">
          <div className="whatsapp-message">
            Hi! How can I help you today?
            <div className="message-time">10:00 AM</div>
          </div>
        </div>

        <div className="whatsapp-footer">
          <input
            type="text"
            placeholder="Type a message..."
            className="whatsapp-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-button" onClick={handleSend}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {/* Main Button */}
      <div className="whatsapp-button" onClick={toggleWidget}>
        <i className={isOpen ? "fas fa-times" : "fab fa-whatsapp"}></i>
        {!isOpen && <div className="whatsapp-badge">1</div>}
      </div>
    </div>
  );
};

export default WhatsAppWidget;
