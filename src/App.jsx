import React from "react";
import "./App.css";
import { useState } from "react";
import NavbarOne from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Proyects from "./pages/Proyects"



function App() {
  const [language, setLanguage] = useState('es'); 
  const toggleLanguage = () => {
    
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
  };
  
  return (
    <div>
      <NavbarOne />

      

      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/proyects" element={<Proyects  />} />
       
      </Routes>
    </div>
  );
}

export default App;
