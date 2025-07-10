import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import HorizonLogoWhite from "../svg/HorizonLogoWhite";

const Footer = () => {
  return (
    <footer className="bg-[#1F2544] py-10 md:py-[80px]">
      <div className="landing-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-[#F8FAFF]">
          <div className="flex flex-col gap-[50px] md:gap-[72px]">
            <HorizonLogoWhite />
            <p className="text-sm 3xl:text-lg">
              © {new Date().getFullYear()} Horizon. All rights reserved by Flagship Technology Inc.
            </p>
          </div>
          <div className="flex gap-6 md:gap-8">
            <Link to="/" className="underline font-light text-sm md:text-base 3xl:text-lg">
              Privacy Policy
            </Link>
            <a href="https://www.linkedin.com/company/horizonera" target="_blank" className="text-white text-xl md:text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 