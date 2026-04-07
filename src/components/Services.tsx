import { useState, useEffect } from "react";
import "./styles/Services.css";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: "🌐",
      title: "Développement Web Full-Stack",
      description: "Création d'applications web complètes avec React, Next.js, Django et Node.js. Architecture scalable et maintenance optimisée.",
      features: ["Applications SPA", "API RESTful", "Bases de données", "Déploiement cloud"],
      price: "Sur devis",
      delivery: "2-8 semaines",
      level: "Expert"
    },
    {
      icon: "🎨",
      title: "Design Graphique & UI/UX",
      description: "Création d'identités visuelles complètes et d'interfaces utilisateur modernes. Wireframes, prototypes et design systems.",
      features: ["Logo & Branding", "UI Design", "UX Research", "Prototypes Figma"],
      price: "Sur devis",
      delivery: "1-4 semaines",
      level: "Avancé"
    },
    {
      icon: "📱",
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles natives et cross-platform. React Native, Flutter et solutions web progressives.",
      features: ["React Native", "PWA", "Apps natives", "Store deployment"],
      price: "Sur devis",
      delivery: "4-12 semaines",
      level: "Avancé"
    },
    {
      icon: "🔒",
      title: "Cybersécurité & Audit",
      description: "Audit de sécurité, tests de pénétration et mise en place de solutions de protection des données et infrastructures.",
      features: ["Audit sécurité", "Penetration testing", "Hardening", "Formation sécurité"],
      price: "Sur devis",
      delivery: "1-3 semaines",
      level: "Expert"
    },
    {
      icon: "☁️",
      title: "Solutions Cloud & DevOps",
      description: "Architecture cloud, CI/CD, conteneurisation et monitoring. Déploiement sur AWS, Azure et plateformes modernes.",
      features: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
      price: "Sur devis",
      delivery: "2-6 semaines",
      level: "Avancé"
    },
    {
      icon: "🎓",
      title: "Formation & Mentorat",
      description: "Formation personnalisée en développement web, mentorat technique et accompagnement de projets pour développeurs juniors.",
      features: ["Mentorat technique", "Formation web", "Code review", "Career coaching"],
      price: "50€/heure",
      delivery: "Continue",
      level: "Expert"
    }
  ];

  const categories = ["Tous", "Développement", "Design", "Sécurité", "Formation"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredServices = activeCategory === "Tous" 
    ? services 
    : services.filter(service => {
        if (activeCategory === "Développement") return service.title.includes("Développement") || service.title.includes("Applications");
        if (activeCategory === "Design") return service.title.includes("Design");
        if (activeCategory === "Sécurité") return service.title.includes("Cybersécurité");
        if (activeCategory === "Formation") return service.title.includes("Formation");
        return false;
      });

  return (
    <div className="services-section" id="services">
      <div className="services-container">
        <h2 className={`services-title ${isVisible ? "visible" : ""}`}>
          Mes <span>Services</span>
        </h2>
        <p className="services-subtitle">
          Solutions complètes adaptées à vos besoins numériques
        </p>

        <div className={`services-categories ${isVisible ? "visible" : ""}`} style={{animationDelay: "0.2s"}}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`service-card ${isVisible ? "visible" : ""}`}
              style={{animationDelay: `${index * 0.1}s`}}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="service-icon">
                <span className="icon-emoji">{service.icon}</span>
                <div className="level-badge">
                  <span className={`level ${service.level.toLowerCase()}`}>{service.level}</span>
                </div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="service-meta">
                <div className="meta-item">
                  <span className="meta-label">Tarif</span>
                  <span className="meta-value">{service.price}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Livraison</span>
                  <span className="meta-value">{service.delivery}</span>
                </div>
              </div>

              <button className={`service-btn ${hoveredService === index ? "hovered" : ""}`}>
                Demander un devis
              </button>
            </div>
          ))}
        </div>

        <div className={`services-cta ${isVisible ? "visible" : ""}`} style={{animationDelay: "0.8s"}}>
          <h3>Un projet en tête ?</h3>
          <p>Discutons de vos besoins et trouvons la solution idéale ensemble</p>
          <button className="cta-primary">
            Contacter directement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
