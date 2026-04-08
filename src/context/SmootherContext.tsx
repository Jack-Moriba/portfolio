// NOTE: ScrollSmoother disabled - requires Club GreenSock Club plugin
// This file is kept for compatibility but ScrollSmoother functionality is disabled

export let smoother: null = null;

export const setSmoother = (instance: unknown) => {
  // No-op - ScrollSmoother not available in standard gsap package
  console.log("ScrollSmoother disabled - using native smooth scroll");
};

export const getSmoother = () => {
  return null;
};
