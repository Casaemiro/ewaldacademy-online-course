import './Contactus.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contactus = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g7gppds', 'template_4hxia1i', form.current, 'kyX-5c9uj0jFF3MzW')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

    return ( 
        <div className="contact-section " id="contactus">
            <div className="contact-header">
                Contact Us
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact-text col-md-6 col-sm-8 col-11">
                <input className='brad' type="text" name="user_name" style={{padding:"1%",marginBottom:"2%", height:"2.5rem"}} placeholder="Name..."/>
                <input className='brad' type="text" name="user_email" style={{padding:"1%",marginBottom:"2%", height:"2.5rem"}} placeholder="Email..."/>
                {/* <input className='brad' type="text" name="name" style={{padding:"1%",marginBottom:"2%", height:"2.5rem"}} placeholder="Subject..."/> */}
                <textarea className='brad' style={{padding:"1%", height:"30vh"}} name="message" placeholder="Enter your comment here..."></textarea>
                <input className='brad' style={{
                    marginTop:"2%",height:"40px"
                }} type="submit" value="Send" />
                {/* <button>SEND</button> */}
            </form>
        </div>
     );
}
 
export default Contactus;