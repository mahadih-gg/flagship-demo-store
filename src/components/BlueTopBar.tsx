
type PropsType = {
  containerClass: string;
}

const BlueTopBar = ({ containerClass }: PropsType) => {
  return (
    <div className="bg-[#1F2544] h-9 sm:h-6 lg:h-8 2xl:h-11 flex items-center">
      <div className={containerClass}>
        <p className="text-white font-medium text-center py-3 text-xs sm:text-sm md:text-base 2xl:text-lg">Demo Store • Powered by Horizon • Sign up for Free Trial</p>
      </div>
    </div>
  );
};

export default BlueTopBar;