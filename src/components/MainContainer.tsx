import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import FuturisticFeatures from "./FuturisticFeatures";
import { ThemeProvider } from "../context/ThemeContext";
import setSplitText from "./utils/splitText";
import ErrorBoundary from "./ErrorBoundary";
import SkipLinks from "./SkipLinks";
import Toast from "./Toast";
import { Helmet } from "react-helmet-async";
import Lenis from "lenis";

// Lazy load heavy components
const TechStack = lazy(() => import("./TechStack"));
const Certifications = lazy(() => import("./Certifications"));
const CinematicIntro = lazy(() => import("./CinematicIntro"));
const EasterEggGame = lazy(() => import("./EasterEggGame"));

// NOUVEAUX: Composants modernes avec animations 3D
const CareerTimeline = lazy(() => import("./CareerTimeline"));
const ProjectsShowcase = lazy(() => import("./ProjectsShowcase"));
const ServicesGrid = lazy(() => import("./ServicesGrid"));
const TestimonialsCarousel = lazy(() => import("./TestimonialsCarousel"));
const MyDesigns = lazy(() => import("./MyDesigns"));

// OPTIONAL: 3D Tilt Components (décommentez pour activer)
// const About3DEnhanced = lazy(() => import("./About3DEnhanced"));
// const TiltCard3D = lazy(() => import("./TiltCard3D"));
// const ProfileCard3D = lazy(() => import("./ProfileCard3D"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Jacques Moriba Thea | Portfolio</title>
        <meta name="description" content="Portfolio de Jacques Moriba Thea, Développeur Full Stack et Designer Graphique basé en Guinée." />
        <meta property="og:title" content="Jacques Moriba Thea | Portfolio" />
        <meta property="og:description" content="Portfolio immersif mettant en avant mes compétences en React, Node.js, et design 3D." />
        <meta property="og:type" content="website" />
      </Helmet>
      <ErrorBoundary>
        <ThemeProvider>
        <SkipLinks />
        <Toast />
        <Suspense fallback={null}>
          <CinematicIntro />
        </Suspense>
        <div className="container-main" role="document">
          <Cursor />
          <header role="banner">
            <Navbar />
          </header>
          <SocialIcons />
          <FuturisticFeatures />
          <Suspense fallback={null}>
            <EasterEggGame />
          </Suspense>
          {isDesktopView && children}
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main className="container-main" id="main-content" role="main">
                <Landing>{!isDesktopView && children}</Landing>
                
                {/* 
                  OPTION: Composants 3D Enhanced
                  <Suspense fallback={<div>Loading...</div>}>
                    <About3DEnhanced />
                  </Suspense>
                */}
                <About />
                <WhatIDo />
                
                {/* 
                  NOUVEAU: CareerTimeline moderne avec animations scroll 3D
                  (remplace le composant Career existant)
                */}
                <Suspense fallback={<div role="status" aria-label="Chargement du parcours">Loading...</div>}>
                  <CareerTimeline />
                </Suspense>
                
                {/* Garder le Career original pour référence */}
                {/* <Career /> */}
                
                <Work />
                
                {/* 
                  NOUVEAU: ProjectsShowcase avec filtres et hover effects 3D
                */}
                <Suspense fallback={<div role="status" aria-label="Chargement des projets">Loading...</div>}>
                  <ProjectsShowcase />
                </Suspense>
                
                <Suspense fallback={<div role="status" aria-label="Chargement des certifications">Loading...</div>}>
                  <Certifications />
                </Suspense>
                
                {/* 
                  NOUVEAU: ServicesGrid avec animations 3D
                  (alternative au composant Services existant)
                */}
                <Suspense fallback={<div role="status" aria-label="Chargement des services">Loading...</div>}>
                  <ServicesGrid />
                </Suspense>
                
                {/* Garder Services original pour référence */}
                {/* <Services /> */}
                
                {/* 
                  NOUVEAU: TestimonialsCarousel 3D avec carousel
                  (alternative au composant Testimonials existant)
                */}
                <Suspense fallback={<div role="status" aria-label="Chargement des témoignages">Loading...</div>}>
                  <TestimonialsCarousel />
                </Suspense>
                
                {/* Garder Testimonials original pour référence */}
                {/* <Testimonials /> */}
                
                {isDesktopView && (
                  <Suspense fallback={<div role="status" aria-label="Chargement des technologies">Loading....</div>}>
                    <TechStack />
                  </Suspense>
                )}
                
                {/* 
                  NOUVEAU: MyDesigns - Galerie complète de designs
                  Section dédiée pour affiches, flyers et branding
                */}
                <Suspense fallback={<div role="status" aria-label="Chargement des designs">Loading...</div>}>
                  <MyDesigns />
                </Suspense>
                
                <Contact />
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
    </>
  );
};

export default MainContainer;
