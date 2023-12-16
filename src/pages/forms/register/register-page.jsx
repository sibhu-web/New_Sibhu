import React,{useEffect} from 'react';
import '../../../style/main.css'
import Register from './register.jsx';
import Footer from '../../../components/footer/footer.jsx';
import Clint from '../../../components/clint/clint.jsx';


function Registerpage() {
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
        <h2 className='variable-title'>Register Here</h2>
        <Register/>
        <Clint/>
        <Footer/>
    </div>
  );
}

export default Registerpage;