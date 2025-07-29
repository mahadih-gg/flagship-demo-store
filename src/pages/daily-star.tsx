import { EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import { Link } from "react-router";
import BlueTopBar from "../components/BlueTopBar";
import DailyStarHeading from "../components/daily-star/DailyStarHeading";
import EntryPointWrapper from "../components/EntryPointWrapper";
import FlagshipWrapper from "../components/FlagshipWrapper";
import ResponsiveImage from "../components/ResponsiveImage";
import { Marquee } from "../components/ui/Marquee";

const DailyStarPage = () => {

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
    <FlagshipWrapper tenant="ecom">
      <main className="daily-star-wrapper">
        <header
          style={{
            boxShadow: "0 5.333px 10.667px -2.667px rgba(16, 24, 40, 0.10), 0 2.667px 5.333px -2.667px rgba(16, 24, 40, 0.06)"
          }}
        >
          <BlueTopBar containerClass="daily-star-container">
            Powered by Horizon • {" "}
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

          <nav className="daily-star-container">
            <ResponsiveImage
              img="1.webp"
              imgFolder="daily-star"
              alt="Daily Star"
            />
          </nav>
        </header>

        <section className="daily-star-container pt-7 pb-7 sm:pt-[28px] sm:pb-[42px] xl:pt-[40px] xl:pb-[56px] 3xl:pt-[52px] 3xl:pb-[78px]">
          <EntryPointWrapper
            id="#128768"
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="daily-star-container">
          <ResponsiveImage
            img="2.webp"
            imgFolder="daily-star"
            alt="Daily Star"
          />
        </section>

        <section className="daily-star-container">
          <DailyStarHeading title="Grow with Keeron" />
          <EntryPointWrapper
            id="#619926"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="daily-star-container">
          <DailyStarHeading title="Just In" titleClassName="text-[#E36E4B]" />

          <div className="flex flex-col sm:flex-row gap-7">
            <div className="w-full sm:w-1/2 xl:w-[65%] 3xl:w-[64%]">
              <ResponsiveImage
                img="3.webp"
                imgFolder="daily-star"
                alt="Daily Star"
              />
            </div>
            <div className="w-full sm:w-1/2 xl:w-[34%] 3xl:w-[34%]">
              <h3 className="text-[#101828] font-semibold text-2xl sm:text-[26px] xl:text-[28px] 3xl:text-4xl pb-2 sm:pb-4 xl:pb-5 3xl:pb-9">Shera Radhuni Highlights</h3>
              <EntryPointWrapper
                id="#619926"
                skeletonType={EntryPointType.RECTANGLE}
                skeletonSize={EntryPointSize.BOLD}
              />
            </div>
          </div>
        </section>

        <section className="daily-star-container">
          <DailyStarHeading title="Special Handset Deals" placeholder="Handset Deals" />
          <EntryPointWrapper
            id="#619926"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="max-w-[1270px] 3xl:max-w-[1693px] mx-auto">
          <ResponsiveImage
            img="4.webp"
            imgFolder="daily-star"
            alt="Daily Star"
          />
        </section>

        <section className="bg-[#EAECF0]">
          <div className="daily-star-container">
            <ResponsiveImage
              img="5.webp"
              imgFolder="daily-star"
              alt="Daily Star"
            />
          </div>
        </section>

        <section className="daily-star-container">
          <DailyStarHeading title="Business" titleClassName="text-[#1779BA]" />
          <EntryPointWrapper
            id="#128768"
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>
        <section className="daily-star-container">
          <DailyStarHeading title="Star Multimedia" />
          <ResponsiveImage
            img="6.webp"
            imgFolder="daily-star"
            alt="Daily Star"
          />
        </section>

        <section className="daily-star-container">
          <DailyStarHeading title="Sports" titleClassName="text-[#009833]" />
          <EntryPointWrapper
            id="#619926"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="bg-[#EAECF0]">
          <div className="daily-star-container">
            <DailyStarHeading title="Entertainment" placeholderClassName="bg-[#EAECF0]" />
            <ResponsiveImage
              img="7.webp"
              imgFolder="daily-star"
              alt="Daily Star"
            />
          </div>
        </section>

        <section className="daily-star-container">
          <DailyStarHeading title="Life & Living" titleClassName="text-[#101828]" arrowClassName="border-[#E26737]" hasLine={false} />
          <EntryPointWrapper
            id="#619926"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="daily-star-container">
          <DailyStarHeading title="Youth" titleClassName="text-[#009697]" />
          <ResponsiveImage
            img="8.webp"
            imgFolder="daily-star"
            alt="Daily Star"
          />
        </section>

        <section className="daily-star-container">
          <DailyStarHeading title="Your Stories" titleClassName="text-[#065466]" />
          <EntryPointWrapper
            id="#619926"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <footer className="bg-[#101828]">

          <div className="max-w-[1920px] mx-auto px-2.5 sm:px-6 xl:px-[40px] 3xl:px-[50px] pr-2.5 sm:pr-0 xl:pr-[40px] 3xl:pr-[50px]">
            <DailyStarHeading
              title="Photo Gallery"
              titleClassName="text-white"
              placeholderClassName="bg-[#101828] text-[#101828]"
              hasLine={false}
            />
            <ResponsiveImage
              img="9.webp"
              imgFolder="daily-star"
              alt="Daily Star"
            />
          </div>

          <div className="daily-star-container">
            <ResponsiveImage
              img="10.webp"
              imgFolder="daily-star"
              alt="Daily Star"
            />
          </div>
        </footer>
      </main>

    </FlagshipWrapper>
  );
};

export default DailyStarPage;