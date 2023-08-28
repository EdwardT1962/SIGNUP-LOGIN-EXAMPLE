import React, { useState } from 'react';
import './CommunicationPortal.css';

function CommunicationPortal() {
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    // Logic to send the message
    setMessages([...messages, inputMessage]);
    setInputMessage('');
  };

  // Logic to handle notifications can be added here

  return (
    <div className="communication-portal">
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          {notification}
        </div>
      ))}
      <div className="conversation-history">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="message-input">
        <textarea
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default CommunicationPortal;
