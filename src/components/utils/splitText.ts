import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  
  // NOTE: SplitText plugin temporarily disabled - requires Club GreenSock installation
  
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");
  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  
  titles.forEach((title) => {
    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: TriggerStart,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  paras.forEach((para) => {
    gsap.fromTo(
      para,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: para,
          start: TriggerStart,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}
