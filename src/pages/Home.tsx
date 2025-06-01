import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";

const Home = () => {
  return (
    <main>
      <section className="container">
        <div className="flex justify-center items-center py-2 md:py-10">

          <img src="/assets/images/home/sm/1.png" className="block sm:hidden" alt="hero" />

          <img src="/assets/images/home/1.png" className="hidden sm:block" alt="hero" />
        </div>

        <div className="flex justify-center items-center">
          <img src="/assets/images/home/2.png" alt="hero" />
        </div>
      </section>

      <section className="container section-padding-top">
        <h2 className="section-heading">Discover Exciting Offers for You</h2>
        <EntryPoint
          id="#187731"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="container section-padding-top">
        <h2 className="section-heading">Discover Exciting Offers for You</h2>

        <div className="flex justify-center items-center">
          <img src="/assets/images/home/3.png" className="hidden lg:block" alt="hero" />

          <img src="/assets/images/home/md/3.png" className="hidden sm:block lg:hidden" alt="hero" />

          <img src="/assets/images/home/sm/3.png" className="block sm:hidden" alt="hero" />
        </div>

      </section>

      <section className="container section-padding">
        <h2 className="section-heading">Check out Popular Internet Plans</h2>

        <div className="flex justify-center items-center">

          <img src="/assets/images/home/sm/4.png" className="block sm:hidden" alt="hero" />

          <img src="/assets/images/home/md/4.png" className="hidden sm:block lg:hidden" alt="hero" />

          <img src="/assets/images/home/4.png" className="hidden lg:block" alt="hero" />
        </div>

      </section>

      <section className="bg-[#EFF5F9] py-10">
        <div className="container">

          <h2 className="section-heading">Explore Trending Internet Plans & Packs</h2>

          <div className="flex justify-center items-center">

            <img src="/assets/images/home/sm/5.png" className="block sm:hidden" alt="hero" />

            <img src="/assets/images/home/md/5.png" className="hidden sm:block lg:hidden" alt="hero" />

            <img src="/assets/images/home/5.png" className="hidden lg:block" alt="hero" />
          </div>

        </div>
      </section>


      <section className="section-padding">
        <h2 className="section-heading">Get Updates About the Latest Technology Worldwide</h2>

        <div className="flex justify-center items-center">

          <img src="/assets/images/home/sm/6.png" className="block sm:hidden" alt="hero" />

          <img src="/assets/images/home/md/6.png" className="hidden sm:block lg:hidden" alt="hero" />

          <img src="/assets/images/home/6.png" className="hidden lg:block" alt="hero" />
        </div>

      </section>


    </main>
  );
};

export default Home;