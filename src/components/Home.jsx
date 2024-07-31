import { motion } from 'framer-motion';
import Carousel from './Carousel';  // Asegúrate de que la ruta del componente Carousel es correcta
import image1 from "../assets/sillones.jpg"
import image2 from "../assets/entrada.jpg"
import image3 from "../assets/barra.jpg"

import { Link } from 'react-router-dom';

import OtrosLocales from '../components/OtrosLocales';

function App() {
  const images = [
    image1,
    image2,
    image3
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-8"
    >
      <h1 className="text-4xl font-bold text-[#A92A48] mb-4">
        Bienvenido a Impala del parque
      </h1>
      <p className=" mb-8">
        De familias gastronómicas, y con más de 40 años en el mercado
      </p>
      <Link to="/restaurante"><button className='w-32 bg-[#A92A48] rounded-lg text-white p-1'>Ver las cartas</button></Link>
      <div className="flex flex-col md:flex-row gap-16 ">
        <div className="md:w-1/2">
          <Carousel images={images} />
        </div>
        <div className="md:w-1/2">
          <p className=" mt-10 text-xl">
            Victoria Impala nace en el año 1995, en lo que era un viejo terreno baldío del barrio de Villa Devoto. Inspirado en la década del '60, su nombre se debe al mítico auto Chevrolet Impala que brillara en los años 50 y 60.
            Actualmente disponemos de una capacidad para 250 personas, y una amplia vereda cubierta y climatizada.
            En nuestro restaurante, Ud. puede degustar un exquisito café, un trago, una pizza, pasar por nuestra excelente parrilla o elegir platos de frescos mariscos y pescados. Pastas caseras y algún plato de nuestra cocina Mediterránea acompañan nuestra amplia carta. Contamos con un menú de más de 300 platos al que tenemos que sumarle los postres de pastelería propia y uno de los mejores pan Dulce.
            Disponemos de servicio de delivery de nuestros productos y también preparamos Chivitos, Lechones, Matambres y Pavitas, listos para ser servidos en su mesa.
            En síntesis, en Victoria Impala, puede optar por pasar desde un agradable desayuno hasta festejar un evento familiar.
          </p>
        </div>
      </div>
      <OtrosLocales />
    </motion.div>
  );
}

export default App;
