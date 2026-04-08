import { useState, useEffect } from "react";
import { 
  SiPython, 
  SiJavascript, 
  SiJava, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiNextdotjs, 
  SiBootstrap,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiLinux
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaTools, FaPalette, FaCloud } from "react-icons/fa";
import "./styles/TechStack.css";

interface Tech {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  technologies: Tech[];
  featured?: boolean;
}

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("techstack");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories: Category[] = [
    {
      title: "Languages",
      icon: <FaCode />,
      technologies: [
        { name: "Python", level: 90, icon: <SiPython />, color: "#3776AB", description: "Backend, Data, Automation" },
        { name: "JavaScript", level: 85, icon: <SiJavascript />, color: "#F7DF1E", description: "Full Stack Development" },
        { name: "Java", level: 70, icon: <SiJava />, color: "#007396", description: "OOP & Enterprise Apps" },
        { name: "HTML5", level: 95, icon: <SiHtml5 />, color: "#E34F26", description: "Semantic Markup" },
        { name: "CSS3", level: 90, icon: <SiCss3 />, color: "#1572B6", description: "Modern Styling" },
      ],
      featured: true,
    },
    {
      title: "Frontend",
      icon: <FaPalette />,
      technologies: [
        { name: "React", level: 85, icon: <SiReact />, color: "#61DAFB", description: "Component Architecture" },
        { name: "Next.js", level: 80, icon: <SiNextdotjs />, color: "#000000", description: "Full Stack Framework" },
        { name: "Bootstrap", level: 75, icon: <SiBootstrap />, color: "#7952B3", description: "Responsive Design" },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      technologies: [
        { name: "Django", level: 85, icon: <SiDjango />, color: "#092E20", description: "Python Web Framework" },
        { name: "Node.js", level: 70, icon: <SiNodedotjs />, color: "#339933", description: "JavaScript Runtime" },
      ],
      featured: true,
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      technologies: [
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql />, color: "#4169E1", description: "Relational Database" },
        { name: "MySQL", level: 75, icon: <SiMysql />, color: "#4479A1", description: "Web Database" },
        { name: "MongoDB", level: 70, icon: <SiMongodb />, color: "#47A248", description: "NoSQL Database" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools />,
      technologies: [
        { name: "Git", level: 85, icon: <SiGit />, color: "#F05032", description: "Version Control" },
        { name: "Docker", level: 65, icon: <SiDocker />, color: "#2496ED", description: "Containerization" },
        { name: "Linux", level: 75, icon: <SiLinux />, color: "#FCC624", description: "Server Management" },
      ],
    },
    {
      title: "Cisco Networking",
      icon: <FaCloud />,
      technologies: [
        { name: "CCNA 1", level: 85, icon: <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>C1</span>, color: "#049fd9", description: "Network Fundamentals" },
        { name: "CCNA 2", level: 80, icon: <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>C2</span>, color: "#049fd9", description: "Routing & Switching" },
        { name: "IT Essentials", level: 90, icon: <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>ITE</span>, color: "#049fd9", description: "Hardware & Software" },
      ],
      featured: true,
    },
  ];

  const calculateCircumference = (radius: number) => 2 * Math.PI * radius;

  return (
    <section className="techstack-modern" id="techstack">
      <div className="techstack-container">
        {/* Header */}
        <div className={`techstack-header ${isVisible ? "visible" : ""}`}>
          <h2 className="techstack-title">
            Tech <span className="gradient">Stack</span>
          </h2>
          <p className="techstack-subtitle">
            Technologies modernes et certifiées pour des solutions performantes
          </p>
        </div>

        {/* Bento Grid */}
        <div className={`techstack-bento ${isVisible ? "visible" : ""}`}>
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`bento-card ${category.featured ? "featured" : ""} ${hoveredCard === category.title ? "hovered" : ""}`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(category.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="card-header">
                <div className="card-icon" style={{ color: "#5eead4" }}>
                  {category.icon}
                </div>
                <h3 className="card-title">{category.title}</h3>
              </div>

              {/* Tech Orbs Grid */}
              <div className="tech-orbs-grid" style={{ gridTemplateColumns: `repeat(${Math.min(category.technologies.length, 3)}, 1fr)` }}>
                {category.technologies.map((tech, techIndex) => {
                  const radius = 40;
                  const circumference = calculateCircumference(radius);
                  const offset = circumference - (tech.level / 100) * circumference;

                  return (
                    <div
                      key={tech.name}
                      className={`tech-orb ${activeTech === tech.name ? "active" : ""}`}
                      style={{ animationDelay: `${(catIndex * 0.1) + (techIndex * 0.05)}s` }}
                      onMouseEnter={() => setActiveTech(tech.name)}
                      onMouseLeave={() => setActiveTech(null)}
                      onClick={() => setActiveTech(activeTech === tech.name ? null : tech.name)}
                    >
                      {/* Progress Ring */}
                      <div className="orb-ring">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          {/* Background Circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="6"
                          />
                          {/* Progress Circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke={tech.color}
                            strokeWidth="6"
                            strokeLinecap="round"
                            className="progress-ring"
                            style={{
                              strokeDasharray: circumference,
                              strokeDashoffset: offset,
                              filter: `drop-shadow(0 0 8px ${tech.color})`,
                            }}
                          />
                        </svg>
                      </div>

                      {/* Icon */}
                      <div
                        className="orb-content"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>

                      {/* Glow Effect */}
                      <div
                        className="orb-glow"
                        style={{
                          background: `radial-gradient(circle, ${tech.color}40, transparent 70%)`,
                          opacity: activeTech === tech.name ? 0.6 : 0,
                        }}
                      />

                      {/* Info Popup */}
                      <div className={`orb-info ${activeTech === tech.name ? "visible" : ""}`}>
                        <span className="orb-name">{tech.name}</span>
                        <span className="orb-level">{tech.level}%</span>
                        <span className="orb-desc">{tech.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <span className="tech-count">{category.technologies.length} technologies</span>
                <span className="avg-level">
                  {Math.round(category.technologies.reduce((acc, t) => acc + t.level, 0) / category.technologies.length)}% avg
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`techstack-summary ${isVisible ? "visible" : ""}`}>
          <div className="summary-item">
            <span className="summary-number">24+</span>
            <span className="summary-label">Technologies</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">6</span>
            <span className="summary-label">Domaines</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">85%</span>
            <span className="summary-label">Niveau Moyen</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
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
