import { useState, useEffect } from "react";
import "./styles/TechStack.css";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const techCategories = [
    {
      title: "Languages",
      technologies: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 70 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      title: "Frontend",
      technologies: [
        { name: "Next.js", level: 85 },
        { name: "React", level: 80 },
        { name: "Bootstrap", level: 85 },
        { name: "CSS3", level: 90 },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Django", level: 90 },
        { name: "REST APIs", level: 85 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
      ],
    },
    {
      title: "Database",
      technologies: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Drizzle ORM", level: 75 },
        { name: "MongoDB", level: 60 },
      ],
    },
    {
      title: "Tools & Environment",
      technologies: [
        { name: "VS Code", level: 90 },
        { name: "Git", level: 85 },
        { name: "Linux", level: 75 },
        { name: "Docker", level: 70 },
      ],
    },
    {
      title: "Design",
      technologies: [
        { name: "Branding", level: 85 },
        { name: "UI/UX", level: 80 },
        { name: "Social Media", level: 90 },
        { name: "Communication", level: 85 },
      ],
    },
  ];

  return (
    <div className="techstack-section" id="techstack">
      <h2 className="techstack-title">Mes Compétences Techniques</h2>
      <p className="techstack-subtitle">
        Technologies avec lesquelles je travaille pour créer des solutions numériques impactantes
      </p>
      
      <div className={`techstack-grid ${isVisible ? "visible" : ""}`}>
        {techCategories.map((category, index) => (
          <div key={index} className="tech-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="technologies">
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="tech-item">
                  <div className="tech-info">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-level">{tech.level}%</span>
                  </div>
                  <div className="tech-bar">
                    <div 
                      className="tech-progress"
                      style={{ 
                        width: isVisible ? `${tech.level}%` : "0%",
                        transitionDelay: `${(index * 100) + (techIndex * 50)}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
