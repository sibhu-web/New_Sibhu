import React from 'react';
import '../../../style/main.css'
import Manpowerbody from './manpower-body.jsx';
import Footer from '../../../components/footer/footer.jsx';
import Clint from '../../../components/clint/clint.jsx';


function Manpower() {
  return (
    <>
    <Manpowerbody/>
    <Clint/>
    <Footer/>
    </>
  );
}

export default Manpower;