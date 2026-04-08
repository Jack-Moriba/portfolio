import { useState, useEffect } from "react";
import {
  SiPython, SiDjango, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiTypescript, SiPostgresql, SiMongodb, SiDocker, SiGit, SiLinux,
  SiFigma, SiAdobeillustrator
} from "react-icons/si";
import { FaDatabase, FaServer, FaNetworkWired } from "react-icons/fa";
import "./styles/TechStack.css";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("techstack");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techCategories = [
    {
      title: "Backend",
      icon: <FaServer />,
      featured: true,
      technologies: [
        { name: "Python", icon: <SiPython />, level: 95, color: "#3776AB", desc: "Langage principal" },
        { name: "Django", icon: <SiDjango />, level: 90, color: "#092E20", desc: "Framework web" },
        { name: "Node.js", icon: <SiNodedotjs />, level: 75, color: "#339933", desc: "Runtime JS" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 85, color: "#336791", desc: "Base relationnelle" },
      ]
    },
    {
      title: "Frontend",
      icon: <SiReact />,
      technologies: [
        { name: "React", icon: <SiReact />, level: 88, color: "#61DAFB", desc: "Bibliothèque UI" },
        { name: "Next.js", icon: <SiNextdotjs />, level: 82, color: "#000000", desc: "Framework React" },
        { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "#3178C6", desc: "JS typé" },
        { name: "JavaScript", icon: <SiJavascript />, level: 90, color: "#F7DF1E", desc: "Langage web" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <SiDocker />,
      technologies: [
        { name: "Docker", icon: <SiDocker />, level: 70, color: "#2496ED", desc: "Conteneurisation" },
        { name: "Git", icon: <SiGit />, level: 85, color: "#F1502F", desc: "Version control" },
        { name: "Linux", icon: <SiLinux />, level: 78, color: "#FCC624", desc: "OS serveur" },
        { name: "MongoDB", icon: <SiMongodb />, level: 65, color: "#47A248", desc: "NoSQL DB" },
      ]
    },
    {
      title: "Design & More",
      icon: <SiFigma />,
      technologies: [
        { name: "Figma", icon: <SiFigma />, level: 88, color: "#F24E1E", desc: "Design UI/UX" },
        { name: "Adobe", icon: <SiAdobeillustrator />, level: 75, color: "#FF9A00", desc: "Illustration" },
        { name: "Database", icon: <FaDatabase />, level: 80, color: "#4FC3F7", desc: "SQL & NoSQL" },
        { name: "Network", icon: <FaNetworkWired />, level: 72, color: "#00BCD4", desc: "Réseaux" },
      ]
    },
    {
      title: "Cisco Networking",
      icon: <FaNetworkWired />,
      featured: true,
      technologies: [
        { name: "IT Essentials", icon: "🖥️", level: 95, color: "#1BA3CC", desc: "Hardware & Software" },
        { name: "CCNA 1", icon: "🌐", level: 88, color: "#049FD9", desc: "Network Fundamentals" },
        { name: "CCNA 2", icon: "🔧", level: 82, color: "#6CC04A", desc: "Switching & Routing" },
        { name: "Security", icon: "🔒", level: 75, color: "#FF6B6B", desc: "Network Security" },
      ]
    },
    {
      title: "Languages",
      icon: <SiPython />,
      technologies: [
        { name: "Python", icon: <SiPython />, level: 95, color: "#3776AB", desc: "Expert" },
        { name: "JavaScript", icon: <SiJavascript />, level: 90, color: "#F7DF1E", desc: "Avancé" },
        { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "#3178C6", desc: "Intermédiaire" },
        { name: "SQL", icon: <FaDatabase />, level: 85, color: "#336791", desc: "Avancé" },
      ]
    },
  ];

  const getProgressRing = (level: number, color: string) => {
    const radius = 45;
    const strokeWidth = 4;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (level / 100) * circumference;

    return (
      <svg height={radius * 2} width={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
        <circle
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: "stroke-dashoffset 0.8s ease" }}
          strokeLinecap="round"
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    );
  };

  return (
    <section className="techstack-modern" id="techstack">
      <div className="techstack-container">
        {/* Header */}
        <div className={`techstack-header ${isVisible ? "visible" : ""}`}>
          <h2 className="techstack-title">
            Tech <span className="gradient">Stack</span>
          </h2>
          <p className="techstack-subtitle">
            Technologies modernes et outils de développement que je maîtrise
          </p>
        </div>

        {/* Bento Grid */}
        <div className={`techstack-bento ${isVisible ? "visible" : ""}`}>
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bento-card ${category.featured ? "featured" : ""} ${hoveredCard === category.title ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredCard(category.title)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-header">
                <div className="card-icon">{category.icon}</div>
                <h3 className="card-title">{category.title}</h3>
              </div>

              <div className="tech-orbs-grid">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="tech-orb"
                    style={{ animationDelay: `${(index * 200) + (techIndex * 100)}ms` }}
                  >
                    <div className="orb-ring">{getProgressRing(tech.level, tech.color)}</div>
                    <div className="orb-content" style={{ color: tech.color }}>
                      {typeof tech.icon === "string" ? tech.icon : tech.icon}
                    </div>
                    <div className="orb-glow" style={{ background: tech.color }} />

                    <div className={`orb-info ${hoveredCard === category.title ? "visible" : ""}`}>
                      <span className="orb-name">{tech.name}</span>
                      <span className="orb-level">{tech.level}%</span>
                      <span className="orb-desc">{tech.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-footer">
                <span className="tech-count">{category.technologies.length} technologies</span>
                <span className="avg-level">
                  Moy: {Math.round(category.technologies.reduce((a, b) => a + b.level, 0) / category.technologies.length)}%
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
            <span className="summary-label">Moyenne</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
