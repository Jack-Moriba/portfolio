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

// Lazy load heavy components
const TechStack = lazy(() => import("./TechStack"));
const Services = lazy(() => import("./Services"));
const Testimonials = lazy(() => import("./Testimonials"));
const Certifications = lazy(() => import("./Certifications"));
const CinematicIntro = lazy(() => import("./CinematicIntro"));
const AnalyticsDashboard = lazy(() => import("./AnalyticsDashboard"));
const EasterEggGame = lazy(() => import("./EasterEggGame"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
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
  );
};

export default MainContainer;
