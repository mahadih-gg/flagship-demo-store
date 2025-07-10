import { useInView } from "framer-motion";
import { useRef } from "react";

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

  return (
    <section className="landing-container landing-section-padding-top">
      <h2 id="demo-section" className="landing-section-heading">Watch a demo of Horizon</h2>
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
          className="w-full h-full object-cover scale-[1.001] [transform:translateZ(0)] [backface-visibility:hidden] will-change-transform"
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default DemoSection;
