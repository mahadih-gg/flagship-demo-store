import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";

const Home = () => {
  return (
    <main>
      <section className="container">
        <div className="max-w-[960px] mx-auto flex justify-center items-center pt-2 pb-2 sm:pb-5 md:pb-10">

          <img src="/assets/images/home/1.webp" className="hidden 2xl:block" alt="" />
          <img src="/assets/images/home/lg/1.webp" className="hidden lg:block 2xl:hidden" alt="" />
          <img src="/assets/images/home/md/1.webp" className="hidden sm:block lg:hidden" alt="" />
          <img src="/assets/images/home/sm/1.webp" className="block sm:hidden" alt="" />

        </div>

        <div className="flex justify-center items-center ">

          <img src="/assets/images/home/2.webp" className="hidden 2xl:block" alt="" />
          <img src="/assets/images/home/lg/2.webp" className="hidden lg:block 2xl:hidden" alt="" />
          <img src="/assets/images/home/md/2.webp" className="hidden sm:block lg:hidden" alt="" />
          <img src="/assets/images/home/sm/2.webp" className="block sm:hidden" alt="" />

        </div>
      </section>

      <section className="container section-padding-top">
        <h2 className="section-heading">Don’t Miss These Limited-Time Deals</h2>
        <EntryPoint
          id="#187731"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="container section-padding-top">
        <h2 className="section-heading">Providing Support 24/7</h2>

        <div className="flex justify-center items-center">

          <img src="/assets/images/home/3.webp" className="hidden 2xl:block" alt="" />
          <img src="/assets/images/home/lg/3.webp" className="hidden lg:block 2xl:hidden" alt="" />
          <img src="/assets/images/home/md/3.webp" className="hidden sm:block lg:hidden" alt="" />
          <img src="/assets/images/home/sm/3.webp" className="block sm:hidden" alt="" />

        </div>

      </section>

      <section className="container section-padding">
        <h2 className="section-heading">Check out Popular Internet Plans</h2>

        <div className="flex justify-center items-center">

          <img src="/assets/images/home/4.webp" className="hidden 2xl:block" alt="" />
          <img src="/assets/images/home/lg/4.webp" className="hidden lg:block 2xl:hidden" alt="" />
          <img src="/assets/images/home/md/4.webp" className="hidden sm:block lg:hidden" alt="" />
          <img src="/assets/images/home/sm/4.webp" className="block sm:hidden" alt="" />


        </div>

      </section>

      <section className="bg-[#EFF5F9] py-10">
        <div className="container">

          <h2 className="section-heading">Explore Trending Internet Plans & Packs</h2>

          <div className="flex justify-center items-center">

            <img src="/assets/images/home/5.webp" className="hidden 2xl:block" alt="" />
            <img src="/assets/images/home/lg/5.webp" className="hidden lg:block 2xl:hidden" alt="" />
            <img src="/assets/images/home/md/5.webp" className="hidden sm:block lg:hidden" alt="" />
            <img src="/assets/images/home/sm/5.webp" className="block sm:hidden" alt="" />

          </div>

        </div>
      </section>


      <section className="section-padding">
        <h2 className="section-heading">Get Updates About the Latest Technology Worldwide</h2>

        <div className="flex justify-center items-center">

          <img src="/assets/images/home/6.webp" className="hidden 2xl:block" alt="" />
          <img src="/assets/images/home/lg/6.webp" className="hidden lg:block 2xl:hidden" alt="" />
          <img src="/assets/images/home/md/6.webp" className="hidden sm:block lg:hidden" alt="" />
          <img src="/assets/images/home/sm/6.webp" className="block sm:hidden" alt="" />

        </div>

      </section>


    </main>
  );
};

export default Home;