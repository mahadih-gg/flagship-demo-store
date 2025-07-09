const DemoSection = () => {
  return (
    <section className="landing-container landing-section-padding-top">
      <h2 id="demo-section" className="landing-section-heading">Watch a demo of Horizon</h2>
      <p className="landing-section-description pb-10 md:pb-11 2xl:pb-[60px]">
        Watch a short demo of our beta product
      </p>

      <div className="bg-gray-100 w-full md:w-3/4 aspect-video rounded-2xl mx-auto">
        {/* Demo video placeholder */}
      </div>
    </section>
  );
};

export default DemoSection;
