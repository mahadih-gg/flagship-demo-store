import { cn } from "../../utils";

interface EcomHeaderProps {
  title: string;
  className?: string;
}

const EcomHeader = ({ title, className }: EcomHeaderProps) => {
  return (
    <div className={cn("flex justify-between items-center pb-6 lg:pb-[45px] 2xl:pb-[60px]", className)}>
      <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[52px] font-semibold text-[#1F2544]">{title}</h2>
    </div>
  );
};

export default EcomHeader;