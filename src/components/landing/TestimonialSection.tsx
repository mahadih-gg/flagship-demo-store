import { motion } from "motion/react";

const TestimonialSection = () => {
  return (
    <section className="landing-container text-center text-[#1F2544] py-[120px] lg:py-[180px] 3xl:py-[240px]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1038px] 3xl:max-w-[1385px] mx-auto font-medium text-[32px] lg:text-[48px] 3xl:text-[64px] leading-[36px] lg:leading-[56px] 3xl:leading-[72px] pb-[60px] lg:pb-[30px] 3xl:pb-10"
      >
        "Horizon Shorts turned our store into a conversion machine - CTR is up 2x, and our GMV lift paid for itself in weeks."
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-medium text-lg 3xl:text-2xl pb-[6px] 3xl:pb-2"
      >Ammar Foley</motion.p>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base 3xl:text-xl text-[#475467]"
      >UX Designer, Telenor</motion.span>
    </section>
  );
};

export default TestimonialSection;
