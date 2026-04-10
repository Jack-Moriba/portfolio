import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './styles/Photo3D.css';

interface Photo3DProps {
  src: string;
  alt?: string;
  tiltAmount?: number;
  glareEnable?: boolean;
  borderGradient?: boolean;
  haloEnable?: boolean;
  scale?: number;
  className?: string;
}

const Photo3D = ({
  src,
  alt = "Photo",
  tiltAmount = 15,
  glareEnable = true,
  borderGradient = true,
  haloEnable = true,
  scale = 1.02,
  className = "",
}: Photo3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation d'entrée
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -tiltAmount;
    const rotateY = (mouseX / (rect.width / 2)) * tiltAmount;

    setTransform({
      rotateX,
      rotateY,
      scale: scale,
    });

    // Calcul position glare
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(imageRef.current, {
      scale: scale,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
    setGlarePosition({ x: 50, y: 50 });
    
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <div
      ref={containerRef}
      className={`photo-3d-container ${isVisible ? 'visible' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `
          perspective(1000px)
          rotateX(${transform.rotateX}deg)
          rotateY(${transform.rotateY}deg)
          scale3d(${transform.scale}, ${transform.scale}, ${transform.scale})
        `,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Halo glow animé */}
      {haloEnable && (
        <div className="photo-3d-halo" />
      )}

      {/* Bordure gradient animée */}
      {borderGradient && (
        <div className="photo-3d-border" />
      )}

      {/* Container image */}
      <div className="photo-3d-wrapper">
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className="photo-3d-image"
          loading="eager"
          decoding="async"
        />

        {/* Glare effect */}
        {glareEnable && (
          <div
            ref={glareRef}
            className={`photo-3d-glare ${isHovered ? 'active' : ''}`}
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, 
                rgba(255,255,255,0.35) 0%, 
                rgba(255,255,255,0.1) 25%, 
                transparent 50%)`,
            }}
          />
        )}

        {/* Overlay gradient subtil */}
        <div className="photo-3d-overlay" />
      </div>

      {/* Badge statut */}
      <div className="photo-3d-badge">
        <span className="photo-3d-badge-dot" />
        <span className="photo-3d-badge-text">Disponible</span>
      </div>

      {/* Particules flottantes */}
      <div className="photo-3d-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="photo-3d-particle"
            style={{
              animationDelay: `${i * 0.4}s`,
              left: `${15 + i * 12}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Photo3D;
