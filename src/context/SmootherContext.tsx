import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

export let smoother: ScrollSmoother | null = null;

export const setSmoother = (instance: ScrollSmoother) => {
  smoother = instance;
};

export const getSmoother = () => smoother;
