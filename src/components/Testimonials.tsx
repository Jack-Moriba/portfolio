import { useState, useEffect } from "react";
import "./styles/Testimonials.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("testimonials");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Marie Konaté",
      role: "CEO, Tech Innovation Guinée",
      avatar: "/avatars/marie.jpg",
      text: "Jacques a transformé notre vision en réalité. Son expertise en développement full-stack et sa compréhension du contexte africain ont été déterminants pour le succès de notre plateforme NOUS.",
      rating: 5,
      project: "NOUS Platform"
    },
    {
      name: "Pasteur Jean Doumbouya",
      role: "Responsable Communautaire, Église Protestante",
      avatar: "/avatars/pasteur.jpg",
      text: "Un talent exceptionnel ! Jacques a créé un écosystème numérique complet pour notre communauté. Sa passion et sa foi se reflètent dans chaque ligne de code.",
      rating: 5,
      project: "HOLY Ecosystem"
    },
    {
      name: "Aïssatou Bah",
      role: "Directrice Marketing, Startup Conakry",
      avatar: "/avatars/aissatou.jpg",
      text: "Professionalisme, créativité et fiabilité. Jacques a livré notre site e-commerce dans les délais avec des fonctionnalités avancées qui ont boosté nos ventes de 300%.",
      rating: 5,
      project: "E-Commerce Platform"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className={`testimonials-title ${isVisible ? "visible" : ""}`}>
          Témoignages <span>Clients</span>
        </h2>
        <p className="testimonials-subtitle">
          Ce que mes partenaires et clients disent de notre collaboration
        </p>

        <div className={`testimonial-carousel ${isVisible ? "visible" : ""}`}>
          <div className="testimonial-wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === activeIndex ? "active" : ""}`}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <div className="testimonial-project">
                      <span className="project-tag">{testimonial.project}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>

                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-btn prev" onClick={prevTestimonial}>
              ←
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <button className="testimonial-btn next" onClick={nextTestimonial}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
