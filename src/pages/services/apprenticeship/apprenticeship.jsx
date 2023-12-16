import React from 'react';
import '../../../style/main.css'
import Apprenticeshipbody from './apprenticeship-body.jsx';
import Footer from '../../../components/footer/footer.jsx';
import Clint from '../../../components/clint/clint.jsx';


function Apprenticeship() {
  return (
    <>
    <Apprenticeshipbody/>
    <Clint/>
    <Footer/>
    </>
  );
}

export default Apprenticeship;