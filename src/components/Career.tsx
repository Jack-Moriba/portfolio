import { useState, useEffect } from "react";
import "./styles/Career.css";

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("career");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      period: "2024 - Présent",
      title: "Développeur Full Stack & Stagiaire Design",
      company: "Projets Personnels & Freelance",
      description: "Développement de plateformes web complètes (NOUS, HOLY, Bible Quiz, Church Platform) et création d'identités visuelles. Spécialisation en solutions numériques adaptées au contexte africain et communautés de foi.",
      skills: ["Next.js", "Django", "Python", "PostgreSQL", "Design Graphique", "React Native"]
    },
    {
      period: "2023 - Présent",
      title: "Étudiant en Ingénierie Logicielle",
      company: "Université Nongo Conakry (UNC)",
      description: "Formation approfondie en génie logiciel, architectures web, bases de données et cybersécurité. Projets académiques axés sur les applications réelles avec focus sur le développement full-stack.",
      skills: ["Software Engineering", "Java", "Algorithmes", "Bases de Données", "Cybersécurité"]
    },
    {
      period: "2020 - 2022",
      title: "Formation en Comptabilité",
      company: "Études de Gestion",
      description: "Formation en comptabilité et gestion, développant une pensée analytique rigoureuse et une compréhension des systèmes organisationnels que j'applique aujourd'hui dans l'architecture logicielle.",
      skills: ["Analyse Financière", "Gestion", "Logique", "Rigueur"]
    }
  ];

  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2 className={`career-title ${isVisible ? "visible" : ""}`}>
          Mon <span>Parcours</span>
        </h2>
        <p className="career-subtitle">
          Une formation continue et des expériences pratiques au service de l'innovation numérique
        </p>

        <div className="career-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`career-info-box ${isVisible ? "visible" : ""}`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.title}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{exp.period}</h3>
              </div>
              <div className="career-details">
                <p>{exp.description}</p>
                <div className="career-skills">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
