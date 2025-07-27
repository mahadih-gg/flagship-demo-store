import ClickIcon from "../svg/ClickIcon";
import ClipBoardIcon from "../svg/ClipBoardIcon";
import ClockIcon from "../svg/ClockIcon";

const ExpectSection = () => {
  const titleSecSection =
    'Demo <br /> Request <br class="max-md:hidden" /> Process';
  return (
    <div className=" rounded-[36px] bg-[#F1F4F7] ">
      <div className="flex flex-col lg:flex-row items-start py-16 pl-10 pr-16 3xl:px-[92px] 2xl:px-20 2xl:py-32 xl:px-16 lg:py-24 xl:py-32 gap-14 lg:gap-16 xl:gap-24 2xl:gap-32 3xl:py-36">
        <div className="flex flex-col items-start">
          <h3
            className="font-42px mb-2 font-semibold text-[#15234E]"
            dangerouslySetInnerHTML={{ __html: titleSecSection }}
          ></h3>
        </div>
        <div className="flex flex-col gap-24 lg:gap-6 xl:gap-10 2xl:gap-16 3xl:gap-24 lg:flex-row">
          {/* Step 1 */}
          <div className="flex flex-col items-start">
            <div className="flex gap-3 3xl:gap-4">
              <div>
                <ClockIcon className="mt-2 lg:mt-1 3xl:mt-1.5 size-6 lg:size-5 3xl:size-6" />
              </div>
              <div>
                <div className="font-28px max-lg:!text-[28px] te mb-2 font-semibold text-[#15234E]">
                  Quick Response
                </div>
                <p className="font-22px text-[#15234E]">
                  Once you request a demo, our team will contact you within 24
                  hours to schedule a session.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start">
            <div className="flex gap-3 3xl:gap-4">
              <div>
                <ClickIcon className="mt-2 lg:mt-1 3xl:mt-1.5 size-6 lg:size-5 3xl:size-6" />
              </div>
              <div>
                <div className="font-28px max-lg:!text-[28px] mb-2 font-semibold text-[#15234E]">
                  Tailored Preparation
                </div>
                <p className="font-22px text-[#15234E]">
                  Before the session, we’ll review your business and
                  requirements to customize your demo.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start">
            <div className="flex gap-3 3xl:gap-4">
              <div>
                <ClipBoardIcon className="mt-2 lg:mt-1 3xl:mt-1.5 size-6 lg:size-5 3xl:size-6" />
              </div>

              <div>
                <div className="font-28px max-lg:!text-[28px] mb-2 font-semibold text-[#15234E]">
                  Looking Ahead
                </div>
                <p className="font-22px text-[#15234E]">
                  We’re excited to connect with you and help elevate your
                  business!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpectSection;
