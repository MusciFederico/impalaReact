import React from 'react';
import { motion } from 'framer-motion';
import PhotoSection from '../components/PhotoSection';

function Delivery() {
  const images = [
    'https://example.com/delivery1.jpg',
    'https://example.com/delivery2.jpg',
    'https://example.com/delivery3.jpg',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-8"
    >
      <h1 className="text-4xl font-bold text-[#A92A48] mb-4">Servicio de Delivery</h1>
      <p className="text-[#968D02] mb-8">Disfruta de nuestros platos en la comodidad de tu hogar.</p>
      <PhotoSection images={images} />
      {/* Agregar información sobre el servicio de delivery, zonas de cobertura, etc. */}
    </motion.div>
  );
}

export default Delivery;