import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';

export default function Contact() {
  const [message, setMessage] = useState(false)
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)

    emailjs.sendForm('service_k2qawqh', 'template_c6rkpn6', formRef.current, 'X7K7ebhIeOy3YwHki')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="images/shake.svg" alt="shakehands" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="user_email" />
          <textarea placeholder="message" name="message" ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
