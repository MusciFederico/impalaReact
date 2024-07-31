import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/impalaLOGO.png"

function Navbar() {
  return (
    <nav className="bg-[#A92A48] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-[#F2E5C7] text-2xl font-bold">
        <img src={Logo} alt="" className='w-24 ml-20'/>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-[#F2E5C7] hover:text-[#968D02]">Inicio</Link>
          <Link to="/novedades" className="text-[#F2E5C7] hover:text-[#968D02]">Novedades</Link>
          <Link to="/restaurante" className="text-[#F2E5C7] hover:text-[#968D02]">Restaurante</Link>
          <Link to="/delivery" className="text-[#F2E5C7] hover:text-[#968D02]">Delivery</Link>
          <Link to="/servicios" className="text-[#F2E5C7] hover:text-[#968D02]">Servicios</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;