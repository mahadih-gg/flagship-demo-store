import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import GetAccessModal from "./GetAccessModal";

const steps = [
  {
    title: "Step 1 - Add your website / app",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
  },
  {
    title: "Step 2 - Upload some videos",
    description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
  },
  {
    title: "Step 3 - Create an entry point",
    description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
  },
  {
    title: "Step 4 - Place entry point on website / app",
    description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
  }
];

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [barStyle, setBarStyle] = useState({ top: 0, height: 0 });
  const [stepContainerHeight, setStepContainerHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLayoutEffect(() => {
    if (stepRefs.current[activeStep]) {
      const el = stepRefs.current[activeStep];
      const stepContainerHeight = stepContainerRef.current?.clientHeight || 0;
      setStepContainerHeight(stepContainerHeight);

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
  }, [activeStep]);

  return (
    <section className="landing-container-left pb-[60px] md:pb-[100px] lg:pb-[180px] xl:pb-[240px]">
      <h2 className="landing-section-heading pr-4 md:pr-5 lg:pr-0">
        When approved, start in 4 easy steps
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 md:gap-[60px] 3xl:gap-[80px] pt-10 md:pt-16 3xl:pt-[80px]">
        <div className="relative pr-4 md:pr-5 lg:pr-0 w-full lg:w-[44%]">
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
          <div className="pl-0 md:pl-8 mt-5 3xl:mt-10">
            <Button className="w-full" onClick={() => setIsModalOpen(true)}>
              Request Early Access
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-[56%] h-full overflow-hidden">
          <img src="/assets/images/landing/step-1.webp" alt="Steps" className="w-auto h-[350px] md:h-full object-cover object-left" />
        </div>
      </div>

      <GetAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
};

export default StepsSection; 