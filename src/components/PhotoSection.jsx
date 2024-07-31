import React from 'react';
import { motion } from 'framer-motion';

function PhotoSection({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Foto ${index + 1}`}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        />
      ))}
    </div>
  );
}

export default PhotoSection;