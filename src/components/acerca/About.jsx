import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Sobre este Proyecto</h1>
        <button onClick={() => navigate('/login')} className="btn-back">
          Volver al Inicio
        </button>
      </header>

      <section className="about-card">
        <h2>Explicación del Proyecto</h2>
        <p>
          Este es un clon de una aplicación de mensajería desarrollado como trabajo final. 
          El objetivo fue crear una interfaz fluida, intuitiva y persistente que simule 
          la experiencia de chat moderna.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h2>Tecnologías Utilizadas</h2>
          <ul>
            <li><strong>React + Vite:</strong> Entorno de desarrollo de alto rendimiento.</li>
            <li><strong>React Router Dom:</strong> Gestión de navegación y seguridad en rutas.</li>
            <li><strong>Context API:</strong> Manejo del estado global de la sesión y mensajes.</li>
            <li><strong>LocalStorage:</strong> Persistencia de datos en el navegador.</li>
            <li><strong>CSS Moderno:</strong> Diseño basado en Flexbox y variables.</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Decisiones de Desarrollo</h2>
          <p>
            Se optó por una arquitectura de <b>Contexto Centralizado</b> para evitar el 
            "Prop Drilling" y asegurar que la información del usuario esté disponible 
            en cualquier parte del sitio sin recargas innecesarias.
          </p>
        </div>
      </section>

      <section className="about-card">
        <h2>Dificultades y Observaciones</h2>
        <p>
          Uno de los mayores desafíos fue la implementación de la persistencia de datos 
          y la lógica de redirección automática. También se puso especial énfasis en el 
          estilo <b>Glassmorphism</b> para lograr una identidad visual coherente.
        </p>
        <p>
          Como estudiante, este proyecto me permitió profundizar en el manejo del DOM 
          virtual y la sincronización de estados complejos.
        </p>
      </section>
    </div>
  );
};

export {About} ;