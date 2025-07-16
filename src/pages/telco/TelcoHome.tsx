import { EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";
import BlueTopBar from "../../components/BlueTopBar";
import EntryPointWrapper from "../../components/EntryPointWrapper";
import FlagshipWrapper from "../../components/FlagshipWrapper";
import ResponsiveImage from "../../components/ResponsiveImage";
import LeftIcon from "../../components/svg/LeftIcon";
import RightIcon from "../../components/svg/RightIcon";
import { Marquee } from "../../components/ui/Marquee";

const TelcoHome = () => {
  const marqueeTexts = [
    "This is a demo of Horizon VIDEO SaaS platform",
    "━",
    "Content used is for demo purposes only",
    "━",
    "All copyrights belong to their respective brands",
    "━",
    "Ecommerce features are for demonstration purposes only",
    "━",
  ];

  return (
    <FlagshipWrapper tenant="telco">
      <main className="telco-wrapper">
        <header>
          <BlueTopBar containerClass="telco-container">
            Powered by Horizon • {" "}
            <Link
              to="https://www.horizonexp.com/get-demo/"
              className="underline"
            >
              Request Free Trial
            </Link>
          </BlueTopBar>
          <Marquee
            className="text-[#98A1BC] text-xs uppercase"
            pauseOnHover={true}
          >
            {
              marqueeTexts.map((text, index) => (
                <span key={index}>{text}</span>
              ))
            }
          </Marquee>
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

        <section className="telco-container pt-10 sm:pt-[30px] 2xl:pt-10">
          <h1 className="text-center text-2xl sm:text-xl lg:text-2xl 2xl:text-[34px] font-bold mb-10 sm:mb-[30px] lg:mb-[45px] 2xl:mb-[60px]">Upgrade Your Phone - Sale On <br className="block sm:hidden" /> All Handsets!</h1>
          <EntryPointWrapper
            id="#759348"
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="telco-container telco-section-padding-bottom pt-10 sm:pt-[30px] 2xl:pt-10">
          <ResponsiveImage
            img="2.webp"
            imgFolder="telco"
            alt="Telco Banner"
          />
        </section>

        <section className="telco-container">
          <h2 className="telco-section-heading pb-8 lg:pb-[45px] 2xl:pb-[60px]">
            Discover our top deals for you
          </h2>
          <EntryPointWrapper
            id="#056779"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="telco-container telco-section-padding">
          <h2 className="telco-section-heading text-center mb-10 sm:mb-[30px] lg:mb-[45px] 2xl:mb-[60px]">
            Compare our most popular plans
          </h2>
          <ResponsiveImage
            img="3.webp"
            imgFolder="telco"
            alt="Telco plans"
          />
        </section>

        <section className="telco-container">
          <h2 className="telco-section-heading text-center mb-10 sm:mb-[30px] lg:mb-[60px] 2xl:mb-20">
            Unlock massive savings on the iPhone 16 - only at Digitel Store
          </h2>

          <div className="flex flex-col lg:flex-row gap-[60px] sm:gap-10 lg:gap-[50px] 2xl:gap-[73px]">

            <div className="w-full lg:w-[45%] xl:w-[51.81%] 2xl:w-[49%] 3xl:w-[51.81%]">
              <ResponsiveImage
                img="4.webp"
                imgFolder="telco"
                alt="Telco iPhone"
              />
              <div>
                <h3 className="text-xl md:text-2xl 2xl:text-2xl text-[#1D1D1F] font-bold mt-[60px] sm:mt-5 lg:mt-[60px] 2xl:mt-20 mb-4 2xl:mb-5">
                  User Reviews
                </h3>
                <EntryPointWrapper
                  id="#842010"
                  skeletonType={EntryPointType.CIRCLE}
                  skeletonSize={EntryPointSize.STANDARD}
                />
                <div className="pt-4 xl:pt-2 2xl:pt-8 3xl:pt-20">
                  <div className="flex justify-start items-center pb-6 2xl:pb-[32px] gap-3 2xl:gap-4">
                    <h3 className="text-xl xl:text-2xl 2xl:text-3xl text-[#15234E] font-bold">Learn More About this Device</h3>
                    <span className="lg:text-2xl pt-2">
                      <FiChevronRight strokeWidth="2.4" />
                    </span>
                  </div>
                  <p className="text-xs 2xl:text-sm text-[#72788C] font-normal pb-4 2xl:pb-5">Monthly payments shown are for customers who qualify to pay $0 Down, $0.00/mo for 36 months after bill credit, was $23.05/mo: 0% APR. Retail price: $829.99. Applicable on any Unlimited phone plan. <span className="inline md:hidden font-bold">Read More</span></p>

                  <p className="hidden md:block text-xs 2xl:text-sm text-[#72788C] font-normal">Bill credits applied evenly over 36 billing cycles - early termination or plan change forfeits remaining credits. Taxes, surcharges and device protection fees extra; limited-time offer.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[55%] xl:w-[46.25%] 2xl:w-[51%] 3xl:w-[44.25%]">
              <ResponsiveImage
                img="5.webp"
                imgFolder="telco"
                alt="Telco iPhone"
              />
            </div>
          </div>
        </section>

        <section className="telco-container telco-section-padding">
          <h2 className="telco-section-heading text-center mb-10 sm:mb-[30px] lg:mb-[45px] 2xl:mb-[60px]">
            Recommended just <br className="block sm:hidden" /> for you
          </h2>

          <EntryPointWrapper
            id="#473811"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="telco-container">
          <h2 className="telco-section-heading text-center mb-10 sm:mb-[30px] lg:mb-[45px] 2xl:mb-[60px] relative">
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

        <section className="telco-container telco-section-padding">
          <h2 className="telco-section-heading text-center mb-10 sm:mb-[30px] lg:mb-[45px] 2xl:mb-[60px]">
            Experience our next-gen IoT innovation
          </h2>

          <EntryPointWrapper
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
            <div className="lg:max-w-[990px] 2xl:max-w-[1320px] mx-auto">
              <ResponsiveImage
                img="8.webp"
                imgFolder="telco"
                alt="Telco footer"
              />
            </div>
          </div>
        </footer>
      </main>
    </FlagshipWrapper>
  );
};

export default TelcoHome;