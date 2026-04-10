import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

// NOTE: ScrollSmoother disabled - requires Club GreenSock plugin
gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  onOpenGuineaPay?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenGuineaPay }) => {
  useEffect(() => {
    // NOTE: ScrollSmoother disabled - requires Club GreenSock plugin
    // Using native smooth scroll instead
    
    const links = document.querySelectorAll(".header ul a");
    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const section = target.getAttribute("data-href");
        if (section) {
          const element = document.querySelector(section);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <>
      <nav className="header" role="navigation" aria-label="Navigation principale">
        <a href="/#" className="navbar-title" data-cursor="disable" aria-label="Retour à l'accueil">
          JMT
        </a>
        <a
          href="mailto:theajamesmoriba@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
          aria-label="Envoyer un email"
        >
          theajamesmoriba@gmail.com
        </a>
        <ul role="menubar" aria-label="Menu de navigation">
          <li role="none">
            <a data-href="#about" href="#about" role="menuitem" aria-label="Aller à la section À propos">
              <HoverLinks text="À PROPOS" />
            </a>
          </li>
          <li role="none">
            <a data-href="#work" href="#work" role="menuitem" aria-label="Aller à la section Réalisations">
              <HoverLinks text="RÉALISATIONS" />
            </a>
          </li>
          <li role="none">
            <a data-href="#contact" href="#contact" role="menuitem" aria-label="Aller à la section Contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="landing-circle1" aria-hidden="true"></div>
      <div className="landing-circle2" aria-hidden="true"></div>
      <div className="nav-fade" aria-hidden="true"></div>
      
      {/* GuineaPay Platform Access */}
      {onOpenGuineaPay && (
        <button 
          className="gp-access-btn"
          onClick={onOpenGuineaPay}
          aria-label="Access GuineaPay Platform"
          title="Open GuineaPay - Digital Payments Platform"
        >
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="url(#btn-grad)" />
            <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="btn-grad" x1="0" y1="0" x2="40" y2="40">
                <stop stopColor="#10b981" />
                <stop offset="1" stopColor="#047857" />
              </linearGradient>
            </defs>
          </svg>
          <span>GuineaPay</span>
        </button>
      )}
    </>
  );
};

export default Navbar;
