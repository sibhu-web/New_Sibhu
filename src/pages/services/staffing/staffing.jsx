import React from 'react';
import '../../../style/main.css'
import Staffingbody from './staffing-body.jsx';
import Footer from '../../../components/footer/footer.jsx';
import Clint from '../../../components/clint/clint.jsx';


function Staffing() {
  return (
    <>
    <Staffingbody/>
    <Clint/>
    <Footer/>
    </>
  );
}

export default Staffing