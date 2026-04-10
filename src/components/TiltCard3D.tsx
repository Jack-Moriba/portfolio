import { useRef, useState, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import './styles/TiltCard3D.css';

interface TiltCard3DProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  perspective?: number;
  scale?: number;
  transitionDuration?: number;
  glareEnable?: boolean;
  glareMaxOpacity?: number;
  gyroscope?: boolean;
}

const TiltCard3D = ({
  children,
  className = '',
  tiltAmount = 15,
  perspective = 1000,
  scale = 1.02,
  transitionDuration = 0.4,
  glareEnable = true,
  glareMaxOpacity = 0.3,
  gyroscope = false,
}: TiltCard3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculer la rotation en fonction de la position de la souris
    const rotateY = (mouseX / (rect.width / 2)) * tiltAmount;
    const rotateX = -(mouseY / (rect.height / 2)) * tiltAmount;

    setTransform({
      rotateX,
      rotateY,
      scale,
    });

    // Position du glare
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(cardRef.current, {
      duration: transitionDuration,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(transform, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: transitionDuration,
      ease: 'power2.out',
    });
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
  };

  // Gyroscope pour mobile
  useEffect(() => {
    if (!gyroscope || !window.DeviceOrientationEvent) return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (!cardRef.current || isHovered) return;

      const tiltX = event.beta || 0; // -180 to 180 (front/back)
      const tiltY = event.gamma || 0; // -90 to 90 (left/right)

      const rotateX = Math.max(-tiltAmount, Math.min(tiltAmount, tiltX / 3));
      const rotateY = Math.max(-tiltAmount, Math.min(tiltAmount, tiltY / 3));

      setTransform({
        rotateX,
        rotateY,
        scale: 1,
      });
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [gyroscope, isHovered, tiltAmount]);

  const cardStyle = {
    transform: `perspective(${perspective}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(${transform.scale}, ${transform.scale}, ${transform.scale})`,
    transition: `transform ${transitionDuration}s cubic-bezier(0.23, 1, 0.32, 1)`,
  };

  const glareStyle = {
    background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${isHovered ? glareMaxOpacity : 0}) 0%, transparent 60%)`,
    opacity: isHovered ? 1 : 0,
    transition: `opacity ${transitionDuration}s ease`,
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-3d ${className} ${isHovered ? 'is-hovered' : ''}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {glareEnable && (
        <div
          ref={glareRef}
          className="tilt-card-glare"
          style={glareStyle}
        />
      )}
      <div className="tilt-card-content">
        {children}
      </div>
    </div>
  );
};

export default TiltCard3D;
