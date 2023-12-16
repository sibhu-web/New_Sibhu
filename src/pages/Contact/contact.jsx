import React from 'react';
import '../../style/main.css'
import Details from './details.jsx';
import Enquiry from './enquiry.jsx';


function Contact() {
  return (
    <div className="contact-body">
        <h2>Contact Us</h2>
        <Details/>
        <Enquiry/>
    </div>
  );
}

export default Contact;