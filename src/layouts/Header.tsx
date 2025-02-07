import { Link } from "react-router-dom";
const title = import.meta.env.VITE_APP_TITLE;
// importar logo de assets
import logo from '../assets/img/logo.png';
import "./styles/Header.css";
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
        <h1 style={{ color: "#FAFAFA", paddingLeft: "5%" }}>{title}</h1>
      </div>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Conocenos">Conocemos</Link></li>
          <li><Link to="/afiliacion">Quiero Afiliarme</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/prestadores">Prestadores</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/destacados">Destacados</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="hamburger"></span>
      </button>
    </header>
  );
};

export default Header;
