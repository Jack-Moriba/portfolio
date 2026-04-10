import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaCode, 
  FaPalette, 
  FaMobileAlt, 
  FaServer, 
  FaSearch, 
  FaRocket,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';
import TiltCard3D from './TiltCard3D';
import './styles/ServicesGrid.css';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'Développement Web',
    subtitle: 'Full Stack',
    description: 'Applications web modernes et performantes avec les dernières technologies React, Next.js et Node.js.',
    features: ['React / Next.js', 'TypeScript', 'API REST / GraphQL', 'Base de données'],
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff20, #0099cc20)',
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: 'Applications Mobiles',
    subtitle: 'iOS & Android',
    description: 'Apps mobiles natives et cross-platform avec React Native pour une expérience utilisateur fluide.',
    features: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Mode'],
    color: '#ff0080',
    gradient: 'linear-gradient(135deg, #ff008020, #cc006620)',
  },
  {
    id: 3,
    icon: <FaPalette />,
    title: 'UI/UX Design',
    subtitle: 'Interfaces Modernes',
    description: 'Design d\'interfaces intuitives et esthétiques avec Figma, prototypage et animations.',
    features: ['Design System', 'Prototypage', 'User Research', 'Motion Design'],
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a620, #0d948820)',
  },
  {
    id: 4,
    icon: <FaServer />,
    title: 'Backend & API',
    subtitle: 'Architecture Server',
    description: 'APIs robustes et scalables avec Node.js, Django ou Java Spring Boot selon vos besoins.',
    features: ['Node.js / Express', 'Python / Django', 'PostgreSQL / Mongo', 'Docker / AWS'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b20, #d9770620)',
  },
  {
    id: 5,
    icon: <FaSearch />,
    title: 'SEO & Performance',
    subtitle: 'Optimisation',
    description: 'Optimisation complète pour les moteurs de recherche et la performance web (Core Web Vitals).',
    features: ['SEO Technique', 'Core Web Vitals', 'Analytics', 'A/B Testing'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf620, #7c3aed20)',
  },
  {
    id: 6,
    icon: <FaRocket />,
    title: 'Consulting Tech',
    subtitle: 'Expertise',
    description: 'Conseil en architecture logicielle, choix technologiques et accompagnement projet.',
    features: ['Architecture', 'Tech Stack', 'Code Review', 'Formation'],
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec489920, #db277720)',
  },
];

const ServicesGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation header
      gsap.fromTo(
        '.services-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animation des cartes en cascade
      gsap.fromTo(
        '.service-card-wrapper',
        { opacity: 0, y: 80, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: {
            each: 0.15,
            from: 'start',
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleService = (id: number) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="services-section" id="services">
      <div className="services-container">
        {/* Background Effects */}
        <div className="services-bg">
          <div className="bg-grid" />
          <div className="bg-glow" />
        </div>

        {/* Header */}
        <div className="services-header">
          <span className="services-subtitle">Expertises</span>
          <h2 className="services-title">
            Mes <span className="gradient-text">Services</span>
          </h2>
          <p className="services-description">
            Des solutions sur mesure pour concrétiser vos projets digitaux
            avec excellence et innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card-wrapper"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <TiltCard3D
                tiltAmount={hoveredService === service.id ? 15 : 8}
                perspective={1200}
                scale={hoveredService === service.id ? 1.05 : 1.02}
                glareEnable={true}
                glareMaxOpacity={0.15}
                className="service-tilt-card"
              >
                <div 
                  className={`service-card ${activeService === service.id ? 'active' : ''}`}
                  style={{ '--service-color': service.color } as React.CSSProperties}
                  onClick={() => toggleService(service.id)}
                >
                  {/* Icon Container */}
                  <div 
                    className="service-icon-container"
                    style={{ background: service.gradient }}
                  >
                    <div 
                      className="service-icon"
                      style={{ 
                        color: service.color,
                        transform: hoveredService === service.id ? 'scale(1.2) rotate(5deg)' : 'scale(1)'
                      }}
                    >
                      {service.icon}
                    </div>
                    
                    {/* Pulse ring */}
                    <div 
                      className="icon-pulse-ring"
                      style={{ borderColor: service.color }}
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="service-header">
                    <h3 className="service-title">{service.title}</h3>
                    <span className="service-subtitle">{service.subtitle}</span>
                  </div>

                  {/* Description */}
                  <p className="service-description">{service.description}</p>

                  {/* Features List */}
                  <div 
                    className={`service-features ${activeService === service.id ? 'expanded' : ''}`}
                  >
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i} style={{ color: service.color }}>
                          <FaCheck />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="service-cta">
                    <button 
                      className="service-btn"
                      style={{ 
                        backgroundColor: hoveredService === service.id ? service.color : 'transparent',
                        borderColor: service.color,
                        color: hoveredService === service.id ? '#0a0e17' : service.color
                      }}
                    >
                      <span>En savoir plus</span>
                      <FaArrowRight 
                        style={{ 
                          transform: hoveredService === service.id ? 'translateX(4px)' : 'translateX(0)'
                        }} 
                      />
                    </button>
                  </div>

                  {/* Corner accent */}
                  <div 
                    className="service-corner"
                    style={{ backgroundColor: service.color }}
                  />

                  {/* Hover glow */}
                  <div 
                    className="service-glow"
                    style={{ 
                      background: `radial-gradient(circle at 50% 0%, ${service.color}25, transparent 60%)`,
                      opacity: hoveredService === service.id ? 1 : 0
                    }}
                  />
                </div>
              </TiltCard3D>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-bottom">
          <div className="bottom-card">
            <h3>Vous avez un projet en tête ?</h3>
            <p>Discutons de vos besoins et trouvons la solution adaptée ensemble.</p>
            <a href="#contact" className="bottom-cta-btn">
              <span>Démarrer un projet</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
