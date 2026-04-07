import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { setSmoother } from "../context/SmootherContext";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    setSmoother(smoother);
    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const section = target.getAttribute("data-href");
        if (section) {
          smoother.scrollTo(section, true, "top top");
        }
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });
      window.removeEventListener("resize", handleResize);
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
    </>
  );
};

export default Navbar;
