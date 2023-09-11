import React from "react";
import "./App.css";
import { useState } from "react";
import NavbarOne from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Proyects from "./pages/Proyects"



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavbarOne />

      <h1 className="text-3xl font-bold underline">Bienvenidos a mi Página</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proyects" element={<Proyects />} />
       
      </Routes>
    </div>
  );
}

export default App;
