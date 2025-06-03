
interface PropsType {
  img: string;
  imgFolder?: string;
  className?: string;
  smClassName?: string;
  mdClassName?: string;
  lgClassName?: string;
}


const ResponsiveImage = ({ img, imgFolder = "", className = "", smClassName = "", mdClassName = "", lgClassName = "" }: PropsType) => {

  return (
    <div>
      <img src={`/assets/images/${imgFolder}/${img}`} className={`hidden 3xl:block ${className}`} alt="" />
      <img src={`/assets/images/${imgFolder}/lg/${img}`} className={`hidden 2xl:block 3xl:hidden ${lgClassName}`} alt="" />
      <img src={`/assets/images/${imgFolder}/lg/${img}`} className={`hidden sm:block 2xl:hidden ${mdClassName}`} alt="" />
      <img src={`/assets/images/${imgFolder}/sm/${img}`} className={`block sm:hidden ${smClassName}`} alt="" />
    </div>
  );
};

export default ResponsiveImage;