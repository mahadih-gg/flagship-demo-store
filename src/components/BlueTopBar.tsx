
type PropsType = {
  containerClass: string;
  text?: string;
  children?: React.ReactNode;
}

const BlueTopBar = ({ containerClass, text = "Powered by Horizon • Request Free Trial", children }: PropsType) => {
  return (
    <div className="bg-[#1F2544] h-9 sm:h-6 lg:h-8 2xl:h-11 flex items-center">
      <div className={containerClass}>
        <p className="text-white text-center py-3 text-sm sm:text-xs lg:text-sm 2xl:text-lg font-neue-plak">{children ?? text}</p>
      </div>
    </div>
  );
};

export default BlueTopBar;