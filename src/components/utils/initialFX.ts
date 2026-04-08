import gsap from "gsap";
import { smoother } from "../../context/SmootherContext";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // NOTE: SplitText animations replaced with standard GSAP
  const landingElements = document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1");
  gsap.fromTo(
    landingElements,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const landingH2 = document.querySelector(".landing-h2-info");
  if (landingH2) {
    gsap.fromTo(
      landingH2,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.5,
      }
    );
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // NOTE: SplitText animations disabled - using standard GSAP animations only
  gsap.fromTo(
    ".landing-h2-info-1",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      y: 0,
      delay: 1,
    }
  );

  gsap.fromTo(
    ".landing-h2-1",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      y: 0,
      delay: 1.2,
    }
  );

  gsap.fromTo(
    ".landing-h2-2",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      y: 0,
      delay: 1.4,
    }
  );
}
