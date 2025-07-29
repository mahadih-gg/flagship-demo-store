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
    <div className="relative">
      {hasLine && <div className="absolute top-1/2 -translate-y-1/2 left-0 h-2 w-full border-y-[1.4px] border-[#436696] mt-1" />}
      <div className="relative flex items-center justify-center text-center gap-3 z-10 ">

        <span className={cn(
          "text-8xl font-bold text-[#F2F4F7] xl:text-[72px] xl:leading-[90px] 3xl:text-[96px] 3xl:leading-[120px] tracking-[-1.92px] bg-white px-2",
          placeholderClassName
        )}
        >
          {placeholder ?? title}
        </span>

        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2">
          <h2 className={cn("text-[#1D4340] text-4xl 3xl:text-5xl tracking-[-0.96px] font-bold", titleClassName)}>
            {title}
          </h2>

          <span className={cn("block border-r-2 3xl:border-r-4 border-b-2 3xl:border-b-4 border-[#436696] size-3 3xl:size-4 -rotate-45 mt-4", arrowClassName)} />
        </div>
      </div>

    </div>
  );
};

export default DailyStarHeading;