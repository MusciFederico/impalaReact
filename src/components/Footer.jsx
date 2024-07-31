import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#A92A48] text-[#F2E5C7] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mapa de Google */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nuestra Ubicación</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.385230468822!2d-58.45000650733709!3d-34.6352404788265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3315af6a3b%3A0x7cc7aff5ca1384dd!2sRestaurante%20Impala%20del%20Parque!5e0!3m2!1ses-419!2sar!4v1722376943740!5m2!1ses-419!2sar"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
            <form>
              <input
                type="email"
                placeholder="Tu email"
                className="w-full p-2 mb-2 text-[#A92A48]"
              />
              <textarea
                placeholder="Tu mensaje"
                className="w-full p-2 mb-2 text-[#A92A48]"
                rows="3"
                style={{ resize: "none" }}
              ></textarea>
              <button
                type="submit"
                className="bg-[#968D02] text-[#F2E5C7] px-4 py-2 rounded"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Redes sociales */}
          {/* Redes sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/pages/Impala-Del-Parque/215875321922813"
                className="text-blue-600 hover:text-blue-800 text-2xl"
                aria-label="Facebook"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://ar.pinterest.com/ImpalaEventos/"
                className="text-red-600 hover:text-red-800 text-2xl"
                aria-label="Pinterest"
                target="_blank"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC1OsKKzjimABuZwODtGl5vA"
                className="text-red-600 hover:text-red-800 text-2xl"
                aria-label="YouTube"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Links a otras páginas */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/novedades">Novedades</Link></li>
              <li><Link to="/restaurante">Restaurante</Link></li>
              <li><Link to="/delivery">Delivery</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;