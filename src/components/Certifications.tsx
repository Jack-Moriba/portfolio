import { useState, useEffect } from "react";
import { FaCertificate, FaExternalLinkAlt, FaAward, FaCheckCircle } from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import "./styles/Certifications.css";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  verifyUrl?: string;
  skills: string[];
}

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCert, setActiveCert] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("certifications");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const certificates: Certificate[] = [
    {
      id: "cisco-ite",
      title: "Cisco IT Essentials",
      issuer: "Cisco Networking Academy",
      date: "2021",
      description: "Fondamentaux des systèmes informatiques, hardware, software et dépannage. Certification officielle Cisco reconnue mondialement.",
      icon: <SiCisco />,
      color: "#049fd9",
      verifyUrl: "#",
      skills: ["Hardware", "Software", "Dépannage", "Systèmes"]
    },
    {
      id: "cisco-ccna1",
      title: "Cisco CCNA 1",
      issuer: "Cisco Networking Academy",
      date: "2022",
      description: "Introduction aux réseaux, concepts fondamentaux de networking, modèle OSI, adressage IP et configuration de base.",
      icon: <SiCisco />,
      color: "#049fd9",
      verifyUrl: "#",
      skills: ["Réseaux", "TCP/IP", "OSI Model", "Configuration"]
    },
    {
      id: "cisco-ccna2",
      title: "Cisco CCNA 2",
      issuer: "Cisco Networking Academy",
      date: "2023",
      description: "Configuration avancée des routeurs et switchs, routage, VLANs, sécurité réseau et troubleshooting.",
      icon: <SiCisco />,
      color: "#049fd9",
      verifyUrl: "#",
      skills: ["Routage", "Switching", "VLANs", "Sécurité"]
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">
        {/* Header */}
        <div className={`certifications-header ${isVisible ? "visible" : ""}`}>
          <div className="section-badge">
            <FaAward />
            <span>Accomplissements</span>
          </div>
          <h2 className="certifications-title">
            Mes <span className="gradient">Certifications</span>
          </h2>
          <p className="certifications-subtitle">
            Certifications professionnelles validant mon expertise technique
          </p>
        </div>

        {/* Certificates Grid */}
        <div className={`certificates-grid ${isVisible ? "visible" : ""}`}>
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`certificate-card ${activeCert === cert.id ? "active" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setActiveCert(cert.id)}
              onMouseLeave={() => setActiveCert(null)}
            >
              {/* Card Glow */}
              <div 
                className="card-glow"
                style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}20, transparent 70%)` }}
              />

              {/* Header */}
              <div className="certificate-header">
                <div className="issuer-icon" style={{ color: cert.color }}>
                  {cert.icon}
                </div>
                <div className="issuer-info">
                  <span className="issuer-name">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="certificate-title">{cert.title}</h3>

              {/* Description */}
              <p className="certificate-description">{cert.description}</p>

              {/* Skills Tags */}
              <div className="cert-skills">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag" style={{ borderColor: cert.color }}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="certificate-footer">
                <div className="verified-badge">
                  <FaCheckCircle />
                  <span>Vérifié</span>
                </div>
                {cert.verifyUrl && (
                  <a 
                    href={cert.verifyUrl} 
                    className="verify-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    <span>Vérifier</span>
                  </a>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="cert-decoration">
                <FaCertificate />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`certifications-stats ${isVisible ? "visible" : ""}`}>
          <div className="stat-item">
            <span className="stat-value">3</span>
            <span className="stat-label">Certifications Cisco</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2021-23</span>
            <span className="stat-label">Période d'obtention</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Cisco</span>
            <span className="stat-label">Partenaire Académique</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
