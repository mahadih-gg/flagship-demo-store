import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/web-shorts";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Product = () => {
  return (
    <main>

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 2xl:gap-28">

          <div>
            <div className="relative flex justify-center items-center rounded-xl bg-[#EFF5F9] py-[24px] sm:py-[30px] lg:py-[75px] xl:py-[100px]">

              <button className="absolute bg-[#15234E]/10 text-white rounded-full flex justify-center items-center size-5 xl:size-10 left-4 lg:left-6 2xl:left-10 top-1/2 -translate-y-1/2">
                <GoChevronLeft className="text-lg" />
              </button>

              <button className="absolute bg-[#15234E]/10 text-white rounded-full flex justify-center items-center size-5 xl:size-10 right-4 lg:right-6 2xl:right-10 top-1/2 -translate-y-1/2">
                <GoChevronRight className="text-lg" />
              </button>

              <img src="/assets/images/product/1.png" className="w-[200px] sm:w-[252px] lg:w-[332px] 2xl:w-[443px] h-auto" alt="product" />
            </div>

            <div>
              <h3 className="text-2xl text-[#1D1D1F] font-bold pt-11">
                What's New in iPhone 16
              </h3>
              <EntryPoint
                id="#096077"
                skeletonType={EntryPointType.CIRCLE}
                skeletonSize={EntryPointSize.STANDARD}
              />
              <div className="hidden lg:block">
                <h3 className="text-xl text-[#1D1D1F] font-bold pb-5">Learn More About this Device</h3>
                <p className="text-xs lg:text-sm text-gray-500 font-normal">Monthly payments shown are for customers who qualify to pay $0 Down, $0.00/mo for 36 months after bill credit, was $23.05/mo: 0% APR. Retail price: $829.99. Applicable on any Unlimited phone plan.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <img src="/assets/images/product/2.png" alt="product" />

            <div>
              <h3 className="text-2xl text-[#1D1D1F] font-bold pt-8 pb-2.5">
                What People Are Loving
              </h3>

              <EntryPoint
                id="#521882"
                skeletonType={EntryPointType.RECTANGLE}
                skeletonSize={EntryPointSize.STANDARD}
              />
            </div>

          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="flex justify-center items-center">
          <img src="/assets/images/product/3.png" className="hidden lg:block" alt="hero" />

          <img src="/assets/images/product/md/3.png" className="hidden sm:block lg:hidden" alt="hero" />

          <img src="/assets/images/product/sm/3.png" className="block sm:hidden" alt="hero" />
        </div>

      </section>

      <section className="container">

        <h2 className="section-heading">Customer Reviews</h2>

        <EntryPoint
          id="#095825"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />

      </section>

      <section className="container section-padding">

        <h2 className="section-heading">Why Buy Online?</h2>

        <div className="flex justify-center items-center">
          <img src="/assets/images/product/4.png" className="hidden lg:block" alt="hero" />

          <img src="/assets/images/product/md/4.png" className="hidden sm:block lg:hidden" alt="hero" />

          <img src="/assets/images/product/sm/4.png" className="block sm:hidden" alt="hero" />
        </div>

      </section>

    </main>
  );
};

export default Product;