import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import BlueTopBar from "../../components/BlueTopBar";
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
        <BlueTopBar containerClass="ecom-container" />
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

      <section className="ecom-container pt-0 md:pt-3 lg:pt-4 2xl:pt-6">
        <EntryPoint
          id="#745824"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="ecom-container ecom-section-padding-bottom lg:pt-4">
        <ResponsiveImage
          img="1.webp"
          imgFolder="ecom"
          alt="Ecommerce Hero"
        />
      </section>

      <section className="ecom-container">
        <EcomHeader title="Best Sellers" />
        <EntryPoint
          id="#897749"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="ecom-container ecom-section-padding">
        <EcomHeader title="Shop by Category" />
        <ResponsiveImage
          img="2.webp"
          imgFolder="ecom"
          alt="Ecommerce Shop by Category"
        />
      </section>

      <section className="ecom-container">
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
        <img src={`/assets/images/ecom/sm/3.webp`} alt="Ecommerce Order Now" className="w-full pr-5" />
        <img src={`/assets/images/ecom/sm/3(2).webp`} alt="Ecommerce Order Now" className="w-full pt-6" />
      </div>

      <section className="ecom-container ecom-section-padding">
        <div className="lg:w-3/4">
          <ResponsiveImage
            img="4.webp"
            imgFolder="ecom"
            alt="Ecommerce accordion"
          />
        </div>
      </section>

      <section className="ecom-container">
        <EcomHeader title="User Stories" />
        <EntryPoint
          id="#907569"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="ecom-container ecom-section-padding-bottom pt-3 sm:pt-4 lg:pt-8 2xl:pt-[60px]">
        <ResponsiveImage
          img="5.webp"
          imgFolder="ecom"
          alt="Ecommerce Reviews"
        />
      </section>

      <section className="ecom-container">
        <EcomHeader title="You’ll Love These Too" />
        <EntryPoint
          id="#774540"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <footer className="ecom-container ecom-section-padding-top">
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