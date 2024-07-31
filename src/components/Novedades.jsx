// import React from 'react';
// import { motion } from 'framer-motion';
// import PhotoSection from '../components/PhotoSection';

// // Import your local images
// import novedad1 from '../assets/clasico.jpg';
// import novedad2 from '../assets/vegano.jpg';
// import novedad3 from '../assets/menu.jpg';

// function Novedades() {
//   // Use the imported images in the array
//   const images = [
//     novedad1,
//     novedad2,
//     novedad3,
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="container mx-auto p-8"
//     >
//       <h1 className="text-4xl font-bold text-[#A92A48] mb-4">Novedades</h1>
//       <p className="text-[#968D02] mb-8">Descubre nuestras últimas creaciones y eventos especiales.</p>
//       <PhotoSection images={images} />
//     </motion.div>
//   );
// }

// export default Novedades;
import React from 'react';
import { motion } from 'framer-motion';
import PhotoSectionNews from '../components/PhotoSectionNews';

// Import your local images
import novedad1 from '../assets/clasico.jpg';
import novedad2 from '../assets/vegano.jpg';
import novedad3 from '../assets/menu.jpg';

function Novedades() {
  // Use the imported images in the array
  const images = [
    novedad1,
    novedad2,
    novedad3,
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-8"
    >
      <h1 className="text-4xl font-bold text-[#A92A48] mb-4">Novedades</h1>
      <p className="text-[#968D02] mb-8">Descubre nuestras últimas creaciones y eventos especiales.</p>
      <div className="p-4">{/* Add padding here */}
        <PhotoSectionNews images={images} />
      </div>
    </motion.div>
  );
}

export default Novedades;
