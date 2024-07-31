// import React from 'react';
// import { motion } from 'framer-motion';
// import Carousel from '../components/Carousel';

// import novedad1 from '../assets/sugerencias.jpg';
// import novedad2 from '../assets/postres.jpg';
// import novedad3 from '../assets/ensalada.jpg';

// function Restaurante() {
//   const images = [
//     novedad1,
//     novedad2,
//     novedad3
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="container mx-auto p-8"
//     >
//       <h1 className="text-4xl font-bold text-[#A92A48] mb-4">Nuestro Restaurante</h1>
//       <Carousel images={images} />
//       <div className="mt-8">
//         <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=8" target="_blank" >
//           <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Menú Light</h2>
//           {/* Agregar items del menú light */}
//         </a>
//       </div>
//       <div className="mt-8">
//         <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=16" target="_blank" >
//           <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Pastelería</h2>
//         </a>
//         {/* Agregar items de pastelería */}
//       </div>
//       <div className="mt-8">
//         <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=9" target="_blank" >
//           <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Recomendaciones del Chef</h2>
//         </a>
//       </div>
//     </motion.div>
//   );
// }

// export default Restaurante;


import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

import novedad1 from '../assets/sugerencias.jpg';
import novedad2 from '../assets/postres.jpg';
import novedad3 from '../assets/ensalada.jpg';

function Restaurante() {
  const images = [
    novedad1,
    novedad2,
    novedad3
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-8"
    >
      <h1 className="text-4xl font-bold text-[#A92A48] mb-4">Nuestro Restaurante</h1>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <Carousel images={images} />
        </div>
        <div className="md:w-1/2">
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=8" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Menú Light</h2>
          </a>
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=16" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Pastelería</h2>
          </a>
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=9" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Recomendaciones del Chef</h2>
          </a>
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=6" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Entradas</h2>
          </a>
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=10" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Carnes rojas</h2>
          </a>
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=7" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Ensaladas</h2>
          </a>
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=11" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Aves</h2>
          </a>
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=12" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Pescados y mariscos</h2>
          </a>
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=13" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Pastas caseras</h2>
          </a>
          <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf#page=14" target="_blank" className="mt-8">
            <h2 className="text-2xl font-semibold text-[#968D02] mb-4">Pizzas</h2>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Restaurante;
