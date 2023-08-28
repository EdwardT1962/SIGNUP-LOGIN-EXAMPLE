import React, { useState } from 'react';
import './FAQPage.css';

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: 'What is Family-Driver?', answer: 'Family-Driver is a service that...' },
    // Add more questions and answers here
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-page">
      <h1>FAQs</h1>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleAccordion(index)}>{item.question}</h3>
          {activeIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
      <div className="chatbot-placeholder">
        {/* Placeholder for chatbot interface */}
        <p>Chatbot coming soon...</p>
      </div>
    </div>
  );
}

export default FAQPage;
