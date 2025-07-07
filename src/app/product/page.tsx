import ClientEntryPoint from '@/components/ClientEntryPoint';
import ResponsiveImage from '@/components/ResponsiveImage';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const EntryPointSize = {
  BOLD: 'bold',
  STANDARD: 'standard'
} as const;

const EntryPointType = {
  RECTANGLE: 'rectangle',
  CIRCLE: 'circle'
} as const;

const ProductPage = () => {
  return (
    <main>
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 2xl:gap-28">

          <div>
            <div className="relative flex justify-center items-center rounded-xl bg-[#EFF5F9] py-[24px] sm:py-[95px] lg:py-[30px] xl:py-[85px]">

              <button className="absolute bg-[#15234E]/10 text-white rounded-full flex justify-center items-center size-5 xl:size-10 left-4 lg:left-6 2xl:left-10 top-1/2 -translate-y-1/2">
                <GoChevronLeft className="text-lg" />
              </button>

              <button className="absolute bg-[#15234E]/10 text-white rounded-full flex justify-center items-center size-5 xl:size-10 right-4 lg:right-6 2xl:right-10 top-1/2 -translate-y-1/2">
                <GoChevronRight className="text-lg" />
              </button>

              <Image
                src="/assets/images/product/1.webp"
                alt="Product main image"
                width={443}
                height={443}
                className="w-[200px] sm:w-[252px] lg:w-[332px] 2xl:w-[443px] h-auto"
                priority
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl xl:text-xl 2xl:text-2xl text-[#1D1D1F] font-bold pt-11">
                What&apos;s New in iPhone 16
              </h3>
              <ClientEntryPoint
                id="#842010"
                skeletonType={EntryPointType.CIRCLE}
                skeletonSize={EntryPointSize.STANDARD}
              />
              <div className="hidden md:block pt-6 xl:pt-14 2xl:pt-16">
                <div className="flex justify-start items-center pb-4 2xl:pb-6 gap-1">
                  <h3 className="text-xl lg:text-2xl text-[#1D1D1F] font-bold">Learn More About this Device</h3>
                  <span className="lg:text-2xl pt-2">
                    <FiChevronRight strokeWidth="2.4" />
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-[#D9E0E5] font-normal">Monthly payments shown are for customers who qualify to pay $0 Down, $0.00/mo for 36 months after bill credit, was $23.05/mo: 0% APR. Retail price: $829.99. Applicable on any Unlimited phone plan.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <ResponsiveImage
              img="2.webp"
              imgFolder="product"
              alt="Product section 2"
            />

            <div>
              <h3 className="text-2xl md:text-4xl xl:text-xl 2xl:text-2xl  text-[#1D1D1F] font-bold pt-8 pb-2.5">
                What People Are Loving
              </h3>

              <ClientEntryPoint
                id="#473811"
                skeletonType={EntryPointType.RECTANGLE}
                skeletonSize={EntryPointSize.STANDARD}
              />
            </div>

          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="flex justify-center items-center">
          <ResponsiveImage
            img="3.webp"
            imgFolder="product"
            alt="Product section 3"
          />
        </div>
      </section>

      <section className="container">
        <h2 className="section-heading">You May Also Like These Products</h2>
        <ClientEntryPoint
          id="#252249"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </section>

      <section className="container section-padding">
        <h2 className="section-heading">Why Buy Online?</h2>
        <div className="flex justify-center items-center">
          <ResponsiveImage
            img="4.webp"
            imgFolder="product"
            alt="Why buy online"
          />
        </div>
      </section>

    </main>
  );
};

export default ProductPage;