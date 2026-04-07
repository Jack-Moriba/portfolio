import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './styles/HolographicCard.css';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const HolographicCard = ({ children, className = '', intensity = 1 }: HolographicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -15 * intensity;
      const rotateY = ((x - centerX) / centerX) * 15 * intensity;
      
      // Calculate holographic gradient position
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000
      });
      
      // Update holographic shine
      card.style.setProperty('--holo-x', `${percentX}%`);
      card.style.setProperty('--holo-y', `${percentY}%`);
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [intensity]);

  return (
    <div 
      ref={cardRef}
      className={`holographic-card ${className} ${isHovered ? 'hovered' : ''}`}
      style={{ '--intensity': intensity } as React.CSSProperties}
    >
      {/* Holographic layers */}
      <div className="holo-layer holo-rainbow"></div>
      <div className="holo-layer holo-grid"></div>
      <div className="holo-layer holo-scan"></div>
      <div className="holo-layer holo-noise"></div>
      
      {/* Shine effect */}
      <div className="holo-shine"></div>
      
      {/* Content */}
      <div className="holo-content">
        {children}
      </div>
      
      {/* Edge glow */}
      <div className="holo-edge"></div>
    </div>
  );
};

export default HolographicCard;
