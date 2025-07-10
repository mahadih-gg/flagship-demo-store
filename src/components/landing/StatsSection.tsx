import Counter from "../Counter";

const statsData = [
  {
    value: 57,
    suffix: "%",
    title: "Product Discovery",
    description: "Gen Z use short-form video to\nresearch products"
  },
  {
    value: 90,
    suffix: "%",
    title: "Watch Behavior",
    description: "Gen Z & Millennials now watch short-\nform videos weekly"
  },
  {
    value: 2.5,
    suffix: "×",
    title: "Engagement",
    description: "more engagement on short-form\nvs long-form content"
  },
  {
    value: 41,
    suffix: "%",
    title: "Screen Time",
    description: "Gen Z screen time is on\nTikTok & Reels"
  }
];

const StatsSection = () => {
  return (
    <section className="landing-container">
      <h2 className="landing-section-heading max-w-[400px] lg:max-w-[100%] mx-auto">Still not using the best growth asset on your site?</h2>
      <p className="landing-section-description pb-10 md:pb-11 2xl:pb-[60px] max-w-[450px] lg:max-w-[100%] mx-auto">
        Today's shoppers already spend most of their screen time watching short-form videos.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-11 lg:gap-8 3xl:gap-10 text-center">
        {statsData.map((stat, index) => (
          <div key={index}>
            <div className="text-[40px] md:text-[60px] 2xl:text-[80px] font-medium 3xl:font-semibold text-[#0066FF] leading-none mb-3 3xl:mb-4">
              <Counter to={stat.value} suffix={stat.suffix} />
            </div>
            <h3 className="font-medium text-[18px] 3xl:text-2xl text-[#1F2544] mb-2 3xl:mb-2.5">{stat.title}</h3>
            <p className="text-[#475467] text-base 3xl:text-xl max-w-[220px] 3xl:max-w-[275px] mx-auto">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;