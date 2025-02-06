const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Obra Social Andina</p>
          <p>Tel: +54 9 11 1234-5678 | Email: contacto@obraandina.com</p>
        </div>
        <div className="footer-links">
          <a href="/terminos">Términos y Condiciones</a>
          <a href="/privacidad">Política de Privacidad</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  