import { useEffect, useRef, useState } from 'react';
import ProfileCard3D from './ProfileCard3D';
import TiltCard3D from './TiltCard3D';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaPalette, FaRocket, FaHeart } from 'react-icons/fa';
import './styles/TiltCard3D.css';

gsap.registerPlugin(ScrollTrigger);

const About3DEnhanced = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => setIsVisible(true),
    });

    return () => trigger.kill();
  }, []);

  const skills = [
    {
      icon: <FaCode />,
      title: 'Full Stack',
      description: 'React, Next.js, Django, Node.js',
      color: '#00d4ff',
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Figma, Animation, 3D Graphics',
      color: '#ff0080',
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Optimisation, SEO, Core Web Vitals',
      color: '#14b8a6',
    },
    {
      icon: <FaHeart />,
      title: 'Passion',
      description: 'Innovation, Clean Code, User First',
      color: '#f59e0b',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about-3d"
      className={`about-3d-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="about-3d-container">
        {/* Header */}
        <div className="about-3d-header">
          <h2 className="about-3d-title">
            <span className="gradient">À Propos</span>
          </h2>
          <p className="about-3d-subtitle">
            Développeur passionné par la création d'expériences digitales innovantes
          </p>
        </div>

        {/* Main Grid */}
        <div className="about-3d-grid">
          {/* Profile Card 3D */}
          <div className="about-3d-profile">
            <ProfileCard3D
              name="Jacques Moriba"
              role="Full Stack Developer & Software Engineer"
              stats={{
                projects: 15,
                experience: '3+ ans',
                satisfaction: '98%',
              }}
            />
          </div>

          {/* Skills Grid */}
          <div className="about-3d-skills">
            {skills.map((skill) => (
              <TiltCard3D
                key={skill.title}
                tiltAmount={15}
                scale={1.03}
                transitionDuration={0.3}
                glareEnable={true}
                glareMaxOpacity={0.2}
                className="skill-tilt-card"
              >
                <div 
                  className="skill-icon"
                  style={{ 
                    color: skill.color,
                    filter: `drop-shadow(0 0 10px ${skill.color}40)`,
                  }}
                >
                  {skill.icon}
                </div>
                <h4 className="skill-title">{skill.title}</h4>
                <p className="skill-description">{skill.description}</p>
                <div 
                  className="skill-glow"
                  style={{ background: skill.color }}
                />
              </TiltCard3D>
            ))}
          </div>
        </div>

        {/* Bio Section */}
        <TiltCard3D
          tiltAmount={10}
          scale={1.01}
          className="about-3d-bio"
        >
          <p className="bio-text">
            Étudiant en <strong>Ingénierie Logicielle</strong> à l'Université Nongo Conakry (UNC), 
            je suis passionné par le développement web et les nouvelles technologies. 
            Spécialisé en <span className="highlight">React</span>,{' '}
            <span className="highlight">Next.js</span>, et{' '}
            <span className="highlight">Django</span>, je crée des solutions digitales 
            modernes adaptées au contexte africain.
          </p>
          <div className="bio-tags">
            <span className="bio-tag">#React</span>
            <span className="bio-tag">#NextJS</span>
            <span className="bio-tag">#Django</span>
            <span className="bio-tag">#TypeScript</span>
            <span className="bio-tag">#ThreeJS</span>
            <span className="bio-tag">#Guinea</span>
          </div>
        </TiltCard3D>
      </div>

      {/* Background Effects */}
      <div className="about-3d-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>
    </section>
  );
};

export default About3DEnhanced;
