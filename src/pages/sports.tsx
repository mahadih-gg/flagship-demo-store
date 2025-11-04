import { EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts"
import { Link } from "react-router"
import BlueTopBar from "../components/BlueTopBar"
import EntryPointWrapper from "../components/EntryPointWrapper"
import FlagshipWrapper from "../components/FlagshipWrapper"
import ResponsiveImage from "../components/ResponsiveImage"
import { Marquee } from "../components/ui/Marquee"

const SportsPage = () => {
  const marqueeTexts = [
    "Content used is for demo purposes only",
    "All copyrights belong to their respective brands",
    "Sports features are for demonstration purposes only",
  ];

  return (
    <FlagshipWrapper tenant="sports">
      <main className="sports-wrapper">
        <header>
          <BlueTopBar containerClass="ecom-container">
            Demo powered by Horizon • {" "}
            <Link to="https://www.horizonexp.com/pricing" className="underline">Start for free today</Link>
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
          <div className="sports-container">
            <ResponsiveImage
              img="1.webp"
              imgFolder="sports"
              alt="Sports Hero"
            />
          </div>
        </header>

        <section className="sports-container pt-[40px] sm:pt-[32px] lg:pt-[30px] 2xl:pt-[40px]">
          <div className="sports-section-wrapper">
            <EntryPointWrapper
              id="#858245"
              skeletonType={EntryPointType.CIRCLE}
              skeletonSize={EntryPointSize.BOLD}
            />
          </div>
        </section>

        <section className="sports-container sports-section-padding">
          <ResponsiveImage
            img="2.webp"
            imgFolder="sports"
            alt="Sports Hero"
          />
        </section>

        <section className="sports-container">
          <div className="sports-section-wrapper">
            <h2 className="sports-section-heading">
              Top Titan FC Goals This Week
            </h2>
            <EntryPointWrapper
              id="#731271"
              skeletonType={EntryPointType.RECTANGLE}
              skeletonSize={EntryPointSize.STANDARD}
            />
          </div>
        </section>

        <section className="sports-container sports-section-padding">
          <div className="sports-section-wrapper">
            <h2 className="sports-section-heading">
              Key Summer 2025 Transfers
            </h2>
            <ResponsiveImage
              img="3.webp"
              imgFolder="sports"
              alt="Sports Hero"
            />
          </div>
        </section>

        <section className="sports-container">
          <div className="sports-section-wrapper">
            <h2 className="sports-section-heading">
              Titan FL Matches
            </h2>
            <ResponsiveImage
              img="4.webp"
              imgFolder="sports"
              alt="Sports Hero"
            />
          </div>
        </section>

        <section className="sports-container sports-section-padding">
          <div className="sports-section-wrapper">
            <h2 className="sports-section-heading">
              Rising Stars: Breakout Players
            </h2>
            <EntryPointWrapper
              id="#244196"
              skeletonType={EntryPointType.RECTANGLE}
              skeletonSize={EntryPointSize.BOLD}
            />
          </div>
        </section>

        <section className="sports-container">
          <div className="sports-section-wrapper">
            <h2 className="sports-section-heading">
              Latest News
            </h2>
            <ResponsiveImage
              img="5.webp"
              imgFolder="sports"
              alt="Sports Hero"
            />
          </div>
        </section>

        <section className="sports-container sports-section-padding">
          <div className="w-full max-w-[986px] 2xl:max-w-[1260px] mx-auto">
            <ResponsiveImage
              img="6.webp"
              imgFolder="sports"
              alt="Sports Hero"
            />
          </div>
        </section>

        <section className="sports-container">
          <div className="sports-section-wrapper">
            <h2 className="sports-section-heading">
              Goal of the Month Contenders
            </h2>
            <EntryPointWrapper
              id="#561201"
              skeletonType={EntryPointType.RECTANGLE}
              skeletonSize={EntryPointSize.STANDARD}
            />
          </div>
        </section>

        <section className="sports-container sports-section-padding">
          <div className="sports-section-wrapper">
            <h2 className="sports-section-heading">
              Matchday Essentials
            </h2>
            <ResponsiveImage
              img="7.webp"
              imgFolder="sports"
              alt="Sports Hero"
            />
          </div>
        </section>

        <section className="sports-container">
          <div className="sports-section-wrapper">
            <h2 className="sports-section-heading">
              Fan Reaction: Best Celebrations
            </h2>
            <EntryPointWrapper
              id="#948028"
              skeletonType={EntryPointType.RECTANGLE}
              skeletonSize={EntryPointSize.BOLD}
            />
          </div>
        </section>

        <section className="sports-container sports-section-padding">
          <div className="px-0 lg:px-20 2xl:px-[110px] pt-[40px] sm:pt-[65px] 2xl:pt-[90px] pb-[80px] sm:pb-[100px] 2xl:pb-[130px]">
            <ResponsiveImage
              img="8.webp"
              imgFolder="sports"
              alt="Sports Hero"
            />
          </div>
        </section>

        <footer className="sports-container pb-5">
          <div>
            <ResponsiveImage
              img="9.webp"
              imgFolder="sports"
              alt="Sports Hero"
            />
          </div>
        </footer>
      </main>
    </FlagshipWrapper>
  )
}

export default SportsPage 