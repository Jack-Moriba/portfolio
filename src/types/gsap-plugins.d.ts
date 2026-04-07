declare module "gsap/SplitText" {
  interface SplitTextOptions {
    type?: string;
    linesClass?: string;
    charsClass?: string;
    wordsClass?: string;
  }

  class SplitText {
    constructor(element: string | HTMLElement | Element[], options?: SplitTextOptions);
    chars: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    revert(): void;
  }
  
  export default SplitText;
}

declare module "gsap/ScrollSmoother" {
  interface ScrollSmootherConfig {
    wrapper?: string | HTMLElement;
    content?: string | HTMLElement;
    smooth?: number;
    smoothTouch?: number | false;
    normalizeScroll?: boolean;
    ignoreMobileResize?: boolean;
    effects?: boolean;
    onUpdate?: (self: ScrollSmoother) => void;
  }

  class ScrollSmoother {
    constructor(config?: ScrollSmootherConfig);
    scrollTo(target: string | number | HTMLElement, smooth?: boolean): void;
    paused(state: boolean): void;
    kill(): void;
    effects(elements: string | HTMLElement[], config?: object): void;
    content(): HTMLElement;
    wrapper(): HTMLElement;
    scrollTrigger: import("gsap/ScrollTrigger").ScrollTrigger;
    progress: number;
    
    static create(config: ScrollSmootherConfig): ScrollSmoother;
    static get(): ScrollSmoother | undefined;
  }
  
  export { ScrollSmoother };
}
