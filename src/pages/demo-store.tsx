import { AnimatePresence, motion } from "motion/react";
import Contact from "../components/demo-store/Contact";
import DemoShowcase from "../components/demo-store/DemoShowcase";
import DemoStoreFooter from "../components/demo-store/DemoStoreFooter";
import ExpectSection from "../components/demo-store/ExpectSection";
import HorizonTextLogo from "../components/svg/HorizonTextLogo";
import { ButtonDemoStore } from "../components/ui/ButtonDemoStore";

const DemoStorePage = () => {

  const textMotion = {
    initial: { opacity: 0, y: 10 },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.6,
    },
    viewport: { once: true, amount: 0.3 },
  }

  return (
    <main className="demo-store-wrapper">
      <AnimatePresence>

        <header className="demo-store-container py-4 sm:py-5 xl:py-4 3xl:py-5">
          <nav>
            <HorizonTextLogo />
          </nav>
        </header>

        <section id="demos" className="demo-store-container pt-[90px] sm:pt-[116px] xl:pt-[120px] 3xl:pt-[140px]">
          <div className="text-left lg:text-center mb-[60px] sm:mb-[80px] xl:mb-[75px] 3xl:mb-[100px]">
            <motion.h1 className="demo-store-section-heading mb-5 sm:mb-6 xl:mb-9 3xl:mb-12"
              {...textMotion}
            >
              Experience Our Demos in Action
            </motion.h1>
            <motion.p className="text-[#15234E] text-xl sm:text-2xl xl:text-xl 3xl:text-[28px] tracking-normal"
              {...textMotion}
            >
              Click, play, and feel how Horizon's Super Engagement Engine works across verticals.
            </motion.p>
          </div>

          <DemoShowcase />
        </section>

        <section className="demo-store-container demo-store-section-padding">
          <motion.h2
            id="contact"
            className="demo-store-section-heading mb-5 sm:mb-6 xl:mb-9 3xl:mb-12 text-left lg:text-center"
            {...textMotion}
          >
            Interested to see how Horizon Shorts <br className="hidden lg:block" />
            will look on your digital assets?
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl xl:text-xl 3xl:text-[28px] tracking-normal mb-[60px] sm:mb-[100px] xl:mb-[165px] 3xl:mb-[220px] text-left lg:text-center"
            {...textMotion}
          >
            Let us create a custom example for you - see exactly what Horizon
            can do to grow your business.
          </motion.p>
          <Contact />
        </section>

        <section className="demo-store-container">
          <motion.h2 className="demo-store-section-heading mb-[60px] sm:mb-[80px] xl:mb-[75px] 3xl:mb-[100px]"
            {...textMotion}
          >
            What to expect
          </motion.h2>

          <ExpectSection />
        </section>

        <section className="demo-store-container demo-store-section-padding">
          <motion.h2
            className="demo-store-section-heading text-center"
            {...textMotion}
          >
            Become a Super <br className="hidden sm:block lg:hidden" /> Engagement <br className="hidden lg:block" />
            Pioneer.  <br className="hidden sm:block lg:hidden" /> Try Horizon for Free.
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-10 sm:mt-[100px] xl:mt-[42px] 3xl:mt-[56px]">
            <ButtonDemoStore className="w-full lg:w-52" size="lg" asChild>
              <a href="https://horizonexp.com/products">Explore Horizon</a>
            </ButtonDemoStore>
            <ButtonDemoStore className="w-full lg:w-52" size="lg" variant="blueOutline" asChild>
              <a href="#contact">Get a Demo</a>
            </ButtonDemoStore>
          </div>
        </section>

        <footer className="w-full bg-[#15234E] pt-[60px] pb-[45px] xs-sm:pt-[72px] xs-sm:pb-[54px] lg:pb-[52px] lg:pt-[70px] 2xl:pb-[60px] 2xl:pt-20 3xl:pb-20 3xl:pt-[106px] text-white">
          <DemoStoreFooter />
        </footer>
      </AnimatePresence>
    </main>
  );
};

export default DemoStorePage;