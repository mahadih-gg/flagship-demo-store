import { EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts"
import BlueTopBar from "../components/BlueTopBar"
import EntryPointWrapper from "../components/EntryPointWrapper"
import FlagshipWrapper from "../components/FlagshipWrapper"
import ResponsiveImage from "../components/ResponsiveImage"
import { Marquee } from "../components/ui/Marquee"

const OttPage = () => {
  const marqueeTexts = [
    "Content used is for demo purposes only",
    "All copyrights belong to their respective brands",
    "OTT features are for demonstration purposes only",
  ];

  return (
    <FlagshipWrapper tenant="ott">
      <main className="ott-wrapper">
        <header className="h-screen max-h-[81vh] lg:max-h-[75vh] 2xl:max-h-[100vh] flex flex-col">
          <BlueTopBar containerClass="ott-container" className="h-8 2xl:h-11">
            Demo powered by Horizon
            {/* • {" "}
            <Link to="https://www.horizonexp.com/pricing" className="underline">Start for free today</Link> */}
          </BlueTopBar>
          <div
            className="flex-1 bg-cover bg-center bg-no-repeat flex flex-col h-full"
            style={{
              backgroundImage: "url('/assets/images/ott/ott-hero.webp')"
            }}
          >
            <div
              className=""
              style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.70) 12.5%, rgba(0, 0, 0, 0.00) 100%)"
              }}
            >
              <Marquee
                className="text-white text-xs uppercase pt-2 2xl:pt-3"
                pauseOnHover={true}
              >
                {
                  marqueeTexts.map((text, index) => (
                    <span key={index}>{text}</span>
                  ))
                }
              </Marquee>
              <div className="ott-container pr-5 lg:pr-[60px] 2xl:pr-[80px] pt-[18px] 2xl:pt-6">
                <ResponsiveImage
                  img="1.webp"
                  imgFolder="ott"
                  alt="OTT Hero"
                />
              </div>
            </div>

            <div className="ott-container size-full flex-1 flex items-end lg:items-center justify-center">
              <ResponsiveImage
                img="2.webp"
                imgFolder="ott"
                alt="OTT Hero"
              />
            </div>
          </div>
        </header>

        <section className="ott-container ott-section-padding">
          <h2 className="ott-section-heading">
            Just Released
          </h2>
          <EntryPointWrapper
            id="#332939"
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="ott-container">
          <h2 className="ott-section-heading">
            Matched to You
          </h2>
          <ResponsiveImage
            img="3.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <section className="ott-container ott-section-padding">
          <h2 className="ott-section-heading">
            Top 10 Movies Trending Today
          </h2>
          <ResponsiveImage
            img="4.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <section className="ott-container">
          <h2 className="ott-section-heading">
            Recommended For You
          </h2>
          <EntryPointWrapper
            id="#178097"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="ott-container ott-section-padding">
          <h2 className="ott-section-heading">
            We Think You’ll Love These
          </h2>
          <ResponsiveImage
            img="5.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <section className="ott-container">
          <h2 className="ott-section-heading">
            Animation
          </h2>
          <ResponsiveImage
            img="6.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <section className="ott-container ott-section-padding">
          <h2 className="ott-section-heading">
            Your Next Watch
          </h2>
          <EntryPointWrapper
            id="#412738"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.STANDARD}
          />
        </section>

        <section className="ott-container">
          <h2 className="ott-section-heading">
            Watch In One Weekend
          </h2>
          <ResponsiveImage
            img="7.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <section className="ott-container ott-section-padding">
          <h2 className="ott-section-heading">
            Critically Acclaimed Movies
          </h2>
          <ResponsiveImage
            img="8.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <section className="ott-container">
          <h2 className="ott-section-heading">
            Today's Fresh Picks
          </h2>
          <EntryPointWrapper
            id="#115895"
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="ott-container ott-section-padding">
          <h2 className="ott-section-heading">
            Adult Animation
          </h2>
          <ResponsiveImage
            img="9.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <section className="ott-container">
          <h2 className="ott-section-heading">
            Matched to You
          </h2>
          <ResponsiveImage
            img="10.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <section className="ott-container ott-section-padding">
          <h2 className="ott-section-heading">
            Top Trending Movies
          </h2>
          <EntryPointWrapper
            id="#653651"
            skeletonType={EntryPointType.RECTANGLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </section>

        <section className="ott-container">
          <h2 className="ott-section-heading">
            Comedies with Twist
          </h2>
          <ResponsiveImage
            img="11.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <section className="ott-container ott-section-padding">
          <h2 className="ott-section-heading">
            Because You Watched The Diplomat
          </h2>
          <ResponsiveImage
            img="12.webp"
            imgFolder="ott"
            alt="OTT Content"
          />
        </section>

        <footer className="ott-container pr-5 lg:pr-[60px] 2xl:pr-[80px] ott-section-padding">
          <ResponsiveImage
            img="13.webp"
            imgFolder="ott"
            alt="OTT Footer"
          />
        </footer>
      </main>
    </FlagshipWrapper>
  )
}

export default OttPage
