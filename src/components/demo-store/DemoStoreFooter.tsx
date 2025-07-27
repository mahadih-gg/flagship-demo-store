import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router";
import HorizonLogoWhite from "../svg/HorizonLogoWhite";

const DemoStoreFooter = () => {
  return (
    <>
      <div className="demo-store-container flex flex-col gap-12 xs-sm:gap-14 lg:gap-12 2xl:gap-14 3xl:gap-[72px]">
        <div className="flex justify-center md:justify-start items-center">
          <Link to="/">
            <HorizonLogoWhite className="w-[170px] lg:w-[116px] 2xl:w-[130px] 3xl:w-[170px] h-auto" />
          </Link>
        </div>

        <div className="text-lg flex flex-col font-normal lg:items-center gap-11 md:gap-12 lg:flex-row lg:justify-between">
          <p className="text-[#B8C1CB] text-base sm:text-lg xl:text-base 3xl:text-lg">© 2025 Horizon. All rights reserved by Flagship Technology Inc.</p>
          <div className="mt-2 flex justify-start items-center gap-6 xs-sm:gap-7 md:gap-8 max-md:w-fit">
            <Link
              to="https://horizonexp.com/privacy"
              target="_blank"
              className="underline underline-offset-4 hover:underline-offset-8 transition-all order-2 md:order-1 text-[#B8C1CB] hover:text-white"
            >
              Privacy Policy
            </Link>
            {/* <Link
              to="/terms-of-service"
              target="_blank"
              className="underline underline-offset-4 hover:underline-offset-8 transition-all max-md:order-3"
            >
              Terms of Service
            </Link> */}
            <Link
              to="https://www.linkedin.com/company/horizonera"
              target="_blank"
              rel="noopener noreferrer"
              className="order-1 md:order-2 text-[#B8C1CB] hover:text-white transition-all"
            >
              <BsLinkedin className="inline-block text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoStoreFooter;
