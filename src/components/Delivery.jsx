import React from 'react';
import { motion } from 'framer-motion';
import PhotoSection from '../components/PhotoSection';

import delivery1 from '../assets/carne.jpg';
import delivery2 from '../assets/empanadas.jpg';
import delivery3 from '../assets/sanguche.jpg';

function Delivery() {
  const images = [
    delivery1,
    delivery2,
    delivery3
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