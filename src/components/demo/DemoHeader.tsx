import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import ResponsiveImage from "../ResponsiveImage";
import AnimatedCursor from "./AnimatedCursor";

const DemoHeader = () => {

  const [isShowCursor, setIsShowCursor] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/product") {
      setIsShowCursor(false);
    }
  }, [location.pathname]);

  const getLinkClass = (href: string) => {
    const baseClass = "block relative font-semibold rounded-full px-4 md:px-6 py-2 md:py-3 text-xs sm:text-sm md:text-base xl:text-lg font-medium transition-colors";
    const activeClass = "bg-[#0071E3] text-white";
    const inactiveClass = "text-[#15234E] hover:text-[#0071E3]";

    return `${baseClass} ${location.pathname === href ? activeClass : inactiveClass}`;
  };

  return (
    <>
      <div
        className="w-full"
        style={{ background: "linear-gradient(275deg, #F55507 4.07%, #E1709E 26.59%, #C87EFF 46.16%, #1C89F8 95.93%)" }}
      >
        <div className="">
          <div className="text-white text-xs lg:text-base xl:text-lg text-center py-2">
            <div className="overflow-hidden whitespace-nowrap md:hidden">
              <motion.p
                animate={{ x: ["100%", "-140%"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                This site is a demo store created exclusively to showcase Horizon Shorts technology. No real products or transactions are available.
              </motion.p>
            </div>

            <span className="hidden md:block">
              This site is a demo store created exclusively to showcase Horizon Shorts technology. No real products or transactions are available.
            </span>
          </div>
        </div>
      </div>
      <nav className="demo-container flex justify-between items-center py-8 md:py-11">
        <Link to="/" className="w-[109px] sm:w-[145px] lg:w-[185px] 2xl:w-[246px]">
          <ResponsiveImage
            img="nav-logo.webp"
            imgFolder="demo"
            className="w-full"
            alt="nav-logo"
          />
        </Link>

        <div className="flex bg-white rounded-full">
          <Link to="/" className={`${getLinkClass("/")}`}>
            Home
          </Link>

          <Link to="/product" className={`-ml-2 ${getLinkClass("/product")}`}>
            Product
            {isShowCursor && <AnimatedCursor />}
          </Link>
        </div>

        <div className="hidden md:flex md:w-[80px] lg:w-[112px] 2xl:w-[180px]">
          <ResponsiveImage
            img="nav-icons.webp"
            imgFolder="demo"
            className="w-full"
            alt="nav-icons"
          />
        </div>
      </nav>
    </>
  );
};

export default DemoHeader;