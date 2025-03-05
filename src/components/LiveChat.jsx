import React,  {useState}  from 'react';
import './LiveChat.css';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className={`live-chat ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
      <div className="chat-icon">💬</div>
      {isOpen && (
        <div className="chat-box">
          <h4>How can we help?</h4>
          <textarea placeholder="Type your message..." rows="4" />
          <button>Send</button>
        </div>
      )}
    </div>
  );
};

export default LiveChat