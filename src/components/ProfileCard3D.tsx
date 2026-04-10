import { useState, useEffect } from 'react';
import TiltCard3D from './TiltCard3D';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/TiltCard3D.css';

interface ProfileCard3DProps {
  name?: string;
  role?: string;
  avatarUrl?: string;
  stats?: {
    projects: number;
    experience: string;
    satisfaction: string;
  };
}

const ProfileCard3D = ({
  name = "Jacques Moriba",
  role = "Développeur Full Stack",
  avatarUrl = "/images/avatar.png",
  stats = {
    projects: 15,
    experience: "3+ ans",
    satisfaction: "98%",
  },
}: ProfileCard3DProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`profile-card-wrapper ${isVisible ? 'visible' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <TiltCard3D
        tiltAmount={20}
        perspective={1200}
        scale={1.05}
        transitionDuration={0.5}
        glareEnable={true}
        glareMaxOpacity={0.25}
        className="profile-tilt-card"
      >
        <div className="tilt-avatar-container">
          <div className="tilt-avatar-halo" />
          <img 
            src={avatarUrl} 
            alt={name}
            className="tilt-avatar"
            style={{
              transform: `translateZ(50px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            }}
          />
          <div className="tilt-badge">
            <span>✨</span>
          </div>
        </div>

        <h3 className="tilt-card-title">{name}</h3>
        <p className="tilt-card-subtitle">{role}</p>

        <div className="tilt-stats">
          <div className="tilt-stat">
            <span className="tilt-stat-value">{stats.projects}</span>
            <span className="tilt-stat-label">Projets</span>
          </div>
          <div className="tilt-stat">
            <span className="tilt-stat-value">{stats.experience}</span>
            <span className="tilt-stat-label">Expérience</span>
          </div>
          <div className="tilt-stat">
            <span className="tilt-stat-value">{stats.satisfaction}</span>
            <span className="tilt-stat-label">Satisfaction</span>
          </div>
        </div>

        <div className="tilt-actions">
          <button className="tilt-btn tilt-btn-primary">
            <FaGithub style={{ marginRight: '8px' }} />
            GitHub
          </button>
          <button className="tilt-btn tilt-btn-secondary">
            <FaLinkedin style={{ marginRight: '8px' }} />
            LinkedIn
          </button>
        </div>
      </TiltCard3D>

      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              animationDelay: `${i * 0.5}s`,
              left: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard3D;
