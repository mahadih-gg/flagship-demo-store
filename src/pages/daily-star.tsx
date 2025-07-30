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
    <FlagshipWrapper tenant="daily-star">
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
            id="#293059"
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
          <div className="pt-0 pb-6 sm:pt-0 sm:pb-[35px] xl:pt-[20px] xl:pb-[34px] 3xl:pt-[26px] 3xl:pb-[46px]">
            <DailyStarHeading title="Grow with Keeron" titleClassName="text-[#1D4340]" placeholderClassName="text-[37px]" />
          </div>
          <EntryPointWrapper
            id="#333508"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="daily-star-container">

          <div className="pt-0 pb-5 sm:pt-[40px] sm:pb-[40px] xl:pt-[56px] xl:pb-[40px] 3xl:pt-[75px] 3xl:pb-[53px]">
            <DailyStarHeading title="Just In" titleClassName="text-[#E36E4B]" />
          </div>

          <div className="flex flex-col sm:flex-row gap-5 3xl:gap-7">
            <div className="w-full sm:w-1/2 xl:w-[65%] 3xl:w-[64%]">
              <ResponsiveImage
                img="3.webp"
                imgFolder="daily-star"
                alt="Daily Star"
              />
            </div>
            <div className="w-full sm:w-1/2 xl:w-[34%] 3xl:w-[34%] mt-0 sm:-mt-3 xl:mt-0">
              <h3 className="text-[#101828] font-semibold text-2xl sm:text-[26px] xl:text-[28px] 3xl:text-4xl pb-2 sm:pb-3 xl:pb-5 3xl:pb-9">Shera Radhuni Highlights</h3>
              <EntryPointWrapper
                id="#199431"
                skeletonType={EntryPointType.BLOCK}
                skeletonSize={EntryPointSize.BLOCK_OF_4}
              />
            </div>
          </div>
        </section>

        <section className="daily-star-container">
          <div className="pt-[60px] pb-5 sm:pt-[48px] sm:pb-[24px] xl:pt-[30px] xl:pb-[30px] 3xl:pt-[40px] 3xl:pb-[40px]">
            <DailyStarHeading title="Special Handset Deals" placeholder="Handset Deals" titleClassName="text-[#101828]" />
          </div>
          <EntryPointWrapper
            id="#176293"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="max-w-[1270px] 3xl:max-w-[1693px] mx-auto pt-10 pb-10 sm:pt-12 sm:pb-4 xl:pt-[60px] xl:pb-5 3xl:pt-[80px] 3xl:pb-[26px] px-5 sm:px-6 xl:px-0">
          <ResponsiveImage
            img="4.webp"
            imgFolder="daily-star"
            alt="Daily Star"
          />
        </section>

        <section className="bg-[#EAECF0] pt-[24px] 3xl:pt-[34px] pb-10 sm:pb-11 xl:pb-5">
          <div className="daily-star-container">
            <ResponsiveImage
              img="5.webp"
              imgFolder="daily-star"
              alt="Daily Star"
            />
          </div>
        </section>

        <section className="daily-star-container pb-[58px] sm:pb-10 3xl:pb-[52px]">
          <div className="pt-[36px] pb-[24px] sm:pt-[18px] sm:pb-[34px] xl:pt-0 xl:pb-6 3xl:pt-0 3xl:pb-[30px]">
            <DailyStarHeading title="Business" titleClassName="text-[#1779BA]" />
          </div>
          <EntryPointWrapper
            id="#910783"
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>
        <section className="daily-star-container pb-10 sm:pb-[44px] xl:pb-[44px] 3xl:pb-[60px]">
          <div className="pt-7 pb-10 sm:pt-10 sm:pb-10 xl:pt-0 xl:pb-[70px] 3xl:pt-0 3xl:pb-[94px]">
            <DailyStarHeading title="Star Multimedia" titleClassName="text-[#101828]" />
          </div>
          <ResponsiveImage
            img="6.webp"
            imgFolder="daily-star"
            alt="Daily Star"
          />
        </section>

        <section className="daily-star-container pb-10">
          <div className="pt-10 pb-6 sm:pt-0 sm:pb-5 xl:pt-0 xl:pb-[40px] 3xl:pt-0 3xl:pb-[53px]">
            <DailyStarHeading title="Sports" titleClassName="text-[#009833]" />
          </div>
          <EntryPointWrapper
            id="#190144"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.STANDARD}
          />
        </section>

        <section className="bg-[#EAECF0] border-t-[18px] border-[#8C213E] pb-[70px] sm:pb-[50px] xl:pb-10 3xl:pb-[50px]">
          <div className="daily-star-container">
            <div className="pt-[50px] pb-5 sm:pt-10 sm:pb-10 xl:pt-10 xl:pb-10 3xl:pt-[60px] 3xl:pb-[60px]">
              <DailyStarHeading title="Entertainment" placeholderClassName="bg-[#EAECF0]" />
            </div>
            <ResponsiveImage
              img="7.webp"
              imgFolder="daily-star"
              alt="Daily Star"
            />
          </div>
        </section>

        <section className="daily-star-container pb-10 sm:pb-0 ">
          <div className="pt-[54px] pb-7 sm:pt-0 sm:pb-6 xl:pt-[54px] xl:pb-[46px] 3xl:pt-[60px] 3xl:pb-[60px]">
            <DailyStarHeading title="Life & Living" titleClassName="text-[#101828]" arrowClassName="border-[#E26737]" hasLine={false} />
          </div>
          <EntryPointWrapper
            id="#353741"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="daily-star-container pb-[34px] sm:pb-5 xl:pb-10 3xl:pb-[50px]">
          <div className="pt-10 pb-5 sm:pt-[60px] sm:pb-[40px] xl:pt-[60px] xl:pb-[40px] 3xl:pt-[50px] 3xl:pb-[50px]">
            <DailyStarHeading title="Youth" titleClassName="text-[#009697]" />
          </div>
          <ResponsiveImage
            img="8.webp"
            imgFolder="daily-star"
            alt="Daily Star"
          />
        </section>

        <section className="daily-star-container pb-[60px] sm:pb-[60px] xl:pb-[64px] 3xl:pb-[87px]">
          <div className="pt-0 pb-6 sm:pt-0 sm:pb-10 xl:pt-0 xl:pb-[40px] 3xl:pt-0 3xl:pb-[50px]">
            <DailyStarHeading title="Your Stories" titleClassName="text-[#065466]" />
          </div>
          <EntryPointWrapper
            id="#412812"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <footer className="bg-[#101828]">

          <div className="max-w-[1920px] mx-auto px-2.5 sm:px-6 xl:px-[40px] 3xl:px-[50px] pr-2.5 sm:pr-0 xl:pr-[40px] 3xl:pr-[50px]">
            <div className="pt-8 pb-8 sm:pt-10 sm:pb-[60px] xl:pt-[30px] xl:pb-[60px] 3xl:pt-[40px] 3xl:pb-[78px]">
              <DailyStarHeading
                title="Photo Gallery"
                titleClassName="text-white"
                placeholderClassName="bg-[#101828] text-[#101828]"
                hasLine={false}
              />
            </div>
            <ResponsiveImage
              img="9.webp"
              imgFolder="daily-star"
              alt="Daily Star"
            />
          </div>

          <div className="daily-star-container pt-12 pb-12 sm:pt-[110px] sm:pb-[48px] xl:pt-[64px] xl:pb-[48px] 3xl:pt-[85px] 3xl:pb-[64px]">
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