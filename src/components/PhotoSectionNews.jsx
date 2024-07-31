// import React from 'react';
// import { motion } from 'framer-motion';

// function PhotoSection({ images }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
//       {images.map((image, index) => (
//         <motion.img
//           key={index}
//           src={image}
//           alt={`Foto ${index + 1}`}
//           className="w-full h-64 object-cover rounded-lg shadow-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.2 }}
//         />
//       ))}
//     </div>
//   );
// }

// export default PhotoSection;
import React from 'react';
import { motion } from 'framer-motion';

function PhotoSectionNews({ images }) {
  return (
    <div className="grid grid-cols-2 gap-8 my-8">

      {/* Images stacked on the left */}
      <div className="grid grid-rows-2 h-full">
        {images.slice(0, 2).map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Foto ${index + 1}`}
            className="w-full h-45 object-cover rounded-lg shadow-lg"
            style={{ objectFit: 'cover' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          />
        ))}
      </div>
      <a href="http://www.impaladelparque.com.ar/qr/menu-caballito.pdf" target="_blank">
        {/* Single image on the right */}
        <motion.img
          key={2}
          src={images[2]}
          alt={`Foto 3`}
          className="w-full h-85 object-cover rounded-lg shadow-lg"
          style={{ objectFit: 'cover' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        />
      </a>
    </div>
  );
}

export default PhotoSectionNews;
