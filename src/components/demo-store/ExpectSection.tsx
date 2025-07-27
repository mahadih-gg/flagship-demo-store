import ClickIcon from "../svg/ClickIcon";
import ClipBoardIcon from "../svg/ClipBoardIcon";
import ClockIcon from "../svg/ClockIcon";

const stepsData = [
  {
    id: 1,
    icon: <ClockIcon className="mt-2 lg:mt-1 3xl:mt-1.5 size-5 sm:size-8 xl:size-5 3xl:size-7" />,
    title: "Quick Response",
    description: "Once you request a demo, our team will contact you within 24 hours to schedule a session.",
  },
  {
    id: 2,
    icon: <ClickIcon className="mt-2 lg:mt-1 3xl:mt-1.5 size-5 sm:size-8 xl:size-5 3xl:size-7" />,
    title: "Tailored Preparation",
    description: "Before the session, we’ll review your business and requirements to customize your demo.",
  },
  {
    id: 3,
    icon: <ClipBoardIcon className="mt-2 lg:mt-1 3xl:mt-1.5 size-5 sm:size-8 xl:size-5 3xl:size-7" />,
    title: "Looking Ahead",
    description: "We’re excited to connect with you and help elevate your business!",
  },
];

const ExpectSection = () => {
  return (
    <div className=" rounded-[36px] bg-[#F1F4F7] ">
      <div className="flex flex-col lg:flex-row items-start py-16 pl-10 pr-16 3xl:px-[92px] 2xl:px-20 2xl:py-32 xl:px-16 lg:py-24 xl:py-32 gap-14 lg:gap-16 xl:gap-24 2xl:gap-32 3xl:py-36">
        <div className="flex flex-col items-start">
          <h3 className="text-4xl sm:text-6xl xl:text-4xl 3xl:text-5xl mb-2 font-semibold text-[#15234E]">
            Demo <br /> Request <br className="hidden lg:block" /> Process
          </h3>
        </div>
        <div className="flex flex-col gap-24 lg:gap-6 xl:gap-10 2xl:gap-16 3xl:gap-24 lg:flex-row">
          {
            stepsData.map((step) => (
              <div className="flex flex-col items-start">
                <div className="flex gap-3 sm:gap-7 lg:gap-3 3xl:gap-4">
                  <div>
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-2xl sm:text-[42px] xl:text-xl 3xl:text-[28px] mb-[18px] sm:mb-7 xl:mb-4 3xl:mb-5 font-semibold text-[#15234E] tracking-tight">
                      {step.title}
                    </p>
                    <p className="text-xl sm:text-[32px] xl:text-base 3xl:text-[22px] text-[#15234E] tracking-tight lg:max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ExpectSection;
