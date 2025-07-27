import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import Contact from "../../components/demo-store/Contact";
import DemoShowcase from "../../components/demo-store/DemoShowcase";
import ExpectSection from "../../components/demo-store/ExpectSection";
import { ButtonDemoStore } from "../../components/ui/ButtonDemoStore";

const DemoStore = () => {
  return (
    <main className="demo-store-wrapper">
      <AnimatePresence>
        <section className="demo-store-container">
          <div className="text-left md:text-center mb-[60px] sm:mb-[80px] xl:mb-[75px] 3xl:mb-[100px]">
            <motion.h1 className="demo-store-section-heading mb-5 sm:mb-6 xl:mb-9 3xl:mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: 'just',
                duration: 0.8,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Experience Our Demos in Action
            </motion.h1>
            <motion.p className="text-[#15234E] text-xl sm:text-2xl xl:text-xl 3xl:text-3xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: 'just',
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Click, play, and feel how Horizon's Super Engagement Engine works across verticals.
            </motion.p>
          </div>

          <DemoShowcase />
        </section>

        <section className="demo-store-container demo-store-section-padding-top text-left md:text-center">
          <motion.h2
            className="demo-store-section-heading mb-5 sm:mb-6 xl:mb-9 3xl:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'just',
                duration: 0.8,
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Interested to see how Horizon Shorts <br />
            will look on your digital assets?
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl xl:text-xl 3xl:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: 'just',
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Let us create a custom example for you - see exactly what Horizon
            can do to grow your business.
          </motion.p>
        </section>

        <section className="demo-store-container demo-store-section-padding">
          <Contact />
        </section>

        <section className="demo-store-container">
          <motion.h2 className="demo-store-section-heading mb-[60px] sm:mb-[80px] xl:mb-[75px] 3xl:mb-[100px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: 'just',
              duration: 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            What to expect
          </motion.h2>

          <ExpectSection />
        </section>

        <section className="demo-store-container demo-store-section-padding">
          <motion.h2
            className="demo-store-section-heading text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'just',
                duration: 0.8,
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Become a Super Engagement <br />
            Pioneer. Try Horizon for Free.
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 sm:mt-[100px] xl:mt-[42px] 3xl:mt-[56px]">
            <ButtonDemoStore className="w-full md:w-52 " size="lg" asChild>
              <Link to="/products">Explore Horizon</Link>
            </ButtonDemoStore>
            <ButtonDemoStore className="w-full md:w-52  " size="lg" variant="blueOutline" asChild>
              <Link to="/get-demo">Get a Demo</Link>
            </ButtonDemoStore>
          </div>
        </section>
      </AnimatePresence>
    </main>
  );
};

export default DemoStore;