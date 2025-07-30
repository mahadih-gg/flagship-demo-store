import { cn } from "../../utils";

interface DailyStarHeadingProps {
  title: string;
  titleClassName?: string;
  placeholder?: string;
  placeholderClassName?: string;
  arrowClassName?: string;
  hasLine?: boolean;
}


const DailyStarHeading = ({ title, titleClassName, placeholder, placeholderClassName, arrowClassName, hasLine = true }: DailyStarHeadingProps) => {
  return (
    <div className="relative overflow-hidden">
      {hasLine && <div className="absolute top-1/2 -translate-y-1/2 left-0 h-2 w-full border-y-[1.4px] border-[#436696] mt-1" />}
      <div className="relative flex items-center justify-center text-center gap-3 z-10 ">

        <span className={cn(
          "text-8xl font-bold text-[#F2F4F7] text-[42px] leading-[58px] sm:text-[66px] sm:leading-[90px] xl:text-[72px] xl:leading-[90px] 3xl:text-[96px] 3xl:leading-[120px] tracking-[-1.92px] bg-white px-2 whitespace-nowrap",
          placeholderClassName
        )}
        >
          {placeholder ?? title}
        </span>

        <div className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center gap-1 sm:gap-2">
          <h2 className={cn("whitespace-nowrap text-[#1D4340] text-[24px] leading-[44px] sm:text-[36px] sm:leading-[44px] xl:text-[36px] xl:leading-[44px] 3xl:text-[48px] 3xl:leading-[58px] tracking-[-0.96px] font-bold", titleClassName)}>
            {title}
          </h2>

          <span className={cn("block border-r-2 3xl:border-r-4 border-b-2 3xl:border-b-4 border-[#436696] size-2.5 sm:size-3 3xl:size-4 -rotate-45 mt-2 sm:mt-4", arrowClassName)} />
        </div>
      </div>

    </div>
  );
};

export default DailyStarHeading;