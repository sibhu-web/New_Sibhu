import React from 'react';
import Home from './pages/Home/home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import About from './pages/about/about';
import Contact from './pages/Contact/contact';
import Registerpage from './pages/forms/register/register-page.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Staffing from './pages/services/staffing/staffing.jsx';
import Permanent from './pages/services/permanent-staffing/permanent.jsx';
import Apprenticeship from './pages/services/apprenticeship/apprenticeship.jsx';
import Flexi from './pages/services/flexi-staffing/flexi.jsx';
import Manpower from './pages/services/manpower-outsourcing/manpower.jsx';
import NAPS from './pages/services/NAPS/NAPS.jsx';
import NATS from './pages/services/NATS/NATS.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="register" element={<Registerpage/>} />
          <Route path="services/staffing" element={<Staffing/>} />
          <Route path="services/permanent-staffing" element={<Permanent/>} />
          <Route path="services/apprenticeship" element={<Apprenticeship/>} />
          <Route path="services/flexi-staffing" element={<Flexi/>} />
          <Route path="services/manpower" element={<Manpower/>} />
          <Route path="services/naps" element={<NAPS/>} />
          <Route path="services/nats" element={<NATS/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

