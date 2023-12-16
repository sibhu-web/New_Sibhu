import React from 'react';
import '../../../style/main.css'
import NATSbody from './NATS-body';
import Footer from '../../../components/footer/footer';
import Clint from '../../../components/clint/clint';


function NATS() {
  return (
    <>
    <NATSbody/>
    <Clint/>
    <Footer/>
    </>
  );
}

export default NATS;