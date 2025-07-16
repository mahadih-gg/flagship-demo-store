import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../ui/Button";
import GetAccessModal from "./GetAccessModal";

const steps = [
  {
    title: "Step 1 - Add your website / app",
    description: "Login into Horizon Console, add your platform and get your license token. You can get your token from the Apps & Websites section."
  },
  {
    title: "Step 2 - Upload some videos",
    description: "Upload high quality short-form videos in any aspect ratio and format. For the most immersive experience, we recommend using a 9:16 vertical format."
  },
  {
    title: "Step 3 - Create an entry point",
    description: "Choose the shape and size that blends perfectly into your platform design and select the AI recommendation logic that best suits your needs."
  },
  {
    title: "Step 4 - Place entry point on website / app",
    description: "Copy the code snippet and follow our guide to place entry points right where you want them. No manual setup required once configured."
  }
];

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [barStyle, setBarStyle] = useState({ top: 0, height: 0 });
  const [stepContainerHeight, setStepContainerHeight] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useWindowSize();
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (stepRefs.current[activeStep]) {
      const el = stepRefs.current[activeStep];
      const stepContainerHeight = stepContainerRef.current?.clientHeight || 0;
      setStepContainerHeight(stepContainerHeight);
      const buttonHeight = buttonRef.current?.clientHeight || 0;
      setButtonHeight(buttonHeight);
      const parent = stepRefs.current[0]?.parentElement;
      if (el && parent) {
        const parentRect = parent.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        setBarStyle({
          top: elRect.top - parentRect.top,
          height: elRect.height,
        });
      }
    }
  }, [activeStep, width]);

  return (
    <section className="landing-container-left pb-[60px] md:pb-[100px] lg:pb-[180px] xl:pb-[240px]">
      <h2 className="landing-section-heading pr-4 md:pr-5 lg:pr-0">
        When approved, start in 4 easy steps
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 md:gap-[60px] 3xl:gap-[80px] pt-10 md:pt-16 3xl:pt-[80px]">
        <div className="w-full lg:w-[46%] relative pr-4 md:pr-5 lg:pr-0">
          {/* Step Indicator Bar */}
          <div className="absolute -left-2 md:left-0 top-0 h-full flex flex-col items-center" style={{ width: 24, height: stepContainerHeight }}>
            {/* Bar background */}
            <div className="relative h-full w-[3px] md:w-1 bg-[#F5F7FB] rounded">
              {/* Animated active bar */}
              <motion.div
                className="absolute left-0 w-[3px] md:w-1 bg-[#0066FF] rounded"
                initial={false}
                animate={{
                  top: barStyle.top,
                  height: barStyle.height,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </div>
          </div>
          {/* Steps */}
          <div ref={stepContainerRef} className="pl-6 md:pl-8 3xl:pl-11 flex flex-col">
            {steps.map((step, idx) => (
              <div
                key={idx}
                ref={(el) => { stepRefs.current[idx] = el; }}
                className={`py-[18px] 3xl:py-6 cursor-pointer`}
                onClick={() => setActiveStep(idx)}
              >
                <h3 className="text-lg 3xl:text-2xl font-medium text-[#1F2544] mb-[6px] 3xl:mb-2">{step.title}</h3>
                <p className="text-base 3xl:text-xl leading-[24px] 3xl:leading-[32px] text-[#475467]">{step.description}</p>
              </div>
            ))}
          </div>
          <div ref={buttonRef} className="pl-0 md:pl-8 pt-5 3xl:pt-10">
            <Button className="w-full" onClick={() => setIsModalOpen(true)}>
              Request Early Access
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-[56%] h-full overflow-hidden">
          <img
            src="/assets/images/landing/step-1.webp"
            alt="Steps"
            className="w-auto h-full object-cover object-left"
            style={width > 1024 ? { height: `${stepContainerHeight + buttonHeight}px` } : {}}
          />
        </div>
      </div>

      <GetAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
};

export default StepsSection; 