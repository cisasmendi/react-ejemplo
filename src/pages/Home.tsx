
const title = import.meta.env.VITE_APP_TITLE;
//importar imagen de assets
import "./styles/HeroSection.css";
import fond_hero from '../assets/img/back-habitaciones.jpg';
const Home = () => {
  return (
    <div>
      <img className="FondoHero" src={fond_hero} alt="Fondo hero" />
      <div className="text-container">
        <span className="word word1">Confianza</span>
        <span className="word word2">Calidad</span>
        <span className="word word3">Profesionalismo</span>
        <span className="word word4">Compromiso</span>
        <span className="word word5">Responsabilidad</span>
        <span className="word word6">Innovación</span>
        <span className="word word7">Seguridad</span>
      </div>
      <div className="">
        {/* Contenido principal del home */}
        <section className="Intro">
          <h1>{title}</h1>

          <h2>Red de Seguro: Tu Protección, Nuestra Prioridad</h2>
          <p>Una <span>Red de Seguro</span> es una alianza de aseguradoras, médicos y prestadores de servicios que garantizan tu seguridad y bienestar. Ofrecemos soluciones diseñadas para brindarte tranquilidad ante cualquier imprevisto.</p>

          <h3>¿Por qué elegir una Red de Seguro?</h3>
          <ul>
            <li>Flexibilidad en la elección de médicos y centros de atención.</li>
            <li>Cobertura adaptada a tus necesidades personales o empresariales.</li>
            <li>Protección financiera ante emergencias y accidentes.</li>
          </ul>

          <h3>¿En qué se diferencia de una Obra Social?</h3>
          <p>Mientras que una obra social está vinculada a tu empleo y tiene coberturas estandarizadas, una red de seguro te permite elegir el plan que mejor se adapte a ti, con mayores beneficios y servicios adicionales.</p>

        </section>

        {/*
        <section className="services">
          <h2>Nuestros Servicios</h2>
          <div className="service-grid">
            {[
              { titulo: 'Asesoramiento Social', descripcion: 'Ayuda y asesoramiento para la comunidad' },
              { titulo: 'Iniciatives', descripcion: 'Proyectos comunitarios y de desarrollo' },
              { titulo: 'Educación', descripcion: 'Programas educativos para todos' },
              { titulo: 'Sostenibilidad', descripcion: 'Trabajos de mantenimiento y cuidado ambiental' }
            ].map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.titulo}</h3>
                <p>{service.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

     
        <section className="highlights">
          <h2>Destacamos</h2>
          <div className="highlight-grid">
            {[
              { titulo: 'Programa de Emprendimiento', descripcion: 'Ayuda a emprender tu negocio' },
              { titulo: 'Asistencia Legal', descripcion: 'Asesoramiento legal para la comunidad' },
              { titulo: 'Cursos y Talleres', descripcion: 'Aprende y mejora tus habilidades' }
            ].map((highlight, index) => (
              <div key={index} className="highlight-card">
                <h3>{highlight.titulo}</h3>
                <p>{highlight.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

     
        <section className="final-call">
          <h2>Únete a nosotros</h2>
          <p>Somos más fuertes juntos. Aprende más y participa en nuestros proyectos.</p>
          <div className="cta-grid">
            <a href="#contacto" className="btn">Contactarnos</a>
          </div>
        </section>
*/}
      </div>
    </div>
  );
};

export default Home;
