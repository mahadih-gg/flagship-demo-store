
interface EcomHeaderProps {
  title: string;
}

const EcomHeader = ({ title }: EcomHeaderProps) => {
  return (
    <div className="flex justify-between items-center pb-6 lg:pb-[45px] 2xl:pb-[60px]">
      <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[52px] font-medium text-[#1F2544]">{title}</h2>
      <a href="#" className="text-xs md:text-sm 2xl:text-base text-[#1F2544] underline uppercase">SHOP ALL</a>
    </div>
  );
};

export default EcomHeader;