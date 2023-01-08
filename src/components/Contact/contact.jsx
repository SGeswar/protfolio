import React, { useRef } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaWhatsapp, FaInstagram} from 'react-icons/fa'
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_7h2z7sk', 'template_r4v8qyn', form.current, '8S9Hj5UAmNflsZvwH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>srigeswar@gmail.com</h5>
            <a href='mailto:srigeswar@gmail.com' >Send a Message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icons'/>
            <h4>Whatsapp</h4>
            <h5>srigeswar@gmail.com</h5>
            <a href='https://wa.me/919553522407?text=' target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaInstagram className='contact__option-icons'/>
            <h4>Instagram</h4>
            <h5>s_g_eswar</h5>
            <a href='https://www.instagram.com/s_g_eswar' target="_blank">Send a Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder="Your Name" required/>
          <input type='email' name='email' placeholder='Your Mail ID' required/>
          <textarea type='message' name='message'rows='7' placeholder='Your message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>    
    </section>
  )
}

export default Contact