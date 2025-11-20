import { EntryPointSize, EntryPointType } from "@thinkflagship/horizon-web-shorts-staging";
import { Link } from "react-router";
import BlueTopBar from "../components/BlueTopBar";
import EntryPointWrapper from "../components/EntryPointWrapper";
import FlagshipWrapper from "../components/FlagshipWrapper";
import ResponsiveImage from "../components/ResponsiveImage";
import RestaurantHeader from "../components/restaurant/RestaurantHeader";
import { Marquee } from "../components/ui/Marquee";

const RestaurantPage = () => {
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
    <FlagshipWrapper tenant="restaurant">
      <main className="restaurant-wrapper">
        <header>
          <BlueTopBar containerClass="restaurant-container">
            Demo Powered by A² + Horizon • {" "}
            <Link to="/free-trial" className="underline">Request Free Trial</Link>
          </BlueTopBar>
          <Marquee
            className="text-[#98A1BC] text-xs uppercase py-3 md:pt-4 2xl:pt-5"
            pauseOnHover={true}
          >
            {
              marqueeTexts.map((text, index) => (
                <span key={index}>{text}</span>
              ))
            }
          </Marquee>
          <nav className="restaurant-container bg-[#C8102F] py-6 xl:py-5 3xl:py-7">
            <ResponsiveImage
              img="1.webp"
              imgFolder="restaurant"
              alt="Restaurant Navbar"
            />
          </nav>
        </header>

        <section className="restaurant-container py-10 xl:py-[45px] 3xl:py-[60px]">
          <EntryPointWrapper
            id="#376991"
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="bg-restaurant-hero bg-cover bg-no-repeat restaurant-section-padding">
          <div className="px-7 sm:px-10 xl:px-[77px] 3xl:px-[103px] max-w-[1920px] mx-auto">
            <div className="w-full lg:w-1/2">
              <ResponsiveImage
                img="2.webp"
                imgFolder="restaurant"
                alt="Restaurant Hero"
              />
            </div>
          </div>
        </section>

        <section className="restaurant-container restaurant-section-padding-sm">
          <RestaurantHeader
            title="Today’s best deals"
            description="Grab these mouthwatering deals before they’re gone!"
          />
          <EntryPointWrapper
            id="#516330"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="py-10 xl:py-8 3xl:py-11 border-y-2 border-[#101828]/20">
          <div className="restaurant-container">
            <div className="w-full max-w-[706px] 3xl:max-w-[942px] mx-auto">
              <ResponsiveImage
                img="3.webp"
                imgFolder="restaurant"
                alt="Restaurant Deals"
              />
            </div>
          </div>
        </section>

        <section className="restaurant-container restaurant-section-padding-sm-top">
          <RestaurantHeader
            title="MADE FOR YOU"
            description="Based on your taste, we think you’ll love these."
          />
          <EntryPointWrapper
            id="#863364"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="px-8 xl:px-[105px] 3xl:px-[156px] max-w-[1920px] mx-auto restaurant-section-padding-lg">
          <RestaurantHeader
            subheading="Home of The"
            title={<>ORIGINAL FLAVORED <br className="block sm:hidden" /> CRUST PIZZA</>}
            className="pb-0 xl:pb-0 3xl:pb-0"
          />
          <p className="text-lg 3xl:text-2xl leading-8 text-center pt-1 xl:pt-2.5 3xl:pt-3 pb-10 xl:pb-[60px] 3xl:pb-[80px]">Choose from 8 mouthwatering flavors. <br className="block sm:hidden" /> What Crust Are You?® <br /> Become a Crustomizer® and create your own flavor combinations by mixing your Flavored Crusts together.</p>

          <div className="max-w-[1033px] 2xl:max-w-[1354px] mx-auto">
            <EntryPointWrapper
              id="#774404"
              skeletonType={EntryPointType.CIRCLE}
              skeletonSize={EntryPointSize.STANDARD}
            />
          </div>

          <p className="text-xl 3xl:text-[26px] leading-relaxed text-center pt-[52px] xl:pt-[44px] 3xl:pt-[62px]">What sets Pizza Jam apart? Our signature flavored crusts! Elevate your pizza experience with unique options like Butter, Butter Cheese, Asiago Cheese, Ranch, Italian Herb, Cajun, Sesame, <span className="hidden sm:inline">and Garlic Herb flavored crusts. These distinctive crust flavors add an unparalleled burst of taste that others</span> <span className="inline lg:hidden font-semibold">...more</span> <span className="hidden lg:inline">attempt to imitate but can never quite recreate our original flavored crust pizzas. Don't wait any longer – place your pizza delivery order now and treat yourself to a pizza experience like no other! Find the nearest Pizza Jam near you here.</span></p>

          <div className="flex justify-center">
            <button className="inline-block text-xl xl:text-[24px] 3xl:text-[28px] text-[#C8102F] border-2 border-[#C8102F] rounded-full px-[30px] py-2.5 mt-[60px] sm:mt-10 xl:mt-5 3xl:mt-7 font-medium font-bebas-neue">
              Explore our flavor crust
            </button>
          </div>
        </section>

        <section className="restaurant-container-sm">
          <RestaurantHeader
            title="select menu"
            description="(Item availability may vary by location.)"
          />

          <ResponsiveImage
            img="4.webp"
            imgFolder="restaurant"
            alt="Restaurant Select Menu"
          />
        </section>

        <section className="restaurant-container-sm-left restaurant-section-padding">
          <ResponsiveImage
            img="5.webp"
            imgFolder="restaurant"
            alt="Restaurant Select Menu"
          />
        </section>

        <footer className="bg-[#EBEBEB] restaurant-section-padding-sm">
          <div className="restaurant-container-sm">
            <div className="">
              <ResponsiveImage
                img="6.webp"
                imgFolder="restaurant"
                alt="Restaurant Footer"
              />
            </div>
          </div>
        </footer>

      </main>

    </FlagshipWrapper>
  );
};

export default RestaurantPage;