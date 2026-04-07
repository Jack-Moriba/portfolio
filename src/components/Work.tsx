import { useState, useEffect, useCallback } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";
import ProjectImage from "./ProjectImage";

const handleProjectClick = (projectTitle: string, projectDescription: string, projectTools: string) => {
  // URLs réelles des projets (à mettre à jour quand les projets sont déployés)
  const projectUrls: Record<string, string> = {
    "NOUS Platform": "https://github.com/Jack-Moriba/nous-platform",
    "HOLY Ecosystem": "https://github.com/Jack-Moriba/holy-ecosystem",
    "Bible Quiz Web App": "https://github.com/Jack-Moriba/bible-quiz",
    "Church Platform": "https://github.com/Jack-Moriba/church-platform",
    "E-Commerce Website": "https://github.com/Jack-Moriba/ecommerce",
    "Bank Management System": "https://github.com/Jack-Moriba/bank-system"
  };

  const url = projectUrls[projectTitle];
  if (url && !url.includes("example.com")) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    // Afficher une notification que le projet est en cours de développement
    const event = new CustomEvent('showProjectNotification', {
      detail: {
        title: projectTitle,
        description: projectDescription,
        tools: projectTools,
        message: "Ce projet est en cours de développement. Le lien sera disponible prochainement !"
      }
    });
    window.dispatchEvent(event);
  }
};

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Tous");

  const projects = [
    {
      title: "NOUS Platform",
      category: "Digital Services Platform",
      tools: "Next.js, PostgreSQL, Drizzle ORM",
      description: "Platform providing digital services adapted to Guinean context",
      image: "/images/nous-platform.png",
      tags: ["Next.js", "PostgreSQL", "Full-Stack", "Platform"],
      featured: true,
      year: "2024"
    },
    {
      title: "HOLY Ecosystem",
      category: "Faith-Based Digital Platform",
      tools: "Django, PostgreSQL, React Native",
      description: "Multi-platform ecosystem serving Christian communities",
      image: "/images/holy-ecosystem.png",
      tags: ["Django", "PostgreSQL", "Mobile", "Community"],
      featured: true,
      year: "2024"
    },
    {
      title: "Bible Quiz Web App",
      category: "Educational Platform",
      tools: "HTML, CSS, JavaScript, Django, MySQL",
      description: "Interactive web app for testing and improving biblical knowledge",
      image: "/images/bible-quiz.png",
      tags: ["JavaScript", "Django", "Education", "MySQL"],
      featured: false,
      year: "2023"
    },
    {
      title: "Church Platform",
      category: "Community Management",
      tools: "Next.js, PostgreSQL, Full-Stack Architecture",
      description: "Complete church platform with events, ministries, and admin dashboard",
      image: "/images/church-platform.png",
      tags: ["Next.js", "PostgreSQL", "Dashboard", "Community"],
      featured: true,
      year: "2024"
    },
    {
      title: "E-Commerce Website",
      category: "Online Shopping",
      tools: "React, Node.js, MongoDB",
      description: "Dynamic responsive e-commerce platform with modern UI",
      image: "/images/ecommerce.png",
      tags: ["React", "Node.js", "MongoDB", "E-commerce"],
      featured: false,
      year: "2023"
    },
    {
      title: "Bank Management System",
      category: "Financial Software",
      tools: "Java, OOP, Database Systems",
      description: "Object-oriented banking system simulation with account management",
      image: "/images/bank-system.png",
      tags: ["Java", "OOP", "Database", "Finance"],
      featured: false,
      year: "2022"
    }
  ];

  const filters = ["Tous", "Featured", "Next.js", "Django", "React", "Full-Stack", "Mobile", "E-commerce"];

  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : activeFilter === "Featured"
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.tags.includes(activeFilter));

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, filteredProjects.length]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, filteredProjects.length]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("work");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Réinitialiser l'index quand le filtre change ou quand les projets filtrés changent
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter, filteredProjects.length]);

  // Support clavier pour le carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  const currentProject = filteredProjects[currentIndex];

  if (!currentProject) return null;

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className={`work-title ${isVisible ? "visible" : ""}`}>
          Mes <span>Réalisations</span>
        </h2>

        <div className={`project-filters ${isVisible ? "visible" : ""}`} style={{animationDelay: "0.2s"}}>
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={`project-stats ${isVisible ? "visible" : ""}`} style={{animationDelay: "0.3s"}}>
          <div className="stat-item">
            <span className="stat-number">{filteredProjects.length}</span>
            <span className="stat-label">Projets</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{projects.filter(p => p.featured).length}</span>
            <span className="stat-label">Featured</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{[...new Set(projects.flatMap(p => p.tags))].length}</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>

        <div className={`carousel-wrapper ${isVisible ? "visible" : ""}`} style={{animationDelay: "0.4s"}}>
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            ←
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            →
          </button>

          {/* Carousel Container */}
          <div className="carousel-container">
            <div className="carousel-track">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
                >
                  <div className="carousel-content">
                    <div className="carousel-details">
                      <div className="project-header">
                        <h4 id={`project-title-${index}`}>{project.title}</h4>
                        {project.featured && <span className="featured-badge" aria-label="Projet en vedette">⭐ Featured</span>}
                      </div>
                      <p className="carousel-category" aria-label="Catégorie">{project.category}</p>
                      <p className="carousel-description" aria-label="Description">{project.description}</p>
                      
                      <div className="project-tags" role="list" aria-label="Technologies utilisées">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="project-tag" role="listitem">{tag}</span>
                        ))}
                      </div>

                      <div className="carousel-tools" aria-label="Stack technique">
                        <span className="tools-label">Stack Technique</span>
                        <p>{project.tools}</p>
                      </div>

                      <div className="project-meta">
                        <span className="project-year" aria-label="Année">{project.year}</span>
                        <button 
                          className="project-link"
                          onClick={() => handleProjectClick(project.title, project.description, project.tools)}
                          aria-label={`Voir le projet ${project.title}`}
                        >
                          Voir le projet <MdArrowOutward aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-image-wrapper">
                    <ProjectImage project={project} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
