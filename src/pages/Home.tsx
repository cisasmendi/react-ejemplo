import React from 'react';

const Home = () => {
  return (
    <div className="container">
      {/* Contenido principal del home */}
      <section className="hero">
      <img 
            src="https://placehold.co/1920x600" 
            alt="Fondo hero"
            className="hero-image-bg"
          />
        <h1>Bienvénido a Andina Obra Social</h1>
        <p>La obra social que te acompaña en tu camino</p>
        <div className="call-to-action">
          <a href="#nosotros" className="btn">Descubre nosotros</a>
          <a href="#servicios" className="btn btn-primary">Nuestros servicios</a>
        </div>
      </section>

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

      {/* Sección de destacados (opcional) */}
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

      {/* Llamado a la acción (opcional) */}
      <section className="final-call">
        <h2>Únete a nosotros</h2>
        <p>Somos más fuertes juntos. Aprende más y participa en nuestros proyectos.</p>
        <div className="cta-grid">
          <a href="#contacto" className="btn">Contactarnos</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
