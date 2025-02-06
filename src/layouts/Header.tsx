import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
    
        <h1>Obra Social Andina</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Prestadores">Prestadores</Link></li>
          <li><Link to="/afiliados">Afiliados</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
