// NOTE: ScrollSmoother disabled - requires Club GreenSock Club plugin
// This file is kept for compatibility but ScrollSmoother functionality is disabled

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const smoother: any = null;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const setSmoother = (_instance: unknown) => {
  // No-op - ScrollSmoother not available in standard gsap package
  console.log("ScrollSmoother disabled - using native smooth scroll");
};

export const getSmoother = () => {
  return null;
};
