import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Entrer en contact</h5>
      <h5>
      Je reçois vos messages et vous répondrai dès que possible si l'e-mail valide est
        fourni :)
      </h5>
      <h2>Contactez moi</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>sami.abdulhalim@edu.ece.fr</h5>
            <a href="mailto:sami.abdulhalim@edu.ece.fr">Envoyer un message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Votre nom complet"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Votre e-mail"
            name="user_email"
            required
          />
          <textarea
            placeholder="Votre message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
          Envoyer le message
          </button>
          {message && <span>Merci, je répondrai au plus vite :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
