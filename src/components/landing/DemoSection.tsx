import { useInView } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { useScrollTargetStore } from "../../stores/useScrollTargetStore";
import { cn } from "../../utils";

const DemoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3 // Trigger when 30% of the video is visible
  });

  // Play/pause video based on visibility
  if (isInView && videoRef.current?.paused) {
    videoRef.current.play();
  } else if (!isInView && videoRef.current && !videoRef.current.paused) {
    videoRef.current.pause();
  }

  const targetId = useScrollTargetStore((s) => s.targetId);
  const clearTargetId = useScrollTargetStore((s) => s.clearTargetId);

  const [scrollMarginActive, setScrollMarginActive] = useState(false);

  useLayoutEffect(() => {
    if (targetId === "demo-section") {
      setScrollMarginActive(true);
      requestAnimationFrame(() => {
        clearTargetId(); // clear before scroll to prevent sticky
      });

      // remove scroll margin after ~1.5s
      setTimeout(() => setScrollMarginActive(false), 1500);
    }
  }, [targetId, clearTargetId]);

  return (
    <section className="landing-container landing-section-padding-top">
      <h2 id="demo-section" className={cn("landing-section-heading", scrollMarginActive && "scroll-mt-[500px] md:scroll-mt-[300px] lg:scroll-mt-[500px]")}>Watch a demo of Horizon</h2>
      <p className="landing-section-description pb-10 md:pb-11 2xl:pb-[60px]">
        Watch a short demo of our beta product
      </p>

      <div
        ref={containerRef}
        className="relative w-full md:w-3/4 aspect-[16/9] rounded-2xl mx-auto overflow-hidden [contain:strict]"
      >
        <video
          ref={videoRef}
          src="/assets/videos/demo.webm"
          className="absolute inset-0 w-full rounded-2xl h-full object-cover 
    [transform:translateZ(0)] 
    [backface-visibility:hidden] 
    will-change-transform 
    [display:block]"
          style={{
            outline: "4px solid white",
            outlineOffset: "-2px",
          }}
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default DemoSection;
