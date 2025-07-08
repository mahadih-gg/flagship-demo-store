
interface PropsType {
  img: string;
  imgFolder?: string;
  className?: string;
  alt?: string;
}

const ResponsiveImage = ({ img, imgFolder = "", className = "", alt = "" }: PropsType) => {
  return (
    <>
      <img src={`/assets/images/${imgFolder}/${img}`} className={`hidden 2xl:block ${className}`} alt={alt} />
      <img src={`/assets/images/${imgFolder}/lg/${img}`} className={`hidden lg:block 2xl:hidden ${className}`} alt={alt} />
      <img src={`/assets/images/${imgFolder}/md/${img}`} className={`hidden sm:block lg:hidden ${className}`} alt={alt} />
      <img src={`/assets/images/${imgFolder}/sm/${img}`} className={`block sm:hidden ${className}`} alt={alt} />
    </>
  );
};

export default ResponsiveImage;