import { Link, useLocation } from "react-router";

const Header = () => {

  const location = useLocation();

  const getLinkClass = (href: string) => {
    const baseClass = "block rounded-full px-2 md:px-5 py-2 md:py-3 text-xs sm:text-sm font-medium transition-colors";
    const activeClass = "bg-[#0071E3] text-white";
    const inactiveClass = "text-[#15234E] hover:text-[#0071E3] hover:bg-gray-100";

    return `${baseClass} ${location.pathname === href ? activeClass : inactiveClass}`;
  };

  return (
    <>
      <div
        className="w-full"
        style={{ background: "linear-gradient(275deg, #F55507 4.07%, #E1709E 26.59%, #C87EFF 46.16%, #1C89F8 95.93%)" }}
      >
        <div className="container">
          <p className="text-white text-xs lg:text-base xl:text-lg text-center py-2 font-semibold">
            This site is a demo store created exclusively to showcase Horizon Shorts technology. No real products or transactions are available.
          </p>
        </div>
      </div>
      <nav className="container flex justify-between items-center py-11">
        <img src="/assets/images/nav-logo.png" alt="logo" className="h-10" />

        <div className="flex space-x-1 bg-white rounded-full"
          style={{
            boxShadow: "0px 0px 18px 0px rgba(157, 209, 255, 0.35)",
          }}
        >
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/product" className={getLinkClass("/product")}>
            Product
          </Link>
        </div>

        <div className="hidden md:flex">
          <img src="/assets/images/nav-icons.png" alt="icons" className="h-5" />
        </div>
      </nav>
    </>
  );
};

export default Header;