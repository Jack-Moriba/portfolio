/**
 * EXAMPLE USAGE - Comment intégrer TiltCard3D dans votre portfolio
 * 
 * Ce fichier montre différentes façons d'utiliser les composants 3D créés
 */

import { lazy, Suspense } from 'react';

// Option 1: Import direct (si vous voulez remplacer About)
// import About3DEnhanced from './About3DEnhanced';

// Option 2: Import avec lazy loading (recommandé)
const TiltCard3D = lazy(() => import('./TiltCard3D'));
// const ProfileCard3D = lazy(() => import('./ProfileCard3D')); // Commenté - à utiliser si besoin
// const About3DEnhanced = lazy(() => import('./About3DEnhanced')); // Commenté - à utiliser si besoin

// ============================================================================
// EXEMPLE 1: Remplacer la section About existante
// ============================================================================

/*
Dans MainContainer.tsx, remplacez:

  <section id="about" className="section-container">
    <About />
  </section>

Par:

  <Suspense fallback={<div className="loading">Loading...</div>}>
    <About3DEnhanced />
  </Suspense>

*/

// ============================================================================
// EXEMPLE 2: Utiliser TiltCard3D pour les projets
// ============================================================================

const ProjectCardWithTilt = ({ project }: { project: any }) => {
  return (
    <Suspense fallback={<div className="skeleton-card" />}>
      <TiltCard3D
        tiltAmount={12}
        perspective={1000}
        scale={1.03}
        transitionDuration={0.4}
        glareEnable={true}
        glareMaxOpacity={0.2}
        className="project-card-3d"
      >
        <div className="project-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-image"
          />
          <div className="project-overlay">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag: string) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard3D>
    </Suspense>
  );
};

// ============================================================================
// EXEMPLE 3: Grille de services avec tilt
// ============================================================================

const ServicesGrid3D = () => {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Interfaces modernes et intuitives',
      color: '#ff0080',
    },
    {
      icon: '💻',
      title: 'Développement Web',
      description: 'Applications React & Next.js',
      color: '#00d4ff',
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Applications React Native',
      color: '#14b8a6',
    },
    {
      icon: '⚙️',
      title: 'Backend',
      description: 'APIs Django & Node.js',
      color: '#f59e0b',
    },
  ];

  return (
    <div className="services-grid-3d">
      {services.map((service) => (
        <Suspense key={service.title} fallback={<div className="skeleton-card" />}>
          <TiltCard3D
            tiltAmount={10}
            scale={1.02}
            glareMaxOpacity={0.15}
            className="service-card-3d"
          >
            <div 
              className="service-icon"
              style={{ 
                color: service.color,
                fontSize: '40px',
                marginBottom: '16px',
              }}
            >
              {service.icon}
            </div>
            <h3 style={{ color: '#fff', marginBottom: '8px' }}>
              {service.title}
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>
              {service.description}
            </p>
            <div 
              className="service-glow-line"
              style={{ background: service.color }}
            />
          </TiltCard3D>
        </Suspense>
      ))}
    </div>
  );
};

// ============================================================================
// EXEMPLE 4: Cartes de témoignages 3D
// ============================================================================

const TestimonialCard3D = ({ testimonial }: { testimonial: any }) => {
  return (
    <Suspense fallback={<div className="skeleton-card" />}>
      <TiltCard3D
        tiltAmount={8}
        transitionDuration={0.6}
        glareMaxOpacity={0.1}
        className="testimonial-3d-card"
      >
        <div className="testimonial-content">
          <div className="testimonial-quote">"</div>
          <p className="testimonial-text">{testimonial.text}</p>
          <div className="testimonial-author">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="testimonial-avatar"
            />
            <div>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </TiltCard3D>
    </Suspense>
  );
};

// ============================================================================
// EXEMPLE 5: Stats/Metrics cards avec effet 3D
// ============================================================================

const StatCard3D = ({ 
  value, 
  label, 
  icon, 
  color = '#00d4ff' 
}: { 
  value: string; 
  label: string; 
  icon: string;
  color?: string;
}) => {
  return (
    <Suspense fallback={<div className="skeleton-card" />}>
      <TiltCard3D
        tiltAmount={15}
        scale={1.05}
        glareMaxOpacity={0.25}
        className="stat-card-3d"
      >
        <div className="stat-content">
          <div 
            className="stat-icon"
            style={{ color }}
          >
            {icon}
          </div>
          <div 
            className="stat-value"
            style={{ 
              fontSize: '36px',
              fontWeight: 800,
              background: `linear-gradient(135deg, ${color}, #fff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {value}
          </div>
          <div 
            className="stat-label"
            style={{ color: '#94a3b8', fontSize: '14px' }}
          >
            {label}
          </div>
        </div>
      </TiltCard3D>
    </Suspense>
  );
};

// ============================================================================
// EXEMPLE 6: Carte de contact interactive
// ============================================================================

const ContactCard3D = () => {
  return (
    <Suspense fallback={<div className="skeleton-card" />}>
      <TiltCard3D
        tiltAmount={20}
        perspective={1500}
        scale={1.08}
        transitionDuration={0.5}
        glareEnable={true}
        glareMaxOpacity={0.3}
        className="contact-card-3d"
      >
        <div className="contact-3d-content">
          <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '8px' }}>
            Parlons de votre projet
          </h3>
          <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
            Prêt à transformer votre idée en réalité digitale ?
          </p>
          <div className="contact-3d-buttons">
            <a 
              href="mailto:theajamesmoriba@gmail.com"
              className="contact-3d-btn contact-3d-btn-primary"
            >
              ✉️ Envoyer un email
            </a>
            <a 
              href="https://wa.me/224622599507"
              className="contact-3d-btn contact-3d-btn-secondary"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </TiltCard3D>
    </Suspense>
  );
};

// ============================================================================
// EXPORT des exemples pour utilisation
// ============================================================================

export {
  ProjectCardWithTilt,
  ServicesGrid3D,
  TestimonialCard3D,
  StatCard3D,
  ContactCard3D,
};

// Guide d'utilisation rapide:
// 
// 1. Copier cet exemple dans votre composant
// 2. Ajuster les props selon vos besoins
// 3. Personnaliser le CSS
// 4. Tester les performances
//
