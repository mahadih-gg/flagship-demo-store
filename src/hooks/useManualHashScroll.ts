// useScrollMarginHack.ts
import { useEffect, useRef } from "react";

export function useManualHashScroll() {
  const clickedOnceRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash.length < 2) return;

      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      const alreadyClicked = clickedOnceRef.current[id];

      const className = "scroll-mt-[500px] md:scroll-mt-[300px] lg:scroll-mt-[500px]";
      const classList = className.split(" ");

      if (!alreadyClicked) {
        // First click: Add scroll-mt utility class
        el.classList.add(...classList);
        clickedOnceRef.current[id] = true;

        // Auto-remove the class after scroll (in ~1s)
        setTimeout(() => {
          // el.classList.remove(...classList);
        }, 1500);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
