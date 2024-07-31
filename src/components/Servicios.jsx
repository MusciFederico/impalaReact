import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

import servicio1 from '../assets/servicios.jpg';
import servicio2 from '../assets/papas.jpg';
import servicio3 from '../assets/cafe.jpg';

function Servicios() {
  const images = [
    servicio1,
    servicio2,
    servicio3,
  ];

  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.addEventListener('click', () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-8"
    >
      <h1 className="text-4xl font-bold text-[#A92A48] mb-4">Nuestros Servicios</h1>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <Carousel images={images} />
        </div>
        <div className="md:w-1/2">
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Eventos Privados</h2>
            {/* Agregar información sobre eventos privados */}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Catering</h2>
            {/* Agregar información sobre servicios de catering */}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Clases de Cocina</h2>
            {/* Agregar información sobre clases de cocina */}
          </div>
          <div className="mt-8">
            <a href="#" ref={contactRef}>
              <h3 className="text-2xl font-semibold text-[#A92A48] mb-4">Contactanos!</h3>
            </a>
            {/* Agregar información sobre clases de cocina */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Servicios;
