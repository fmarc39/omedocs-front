import React, { useState } from 'react';

const ContactPage = () => {
  const [status, setStatus] = useState('Envoyer');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    const result = await response.json();
    alert(result.status);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="nom-email">
            <label htmlFor="name"> Nom:
              <input type="text" id="name" required />
            </label>
          </div>
          <div>
            <label htmlFor="email">Mail:
              <input type="email" id="email" required />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="message">Message:
            <textarea id="message" required />
          </label>
        </div>
        <button type="submit">{status}</button>
      </form>
    </div>
  );
};

export default ContactPage;
