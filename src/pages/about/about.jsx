import React,{useEffect} from 'react';
import '../../style/main.css'
import Aboutbody from './about-body.jsx';
import Footer from '../../components/footer/footer.jsx';
import Clint from '../../components/clint/clint.jsx';


function About() {
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
    <>
    <Aboutbody/>
    <Clint/>
    <Footer/>
    </>
  );
}

export default About;