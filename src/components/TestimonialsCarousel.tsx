import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import TiltCard3D from './TiltCard3D';
import './styles/TestimonialsCarousel.css';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Koné',
    role: 'Directrice Marketing',
    company: 'Startup Tech Guinea',
    avatar: '/images/avatar-marie.png',
    content: 'Jacques a transformé notre vision en une application web exceptionnelle. Son expertise technique et sa créativité ont dépassé toutes nos attentes. Un vrai professionnel !',
    rating: 5,
    project: 'Platform NOUS',
  },
  {
    id: 2,
    name: 'Dr. Amadou Diallo',
    role: 'CEO',
    company: 'HealthTech Africa',
    avatar: '/images/avatar-pasteur.png',
    content: 'Le système de gestion développé par Jacques a révolutionné notre façon de travailler. La qualité du code, les délais respectés et le support post-livraison sont impeccables.',
    rating: 5,
    project: 'Health Management System',
  },
  {
    id: 3,
    name: 'Aïssatou Barry',
    role: 'Fondatrice',
    company: 'E-commerce Guinée',
    avatar: '/images/avatar-aissatou.png',
    content: 'Notre boutique en ligne a vu ses ventes augmenter de 150% après le redesign par Jacques. Il comprend vraiment les besoins business et les traduit en solutions tech.',
    rating: 5,
    project: 'E-commerce Platform',
  },
  {
    id: 4,
    name: 'Mamadou Camara',
    role: 'CTO',
    company: 'Fintech Solutions',
    avatar: '/images/avatar-mamadou.png',
    content: 'Travailler avec Jacques sur notre application de paiement mobile a été une expérience excellente. Son maîtrise de React Native et Node.js est impressionnante.',
    rating: 5,
    project: 'Mobile Payment App',
  },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setDirection(index > activeIndex ? 'right' : 'left');
    setIsAnimating(true);
    setActiveIndex(index);
  };

  // Auto-play
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset animation state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // GSAP Animation on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-header',
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

      gsap.fromTo(
        '.testimonial-carousel-container',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section ref={sectionRef} className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        {/* Background Effects */}
        <div className="testimonials-bg">
          <div className="bg-quote-large">"</div>
          <div className="bg-glow-orb" />
        </div>

        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-subtitle">Témoignages</span>
          <h2 className="testimonials-title">
            Ce que disent mes <span className="gradient-text">Clients</span>
          </h2>
          <p className="testimonials-description">
            Des collaborations réussies et des projets qui ont dépassé les attentes
          </p>
        </div>

        {/* Carousel */}
        <div className="testimonial-carousel-container" ref={carouselRef}>
          {/* Navigation Buttons */}
          <button 
            className="carousel-nav prev"
            onClick={prevSlide}
            disabled={isAnimating}
          >
            <FaChevronLeft />
          </button>
          <button 
            className="carousel-nav next"
            onClick={nextSlide}
            disabled={isAnimating}
          >
            <FaChevronRight />
          </button>

          {/* Main Card */}
          <div className={`carousel-card-wrapper ${isAnimating ? `slide-${direction}` : ''}`}>
            <TiltCard3D
              tiltAmount={8}
              perspective={1200}
              scale={1.02}
              glareEnable={true}
              glareMaxOpacity={0.15}
              className="testimonial-tilt-card"
            >
              <div className="testimonial-card">
                {/* Quote Icon */}
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>

                {/* Content */}
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    {currentTestimonial.content}
                  </p>
                </div>

                {/* Rating */}
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < currentTestimonial.rating ? 'filled' : ''} 
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <div 
                      className="avatar-placeholder"
                      style={{ backgroundColor: `hsl(${(activeIndex * 60) + 180}, 70%, 60%)` }}
                    >
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div className="avatar-ring" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{currentTestimonial.name}</h4>
                    <p className="author-role">{currentTestimonial.role}</p>
                    <p className="author-company">{currentTestimonial.company}</p>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="project-tag">
                  <span>Projet :</span> {currentTestimonial.project}
                </div>

                {/* Decorative Elements */}
                <div className="card-decoration top-left" />
                <div className="card-decoration bottom-right" />
              </div>
            </TiltCard3D>
          </div>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Side Cards (Preview) */}
          <div className="side-cards">
            <div 
              className="side-card left"
              style={{
                transform: `translateX(-120%) rotateY(25deg) scale(0.8)`,
                opacity: 0.4,
              }}
            >
              <div className="side-card-content">
                <span className="side-card-initial">
                  {testimonialsData[(activeIndex - 1 + testimonialsData.length) % testimonialsData.length].name.charAt(0)}
                </span>
              </div>
            </div>
            <div 
              className="side-card right"
              style={{
                transform: `translateX(120%) rotateY(-25deg) scale(0.8)`,
                opacity: 0.4,
              }}
            >
              <div className="side-card-content">
                <span className="side-card-initial">
                  {testimonialsData[(activeIndex + 1) % testimonialsData.length].name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Clients satisfaits</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Projets livrés</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Note moyenne</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
