import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaPalette, FaMobile, FaServer } from 'react-icons/fa';
import TiltCard3D from './TiltCard3D';
import './styles/ProjectsShowcase.css';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  color: string;
  links: {
    demo?: string;
    github?: string;
    case?: string;
  };
  stats: {
    views: string;
    likes: string;
  };
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'NOUS Platform',
    category: 'Fintech',
    description: 'Plateforme de paiement mobile innovante pour le marché africain avec wallet digital et transferts instantanés.',
    image: '/images/nous-platform.jpg',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: '#00d4ff',
    links: {
      demo: '#',
      github: '#',
      case: '#',
    },
    stats: {
      views: '12.5K',
      likes: '856',
    },
  },
  {
    id: 2,
    title: 'HOLY Ecosystem',
    category: 'E-commerce',
    description: 'Écosystème e-commerce complet avec app mobile, dashboard admin et système de paiement intégré.',
    image: '/images/holy-ecosystem.jpg',
    tech: ['Django', 'React Native', 'AWS', 'Redis'],
    color: '#ff0080',
    links: {
      demo: '#',
      github: '#',
    },
    stats: {
      views: '8.2K',
      likes: '623',
    },
  },
  {
    id: 3,
    title: 'Church Platform',
    category: 'Web App',
    description: 'Plateforme de gestion d\'église avec streaming live, dons en ligne et gestion de membres.',
    image: '/images/church-platform.jpg',
    tech: ['Next.js', 'Prisma', 'Socket.io', 'WebRTC'],
    color: '#14b8a6',
    links: {
      demo: '#',
      case: '#',
    },
    stats: {
      views: '15.8K',
      likes: '1.2K',
    },
  },
  {
    id: 4,
    title: 'Bible Quiz App',
    category: 'Mobile Game',
    description: 'Application quiz interactive sur la Bible avec classements, défis et récompenses.',
    image: '/images/bible-quiz.jpg',
    tech: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    color: '#f59e0b',
    links: {
      demo: '#',
      github: '#',
    },
    stats: {
      views: '5.4K',
      likes: '432',
    },
  },
  {
    id: 5,
    title: 'Bank System',
    category: 'Enterprise',
    description: 'Système bancaire sécurisé avec authentification multi-facteurs et transactions cryptées.',
    image: '/images/bank-system.jpg',
    tech: ['Java', 'Spring Boot', 'Oracle', 'Docker'],
    color: '#8b5cf6',
    links: {
      github: '#',
    },
    stats: {
      views: '3.1K',
      likes: '289',
    },
  },
  {
    id: 6,
    title: 'Portfolio 3D',
    category: 'Creative',
    description: 'Portfolio immersif avec modèle 3D interactif, animations GSAP et design glassmorphism.',
    image: '/images/portfolio-3d.jpg',
    tech: ['Three.js', 'React', 'GSAP', 'WebGL'],
    color: '#ec4899',
    links: {
      demo: '#',
      github: '#',
    },
    stats: {
      views: '9.7K',
      likes: '742',
    },
  },
];

const categories = ['Tous', 'Fintech', 'E-commerce', 'Web App', 'Mobile Game', 'Enterprise', 'Creative'];

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'Tous' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation header
      gsap.fromTo(
        '.projects-header',
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

      // Animation filtres
      gsap.fromTo(
        '.category-filter',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-filters',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animation des cards quand le filtre change
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.project-card-wrapper');
    
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, [activeCategory]);

  return (
    <section ref={sectionRef} className="projects-section" id="projects">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <span className="projects-subtitle">Portfolio</span>
          <h2 className="projects-title">
            Mes <span className="gradient-text">Réalisations</span>
          </h2>
          <p className="projects-description">
            Une sélection de projets innovants qui démontrent mon expertise 
            technique et ma créativité
          </p>
        </div>

        {/* Filtres */}
        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div ref={gridRef} className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card-wrapper"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <TiltCard3D
                tiltAmount={12}
                perspective={1000}
                scale={1.03}
                glareEnable={true}
                glareMaxOpacity={0.2}
                className="project-tilt-card"
              >
                <div 
                  className="project-card"
                  style={{
                    '--project-color': project.color,
                  } as React.CSSProperties}
                >
                  {/* Image */}
                  <div className="project-image-container">
                    <div 
                      className="project-image-placeholder"
                      style={{ backgroundColor: `${project.color}15` }}
                    >
                      <span className="project-placeholder-icon" style={{ color: project.color }}>
                        {project.category === 'Fintech' && <FaServer />}
                        {project.category === 'E-commerce' && <FaPalette />}
                        {project.category === 'Web App' && <FaCode />}
                        {project.category === 'Mobile Game' && <FaMobile />}
                        {project.category === 'Enterprise' && <FaServer />}
                        {project.category === 'Creative' && <FaPalette />}
                      </span>
                    </div>
                    
                    {/* Overlay au hover */}
                    <div 
                      className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}
                    >
                      <div className="project-stats">
                        <span className="stat">
                          <FaEye /> {project.stats.views}
                        </span>
                        <span className="stat">
                          <span className="heart">♥</span> {project.stats.likes}
                        </span>
                      </div>
                      
                      <div className="project-actions">
                        {project.links.demo && (
                          <a 
                            href={project.links.demo} 
                            className="action-btn demo"
                            style={{ backgroundColor: project.color }}
                          >
                            <FaExternalLinkAlt />
                            <span>Voir le projet</span>
                          </a>
                        )}
                        {project.links.github && (
                          <a 
                            href={project.links.github} 
                            className="action-btn github"
                          >
                            <FaGithub />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Category badge */}
                    <div 
                      className="category-badge"
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    {/* Tech stack */}
                    <div className="tech-stack">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="tech-tag"
                          style={{ 
                            borderColor: `${project.color}40`,
                            color: project.color 
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Glow border effect */}
                  <div 
                    className="project-glow"
                    style={{ 
                      background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}30, transparent 70%)`,
                      opacity: hoveredProject === project.id ? 1 : 0
                    }}
                  />
                </div>
              </TiltCard3D>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta">
          <p>Intéressé par mon travail ?</p>
          <a href="#contact" className="cta-button">
            <span>Discutons de votre projet</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
