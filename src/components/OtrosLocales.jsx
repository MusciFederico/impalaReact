import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/caballito.png"
import image2 from "../assets/Eventos.png"
import image3 from "../assets/homeromanzi.jpg"
import image4 from "../assets/victoria.png"




function OtrosLocales() {
  const locales = [
    { name: 'Parque Chacabuco', image: image1 },
    { name: 'Eventos', image: image2 },
    { name: 'Homero Manzi', image: image3 },
    { name: 'Victoria', image: image4 },
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-[#A92A48] mb-6">Otros Locales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {locales.map((local, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={local.image} alt={local.name} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#968D02]">{local.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OtrosLocales;