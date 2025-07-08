import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import { FiChevronRight } from "react-icons/fi";
import BlueTopBar from "../../components/BlueTopBar";
import ResponsiveImage from "../../components/ResponsiveImage";
import LeftIcon from "../../components/svg/LeftIcon";
import RightIcon from "../../components/svg/RightIcon";

const TelcoHome = () => {

  const navData = [
    "Wireless",
    "Business",
    "Prepaid",
    "Internet"
  ]
  return (
    <main className="telco-wrapper">
      <header>
        <BlueTopBar containerClass="telco-container" />
        <div className="bg-[#EDEDED] h-7">
          <ul className="telco-container flex items-center justify-center lg:justify-start gap-0 2xl:gap-2">
            {
              navData.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-[#72788C] p-2 text-[10px] sm:text-xs uppercase font-bold">
                    {item}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

        <nav className="bg-[#FAFAFA]">
          <div className="telco-container py-[6px] md:py-0">
            <ResponsiveImage
              img="1.webp"
              imgFolder="telco"
              alt="Telco Nav"
            />
          </div>
        </nav>
      </header>

      <section className="telco-container pt-10 md:pt-8 2xl:pt-10">
        <h1 className="text-center text-2xl sm:text-xl lg:text-2xl 2xl:text-[34px] font-bold pb-5 md:pb-2 lg:pb-3 2xl:pb-4">Upgrade Your Phone - Sale On All Handsets!</h1>
        <p className="text-center text-sm sm:text-xs lg:text-sm 2xl:text-xs">
          Enjoy limited-time discounts on every model - shop now for free shipping and instant activation.
        </p>

        <EntryPoint
          id="#759348"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.STANDARD}
        />
      </section>

      <section className="telco-container lg:pt-6 2xl:pt-10 telco-section-padding-bottom">
        <ResponsiveImage
          img="2.webp"
          imgFolder="telco"
          alt="Telco Banner"
        />
      </section>

      <section className="telco-container">
        <h2 className="telco-section-heading pb-10 sm:pb-[30px] lg:pb-[45px] 2xl:pb-[60px]">
          Discover our top deals for you
        </h2>
        <EntryPoint
          id="#056779"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.STANDARD}
        />
      </section>

      <section className="telco-container telco-section-padding">
        <h2 className="telco-section-heading text-center pb-[18px] 2xl:pb-6">
          Compare our most <br className="block sm:hidden" /> popular plans
        </h2>

        <ResponsiveImage
          img="3.webp"
          imgFolder="telco"
          alt="Telco plans"
        />
      </section>

      <section className="telco-container">
        <h2 className="telco-section-heading text-center pb-14 sm:pb-[30px] lg:pb-[60px] 2xl:pb-20">
          Unlock massive savings on the iPhone 16 - only at Digitel Store
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:flex gap-[60px] sm:gap-10 lg:gap-12 2xl:gap-16">

          <div className="w-full 2xl:w-[51.81%]">
            <ResponsiveImage
              img="4.webp"
              imgFolder="telco"
              alt="Telco iPhone"
            />
            <div>
              <h3 className="text-xl md:text-2xl xl:text-xl 2xl:text-2xl text-[#1D1D1F] font-bold pt-6">
                User Stories
              </h3>
              <EntryPoint
                id="#842010"
                skeletonType={EntryPointType.CIRCLE}
                skeletonSize={EntryPointSize.STANDARD}
              />
              <div className="pt-4 lg:pt-8 2xl:pt-0">
                <div className="flex justify-start items-center pb-6 2xl:pb-[32px] gap-3 2xl:gap-4">
                  <h3 className="text-xl lg:text-2xl text-[#15234E] font-bold">Learn More About this Device</h3>
                  <span className="lg:text-2xl pt-2">
                    <FiChevronRight strokeWidth="2.4" />
                  </span>
                </div>
                <p className="text-xs 2xl:text-sm text-[#72788C] font-normal pb-4 2xl:pb-5">Monthly payments shown are for customers who qualify to pay $0 Down, $0.00/mo for 36 months after bill credit, was $23.05/mo: 0% APR. Retail price: $829.99. Applicable on any Unlimited phone plan. <span className="inline md:hidden font-bold">Read More</span></p>

                <p className="hidden md:block text-xs 2xl:text-sm text-[#72788C] font-normal">Bill credits applied evenly over 36 billing cycles - early termination or plan change forfeits remaining credits. Taxes, surcharges and device protection fees extra; limited-time offer.</p>
              </div>
            </div>
          </div>

          <div className="w-full 2xl:w-[44.25%]">
            <ResponsiveImage
              img="5.webp"
              imgFolder="telco"
              alt="Telco iPhone"
            />
          </div>
        </div>
      </section>

      <section className="telco-container telco-section-padding-top pb-[40px] md:pb-[50px] lg:pb-[75px] xl:pb-[105px]">
        <h2 className="telco-section-heading text-center pb-10 sm:pb-[30px] lg:pb-[45px] 2xl:pb-[60px]">
          Recommended Just <br className="block sm:hidden" /> for You
        </h2>

        <EntryPoint
          id="#473811"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="telco-container">
        <h2 className="telco-section-heading text-center pb-5 sm:pb-4 lg:pb-[30px] 2xl:pb-10 relative">
          Great benefits from the brands <br className="block sm:hidden" /> you love.

          <div className="hidden lg:flex absolute top-1 right-0 items-center justify-center gap-3 2xl:gap-4">
            <LeftIcon />
            <RightIcon />
          </div>
        </h2>


        <ResponsiveImage
          img="6.webp"
          imgFolder="telco"
          alt="Telco brands"
        />
      </section>

      <section className="telco-container telco-section-padding-top pb-[40px] md:pb-[50px] lg:pb-[75px] xl:pb-[105px]">
        <h2 className="telco-section-heading text-center pb-10 sm:pb-[30px] lg:pb-[45px] 2xl:pb-[60px]">
          Experience our next-gen IoT innovation
        </h2>

        <EntryPoint
          id="#252249"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="telco-container telco-section-padding-bottom">
        <ResponsiveImage
          img="7.webp"
          imgFolder="telco"
          alt="Telco phones"
        />
      </section>

      <footer className="bg-[#15234E] pt-5 md:pt-[18px] 2xl:pt-6 pb-[100px] md:pb-[60px] 2xl:pb-20">
        <div className="telco-container">
          <ResponsiveImage
            img="8.webp"
            imgFolder="telco"
            alt="Telco footer"
          />
        </div>
      </footer>
    </main>
  );
};

export default TelcoHome;