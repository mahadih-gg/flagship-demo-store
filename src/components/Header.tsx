import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import AnimatedCursor from "./AnimatedCursor";

const Header = () => {

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
        <div className="container">
          <p className="text-white text-xs lg:text-base xl:text-lg text-center py-2">
            This site is a demo store created exclusively to showcase Horizon Shorts technology. No real products or transactions are available.
          </p>
        </div>
      </div>
      <nav className="container flex justify-between items-center py-11">
        <img src="/assets/images/nav-logo.webp" alt="logo" className="h-10" />

        <div className="flex space-x-1 bg-white rounded-full">
          <Link to="/" className={`${getLinkClass("/")}`}>
            Home
          </Link>

          <Link to="/product" className={`${getLinkClass("/product")}`}>
            Product
            {isShowCursor && <AnimatedCursor />}
          </Link>
        </div>

        <div className="hidden md:flex">
          <img src="/assets/images/nav-icons.webp" alt="icons" className="h-5" />
        </div>
      </nav>
    </>
  );
};

export default Header;