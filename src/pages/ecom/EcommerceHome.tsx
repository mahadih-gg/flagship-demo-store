import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import EcomHeader from "../../components/ecom/EcomHeader";
import EcomNavbar from "../../components/ecom/EcomNavbar";
import ResponsiveImage from "../../components/ResponsiveImage";
import { Marquee } from "../../components/ui/Marquee";

const EcommerceHome = () => {
  // Dynamic marquee text data - easily modifiable
  const marqueeTexts = [
    "New → Body Wash Discovery Set",
    "━",
    "FREE GIFT ON ORDERS $65+",
    "━",
    "FREE SHIPPING ON ORDERS $50+",
    "━",
    "Subscribe & Save 15%",
    "━",
    "New → Body Wash Discovery Set",
    "━",
    "FREE GIFT ON ORDERS $65+"
  ];

  return (
    <main>
      <header>
        <div className="bg-[#1F2544] h-9 sm:h-6 lg:h-8 2xl:h-11 flex items-center">
          <div className="container-ecom">
            <p className="text-white font-medium text-center py-3 text-xs sm:text-sm md:text-base 2xl:text-lg">Demo Store • Powered by Horizon • Sign up for Free Trial</p>
          </div>
        </div>
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

        <EcomNavbar />
      </header>

      <section className="container-ecom pt-4 md:pt-3 lg:pt-4 2xl:pt-6">
        <EntryPoint
          id="#745824"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="container-ecom ecom-section-padding-bottom pt-12 md:pt-10 lg:pt-14 2xl:pt-4">
        <ResponsiveImage
          img="1.webp"
          imgFolder="ecom"
          alt="Ecommerce Hero"
        />
      </section>

      <section className="container-ecom">
        <EcomHeader title="Best Sellers" />
        <EntryPoint
          id="#897749"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="container-ecom ecom-section-padding">
        <EcomHeader title="Shop by Category" />
        <ResponsiveImage
          img="2.webp"
          imgFolder="ecom"
          alt="Ecommerce Shop by Category"
        />
      </section>

      <section className="container-ecom">
        <EcomHeader title="Order Now" />
        <div className="hidden md:block">
          <ResponsiveImage
            img="3.webp"
            imgFolder="ecom"
            alt="Ecommerce Order Now"
          />
        </div>
      </section>
      <div className="pl-5 block md:hidden">
        <img src={`/assets/images/ecom/sm/3.webp`} alt="Ecommerce Order Now" className="w-full" />
        <img src={`/assets/images/ecom/sm/3(2).webp`} alt="Ecommerce Order Now" className="w-full pt-6" />
      </div>

      <section className="container-ecom ecom-section-padding">
        <div className="lg:w-3/4">
          <ResponsiveImage
            img="4.webp"
            imgFolder="ecom"
            alt="Ecommerce accordion"
          />
        </div>
      </section>

      <section className="container-ecom">
        <EcomHeader title="User Stories" />
        <EntryPoint
          id="#907569"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="container-ecom ecom-section-padding">
        <ResponsiveImage
          img="5.webp"
          imgFolder="ecom"
          alt="Ecommerce Reviews"
        />
      </section>

      <section className="container-ecom">
        <EcomHeader title="You’ll Love These Too" />
        <EntryPoint
          id="#774540"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <footer className="container-ecom ecom-section-padding-top">
        <ResponsiveImage
          img="6.webp"
          imgFolder="ecom"
          alt="Ecommerce footer"
        />
      </footer>
    </main>
  );
};

export default EcommerceHome;