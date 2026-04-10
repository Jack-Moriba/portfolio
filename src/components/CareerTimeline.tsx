import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase, FaGraduationCap, FaAward, FaCode, FaCalendarAlt, FaMapMarkerAlt, FaPalette } from 'react-icons/fa';
import './styles/CareerTimeline.css';

gsap.registerPlugin(ScrollTrigger);

interface CareerItem {
  id: number;
  type: 'work' | 'education' | 'achievement';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

const careerData: CareerItem[] = [
  {
    id: 0,
    type: 'work',
    title: 'Stagiaire Graphic Designer',
    organization: 'BEJ Agency SARL',
    location: 'Conakry, Guinée',
    period: 'Juillet - Septembre 2025',
    description: 'Conception visuelle et branding pour clients. Collaboration avec Mme Koné Esther (Fondatrice & Directrice de la Communication) sur des projets créatifs et supports de communication.',
    skills: ['Design Graphique', 'Branding', 'Communication', 'Adobe Suite', 'Figma', 'Canva Pro'],
    icon: <FaPalette />,
    color: '#d4af37', // Or doré comme le certificat
  },
  {
    id: 1,
    type: 'work',
    title: 'Développeur Full Stack',
    organization: 'Freelance & Projets Personnels',
    location: 'Conakry, Guinée',
    period: '2022 - Présent',
    description: 'Développement d\'applications web et mobiles innovantes pour clients internationaux. Spécialisation React, Node.js et solutions cloud.',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    icon: <FaCode />,
    color: '#00d4ff',
  },
  {
    id: 2,
    type: 'education',
    title: 'Licence en Ingénierie Logicielle',
    organization: 'Université Nongo Conakry',
    location: 'Conakry, Guinée',
    period: '2021 - 2024',
    description: 'Formation complète en développement logiciel, algorithmes, bases de données et architecture logicielle.',
    skills: ['Algorithmes', 'Java', 'Python', 'Bases de données'],
    icon: <FaGraduationCap />,
    color: '#14b8a6',
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Certification Full Stack',
    organization: 'Plateformes Online',
    location: 'Remote',
    period: '2023',
    description: 'Obtention de certifications reconnues internationalement en développement web moderne.',
    skills: ['Certification', 'React', 'Node.js'],
    icon: <FaAward />,
    color: '#f59e0b',
  },
  {
    id: 4,
    type: 'work',
    title: 'Développeur Frontend',
    organization: 'Startup Tech Guinea',
    location: 'Conakry, Guinée',
    period: '2021 - 2022',
    description: 'Conception et développement d\'interfaces utilisateur modernes et responsives.',
    skills: ['React', 'CSS3', 'UI/UX', 'Figma'],
    icon: <FaBriefcase />,
    color: '#ff0080',
  },
];

const CareerTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation de la ligne centrale
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      // Animation des items
      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const isLeft = index % 2 === 0;
        
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: isLeft ? -100 : 100,
            rotateY: isLeft ? 15 : -15,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animation du connecteur
        gsap.fromTo(
          item.querySelector('.timeline-connector'),
          { scaleX: 0, transformOrigin: isLeft ? 'right' : 'left' },
          {
            scaleX: 1,
            duration: 0.5,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Animation des points de la timeline
      gsap.fromTo(
        '.timeline-dot',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleItemHover = (id: number | null) => {
    setActiveItem(id);
  };

  return (
    <section ref={sectionRef} className="career-section" id="career">
      <div className="career-container">
        {/* Header */}
        <div className="career-header">
          <span className="career-subtitle">Mon Parcours</span>
          <h2 className="career-title">
            <span className="gradient-text">Expérience &</span>
            <br />
            <span className="gradient-text-alt">Formation</span>
          </h2>
          <p className="career-description">
            Un parcours riche en défis et en apprentissages, 
            de la formation académique aux projets professionnels
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="timeline-wrapper">
          {/* Ligne centrale */}
          <div className="timeline-line" />

          {/* Items */}
          <div className="timeline-items">
            {careerData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={() => handleItemHover(null)}
              >
                {/* Point sur la ligne */}
                <div 
                  className="timeline-dot"
                  style={{ 
                    backgroundColor: item.color,
                    boxShadow: activeItem === item.id ? `0 0 30px ${item.color}` : 'none'
                  }}
                >
                  <span className="timeline-icon" style={{ color: item.color }}>
                    {item.icon}
                  </span>
                </div>

                {/* Connecteur */}
                <div 
                  className="timeline-connector"
                  style={{ backgroundColor: item.color }}
                />

                {/* Card */}
                <div 
                  className={`timeline-card ${activeItem === item.id ? 'active' : ''}`}
                  style={{
                    transform: activeItem === item.id 
                      ? `perspective(1000px) rotateY(${index % 2 === 0 ? 5 : -5}deg) translateZ(20px)` 
                      : 'none'
                  }}
                >
                  {/* Header de la card */}
                  <div className="card-header" style={{ borderLeftColor: item.color }}>
                    <div className="card-type-badge" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                      {item.type === 'work' && 'Expérience'}
                      {item.type === 'education' && 'Formation'}
                      {item.type === 'achievement' && 'Certification'}
                    </div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-organization">{item.organization}</p>
                  </div>

                  {/* Meta info */}
                  <div className="card-meta">
                    <span className="meta-item">
                      <FaCalendarAlt />
                      {item.period}
                    </span>
                    <span className="meta-item">
                      <FaMapMarkerAlt />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="card-description">{item.description}</p>

                  {/* Skills */}
                  <div className="card-skills">
                    {item.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="skill-tag"
                        style={{ 
                          backgroundColor: `${item.color}15`,
                          borderColor: `${item.color}30`,
                          color: item.color 
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Glow effect */}
                  <div 
                    className="card-glow"
                    style={{ 
                      background: `radial-gradient(circle at 50% 0%, ${item.color}20, transparent 70%)`,
                      opacity: activeItem === item.id ? 1 : 0
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats en bas */}
        <div className="career-stats">
          <div className="stat-box">
            <span className="stat-number">3+</span>
            <span className="stat-text">Années d'expérience</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">15+</span>
            <span className="stat-text">Projets réalisés</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">10+</span>
            <span className="stat-text">Certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
