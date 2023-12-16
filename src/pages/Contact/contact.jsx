import React,{useEffect} from 'react';
import '../../style/main.css'
import Details from './details.jsx';
import Enquiry from './enquiry.jsx';
import Footer from '../../components/footer/footer.jsx';
import Clint from '../../components/clint/clint.jsx';


function Contact() {
  useEffect(() => {
    const screenHeight = window.innerHeight;
    const desiredScrollPosition = screenHeight * 0; // Adjust the multiplier as needed

    // Scroll to the calculated position
    window.scrollTo({
      top: desiredScrollPosition,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="contact-body">
        <h2 className='variable-title'>Contact Us</h2>
        <Details/>
        <Enquiry/>
        <Clint/>
        <Footer/>
    </div>
  );
}

export default Contact;