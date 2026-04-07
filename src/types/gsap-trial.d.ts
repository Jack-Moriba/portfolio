declare module "gsap-trial/SplitText" {
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
