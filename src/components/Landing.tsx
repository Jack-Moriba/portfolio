import { PropsWithChildren, useState, useEffect } from "react";
import "./styles/Landing.css";

const roles = [
  "Développeur Full Stack",
  "Designer UI/UX", 
  "Cybersécurité",
  "Ingénieur Logiciel"
];

const Landing = ({ children }: PropsWithChildren) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== currentRole) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText !== "") {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Bonjour ! Je suis</h2>
            <h1>
              JACQUES
              <br />
              <span className="gradient-name">MORIBA THEA</span>
            </h1>
          </div>
          <div className="landing-info-modern">
            <div className="role-badge">
              <span className="status-dot"></span>
              Disponible pour projets
            </div>
            <h3 className="student-title">Étudiant en Ingénierie Logicielle</h3>
            <div className="typing-container">
              <span className="typing-text">{displayText}</span>
              <span className="typing-cursor">|</span>
            </div>
            <div className="skills-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">TypeScript</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
