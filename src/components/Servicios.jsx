import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

function Servicios() {
  const images = [
    'https://example.com/servicio1.jpg',
    'https://example.com/servicio2.jpg',
    'https://example.com/servicio3.jpg',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-8"
    >
      <h1 className="text-4xl font-bold text-[#A92A48] mb-4">Nuestros Servicios</h1>
      <Carousel images={images} />
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
    </motion.div>
  );
}

export default Servicios;