import React from "react";
import "./App.css";
import { useState } from "react";
import NavbarOne from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Proyects from "./pages/Proyects"
import Finapay from "./pages/Finapay";
import Topgamesports from "./pages/Topgamesports";
import La33Page from "./pages/La33";

import Footer from "./components/Footer";

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
        <Route path="/proyects/finapay" element={<Finapay />} />
        <Route path="/proyects/topgamesports" element={<Topgamesports />} />
        <Route path="/proyects/la33" element={<La33Page />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
