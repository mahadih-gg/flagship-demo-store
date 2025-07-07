import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import ResponsiveImage from "../../components/ResponsiveImage";

const Home = () => {
  return (
    <main>
      <section className="container">
        <div className="max-w-[960px] mx-auto flex justify-center items-center pt-2 pb-10 md:pb-6 xl:pb-10 3xl:pb-14">
          <ResponsiveImage img="1.webp" imgFolder="home" />
        </div>

        <div className="flex justify-center items-center ">
          <ResponsiveImage img="2.webp" imgFolder="home" />
        </div>
      </section>

      <section className="container section-padding-top">
        <h2 className="section-heading">Don't Miss These Limited-Time Deals</h2>
        <EntryPoint
          id="#056779"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="container section-padding-top">
        <h2 className="section-heading">Providing Support 24/7</h2>
        <div className="flex justify-center items-center">
          <ResponsiveImage img="3.webp" imgFolder="home" />
        </div>
      </section>

      <section className="container section-padding">
        <h2 className="section-heading">Check out Popular Internet Plans</h2>
        <div className="flex justify-center items-center">
          <ResponsiveImage img="4.webp" imgFolder="home" />
        </div>
      </section>

      <section className="bg-[#EFF5F9] py-10">
        <div className="container">
          <h2 className="section-heading">Explore Trending Internet Plans & Packs</h2>
          <div className="flex justify-center items-center">
            <ResponsiveImage img="5.webp" imgFolder="home" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <h2 className="section-heading">Get Updates About the Latest Technology Worldwide</h2>
        <div className="flex justify-center items-center">
          <ResponsiveImage img="6.webp" imgFolder="home" />
        </div>
      </section>
    </main>
  );
};

export default Home;