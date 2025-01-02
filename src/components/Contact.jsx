import React from 'react';
import '../styles/contact.css';
const Contact = () => {
  return (
     <div id="contact" className="contact-container">
        <h1 className="contact-h1">Contact</h1>
        <div className="form-container">
         <form className="submit_form form" action="https://formsubmit.co/cheftimmaslow@gmail.com" method="POST">
           <input type="text" name="name" placeholder="Name" required />
           <input type="email" name="email" placeholder="Email" required />
           <input type="text" name="message" placeholder="Message" required />
           <button className="submit" type="submit">Send</button>
         </form>
        </div>
     </div>
  )
}

export default Contact
