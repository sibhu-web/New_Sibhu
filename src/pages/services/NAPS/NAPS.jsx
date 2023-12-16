import React from 'react';
import '../../../style/main.css'
import NAPSbody from './NAPS-body';
import Footer from '../../../components/footer/footer';
import Clint from '../../../components/clint/clint';


function NAPS() {
  return (
    <>
    <NAPSbody/>
    <Clint/>
    <Footer/>
    </>
  );
}

export default NAPS;