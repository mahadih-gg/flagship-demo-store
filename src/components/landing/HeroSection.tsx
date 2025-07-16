import { useState } from "react";
import BlueCheckIcon from "../svg/BlueCheckIcon";
import GreenCheckIcon from "../svg/GreenCheckIcon";
import PlayIcon from "../svg/play.icon";
import Button from "../ui/Button";
import GetAccessModal from "./GetAccessModal";

const heroList = [
  "The best short-form video experience for web and mobile",
  "All-in-one platform with video streaming, monetization, and AI",
  "The most powerful no-code control center to manage everything",
  "Built-in analytics, team collaboration, and workspaces",
  "Works on any website, PWA, Android, or iOS app",
];

const featureList = [
  "30-day free trial",
  "All feature access",
  "No credit card required",
];

const HeroSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="landing-container-left flex flex-col lg:flex-row items-start justify-between pt-[60px] md:pt-[90px] 3xl:pt-[120px] overflow-visible">
      {/* Left: Hero Text and List */}
      <div className="w-full lg:w-[57%] xl:w-[58%] 2xl:w-[56%] -ml-0.5 pt-4">
        <h1
          className="text-[#1F2544] font-helvetica-neue font-medium pr-4 md:pr-5 lg:pr-0 text-[44px] md:text-[48px] xl:text-[60px] 3xl:text-[80px] leading-[56px] md:leading-[60px] xl:leading-[70px] 3xl:leading-[92px] tracking-[-0.8px] xl:tracking-[-1.6px]"
        >
          Launch <br className="block sm:hidden" /> short-form videos <br /> on your <br className="block sm:hidden" /> online store
        </h1>

        <img
          src="/assets/images/landing/hero-short-lg.webp"
          alt="Landing Hero"
          className="block lg:hidden pt-9 w-[calc(100%+100px)] sm:w-auto h-[410px] sm:h-auto pr-0 sm:pr-4 md:pr-5 lg:pr-0 object-cover object-left"
        />

        <ul className="mt-10 md:mt-11 space-y-2 3xl:space-y-[18px] pr-4 md:pr-5 lg:pr-0">
          {heroList.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start sm:items-center text-[#475467] font-helvetica-neue text-base md:text-lg 3xl:text-2xl leading-[24px] md:leading-[32px] 3xl:leading-[30px]"
            >
              <span className="mr-2 2xl:mr-3"><BlueCheckIcon /></span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center py-10 md:py-8 3xl:py-12 gap-2 md:gap-0 pr-4 md:pr-5 lg:pr-0">
          <Button onClick={() => setIsModalOpen(true)}>Request Early Access</Button>
          <Button
            variant="ghost"
            link="#demo-section"
            icon={<span className='text-2xl 3xl:text-[32px]'><PlayIcon /></span>}
          >
            Watch demo
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-3 xl:gap-8 3xl:gap-11">
          {featureList.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 3xl:gap-3">
              <GreenCheckIcon />
              <span className="text-[#475467] text-base 3xl:text-xl font-helvetica-neue">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className="hidden lg:block flex-1 w-full lg:w-[40%] xl:w-[50%] 3xl:w-[48%] -ml-[00px] xl:-ml-[109px] 2xl:-ml-[137px] z-10">
        <img
          src="/assets/images/landing/hero.webp"
          alt="Landing Hero"
          className="w-auto h-[560px] 3xl:h-[746px] object-cover object-left"
        />
      </div>


      <GetAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
};

export default HeroSection; 