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
    <section className="landing-container-left flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14 pt-[60px] md:pt-[90px] 3xl:pt-[120px]">
      {/* Left: Hero Text and List */}
      <div className="lg:w-[56%]">
        <h1
          className="text-[#1F2544] font-helvetica-neue font-medium text-[48px] md:text-[48px] xl:text-[60px] 3xl:text-[80px] leading-[46px] md:leading-[70px] 3xl:leading-[92px] tracking-[-0.8px] xl:tracking-[-1.6px]"
        >
          Launch short-form videos<br />on your online store
        </h1>
        <ul className="mt-10 space-y-2 3xl:space-y-[18px]">
          {heroList.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center text-[#475467] font-helvetica-neue text-base md:text-lg 3xl:text-2xl leading-[24px] md:leading-[44px] 3xl:leading-[50px]"
            >
              <span className="mr-3"><BlueCheckIcon /></span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center py-10 md:py-8 3xl:py-10 gap-6 3xl:gap-8">
          <Button onClick={() => setIsModalOpen(true)}>Request Early Access</Button>
          <Button
            variant="ghost"
            link="#demo-section"
            icon={<span className='text-2xl 3xl:text-[32px]'><PlayIcon /></span>}
          >
            Watch demo
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-8 3xl:gap-11">
          {featureList.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 3xl:gap-3">
              <GreenCheckIcon />
              <span className="text-[#475467] text-base 3xl:text-xl font-helvetica-neue">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className="relative lg:w-[48%]">
        <img
          src="/assets/images/landing/hero.webp"
          alt="Landing Hero"
          className="w-full h-auto"
        />
        <div className="absolute -bottom-6 3xl:-bottom-8 md:-left-[100px] 3xl:-left-[134px]">
          <img src="/assets/images/landing/hero-short.webp" alt="Landing Hero" className="w-[202px] 3xl:w-[270px] h-auto" />
        </div>
      </div>


      <GetAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
};

export default HeroSection; 