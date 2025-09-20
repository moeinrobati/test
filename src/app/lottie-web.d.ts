// src/types/lottie-web.d.ts
declare module "lottie-web" {
  export interface AnimationItem {
    play(): void;
    stop(): void;
    goToAndStop(frame: number, isFrame?: boolean): void;
    goToAndPlay(frame: number, isFrame?: boolean): void;
    destroy(): void;
    addEventListener(eventName: string, callback: () => void): void;
    [key: string]: any;
  }

  const Lottie: {
    loadAnimation(options: {
      container: Element;
      renderer: string;
      loop?: boolean;
      autoplay?: boolean;
      path: string;
    }): AnimationItem;
  };

  export default Lottie;
}
