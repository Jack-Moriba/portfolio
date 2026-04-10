import { useState, useEffect, useRef } from 'react';
import TiltCard3D from './TiltCard3D';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/TiltCard3D.css';
import './styles/Avatar3DEnhanced.css';

interface ProfileCard3DProps {
  name?: string;
  role?: string;
  stats?: {
    projects: number;
    experience: string;
    satisfaction: string;
  };
}

// Avatar SVG avec yeux qui suivent le curseur
const AnimatedAvatar = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  // Calcul du mouvement des yeux (limité à ±3px)
  const eyeX = Math.max(-3, Math.min(3, mouseX / 3));
  const eyeY = Math.max(-3, Math.min(3, mouseY / 3));

  return (
    <svg 
      viewBox="0 0 140 140" 
      className="avatar-svg"
      style={{ transform: `rotateX(${-mouseY * 0.3}deg) rotateY(${mouseX * 0.3}deg)` }}
    >
      <defs>
        <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5A3C" />
          <stop offset="100%" stopColor="#6B4423" />
        </linearGradient>
        <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#16213e" />
        </linearGradient>
        <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4a3728" />
          <stop offset="80%" stopColor="#2d1f16" />
          <stop offset="100%" stopColor="#1a0f0a" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background circle */}
      <circle cx="70" cy="70" r="65" fill="url(#skinGradient)" stroke="#5C4033" strokeWidth="2"/>

      {/* Hair */}
      <path 
        d="M20 70 Q20 20 70 15 Q120 20 120 70 Q120 45 100 35 Q70 25 40 35 Q20 45 20 70" 
        fill="url(#hairGradient)"
      />
      <path 
        d="M15 70 Q15 50 25 40 L30 80 Q20 75 15 70" 
        fill="url(#hairGradient)"
      />
      <path 
        d="M125 70 Q125 50 115 40 L110 80 Q120 75 125 70" 
        fill="url(#hairGradient)"
      />

      {/* Face shape refinement */}
      <ellipse cx="70" cy="75" rx="45" ry="40" fill="url(#skinGradient)"/>

      {/* Eyes container */}
      <g transform={`translate(${eyeX}, ${eyeY})`}>
        {/* Left eye */}
        <ellipse cx="50" cy="65" rx="12" ry="10" fill="#fff" opacity="0.9"/>
        <circle cx="50" cy="65" r="8" fill="url(#eyeGradient)"/>
        <circle cx="52" cy="63" r="3" fill="#fff" opacity="0.6"/>
        <circle cx="48" cy="67" r="1.5" fill="#fff" opacity="0.8"/>

        {/* Right eye */}
        <ellipse cx="90" cy="65" rx="12" ry="10" fill="#fff" opacity="0.9"/>
        <circle cx="90" cy="65" r="8" fill="url(#eyeGradient)"/>
        <circle cx="92" cy="63" r="3" fill="#fff" opacity="0.6"/>
        <circle cx="88" cy="67" r="1.5" fill="#fff" opacity="0.8"/>
      </g>

      {/* Eyebrows */}
      <path d="M35 55 Q50 50 62 58" stroke="#2d1f16" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M78 58 Q90 50 105 55" stroke="#2d1f16" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Glasses (tech style) */}
      <g filter="url(#glow)">
        <rect x="32" y="55" width="36" height="22" rx="5" fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.8"/>
        <rect x="72" y="55" width="36" height="22" rx="5" fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.8"/>
        <line x1="68" y1="65" x2="72" y2="65" stroke="#00d4ff" strokeWidth="2" opacity="0.8"/>
      </g>

      {/* Nose */}
      <path d="M70 70 L68 85 L75 88" stroke="#5C4033" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Smile */}
      <path d="M55 95 Q70 105 85 95" stroke="#4a3728" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Tech elements - circuit lines */}
      <path d="M25 100 L30 105 L30 115" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M115 100 L110 105 L110 115" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <circle cx="30" cy="115" r="3" fill="#00d4ff" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="110" cy="115" r="3" fill="#00d4ff" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>
    </svg>
  );
};

const ProfileCard3D = ({
  name = "Jacques Moriba",
  role = "Développeur Full Stack",
  stats = {
    projects: 15,
    experience: "3+ ans",
    satisfaction: "98%",
  },
}: ProfileCard3DProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typedRole, setTypedRole] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation d'entrée
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation typing pour le rôle
  useEffect(() => {
    if (!isVisible) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index <= role.length) {
        setTypedRole(role.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [isVisible, role]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      className={`avatar-3d-wrapper ${isVisible ? 'visible' : ''}`}
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
        {/* Avatar SVG animé */}
        <div className="avatar-svg-container">
          <div className="avatar-halo-orbit" />
          <div className="avatar-glow-ring" />
          <AnimatedAvatar mouseX={mousePosition.x} mouseY={mousePosition.y} />
          <div className="avatar-status-badge">
            <span className="avatar-status-icon">🚀</span>
          </div>
        </div>

        <h3 className="tilt-card-title">{name}</h3>
        <p className="tilt-card-subtitle role-typing">
          {typedRole}
        </p>

        <div className="stats-3d">
          <div className="stat-3d">
            <span className="stat-value">{stats.projects}</span>
            <span className="stat-label">Projets</span>
          </div>
          <div className="stat-3d">
            <span className="stat-value">{stats.experience}</span>
            <span className="stat-label">Expérience</span>
          </div>
          <div className="stat-3d">
            <span className="stat-value">{stats.satisfaction}</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>

        <div className="actions-3d">
          <button className="btn-3d btn-3d-primary">
            <FaGithub />
            GitHub
          </button>
          <button className="btn-3d btn-3d-secondary">
            <FaLinkedin />
            LinkedIn
          </button>
        </div>
      </TiltCard3D>

      {/* Particules flottantes */}
      <div className="particles-container">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="particle-3d"
            style={{
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard3D;
