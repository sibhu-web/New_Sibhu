import React from 'react';
import Home from './pages/Home/home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import About from './pages/about/about';
import Contact from './pages/Contact/contact';
import Registerpage from './pages/forms/register/register-page.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

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
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

