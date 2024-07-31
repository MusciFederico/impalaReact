import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Novedades from './components/Novedades';
import Restaurante from './components/Restaurante';
import Delivery from './components/Delivery';
import Servicios from './components/Servicios';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-[#F2E5C7] min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/restaurante" element={<Restaurante />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/servicios" element={<Servicios />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;