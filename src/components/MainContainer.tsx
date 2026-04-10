import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
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
const Services = lazy(() => import("./Services"));
const Testimonials = lazy(() => import("./Testimonials"));
const Certifications = lazy(() => import("./Certifications"));
const CinematicIntro = lazy(() => import("./CinematicIntro"));
const AnalyticsDashboard = lazy(() => import("./AnalyticsDashboard"));
const EasterEggGame = lazy(() => import("./EasterEggGame"));

interface MainContainerProps extends PropsWithChildren {
  onOpenGuineaPay?: () => void;
}

const MainContainer = ({ children, onOpenGuineaPay }: MainContainerProps) => {
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
            <Navbar onOpenGuineaPay={onOpenGuineaPay} />
          </header>
          <SocialIcons />
          <FuturisticFeatures />
          <Suspense fallback={null}>
            <AnalyticsDashboard />
            <EasterEggGame />
          </Suspense>
          {isDesktopView && children}
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main className="container-main" id="main-content" role="main">
                <Landing>{!isDesktopView && children}</Landing>
                <About />
                <WhatIDo />
                <Career />
                <Work />
                <Suspense fallback={<div role="status" aria-label="Chargement des certifications">Loading...</div>}>
                  <Certifications />
                </Suspense>
                <Suspense fallback={<div role="status" aria-label="Chargement des services">Loading...</div>}>
                  <Services />
                </Suspense>
                <Suspense fallback={<div role="status" aria-label="Chargement des témoignages">Loading...</div>}>
                  <Testimonials />
                </Suspense>
                {isDesktopView && (
                  <Suspense fallback={<div role="status" aria-label="Chargement des technologies">Loading....</div>}>
                    <TechStack />
                  </Suspense>
                )}
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
