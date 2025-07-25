import useWindowSize from "../hooks/useWindowSize";

interface PropsType {
  img: string;
  imgFolder?: string;
  className?: string;
  alt?: string;
}

const ResponsiveImage = ({ img, imgFolder = "", className = "", alt = "" }: PropsType) => {

  const { width } = useWindowSize();

  return (
    <>
      {width &&
        <>
          {width >= 1536 &&
            <img
              src={`/assets/images/${imgFolder}/${img}`}
              className={`hidden 2xl:block ${className}`}
              alt={alt}
              loading="lazy"
              decoding="async"
            />
          }
          {width >= 1024 && width < 1536 &&
            <img
              src={`/assets/images/${imgFolder}/lg/${img}`}
              className={`hidden lg:block 2xl:hidden ${className}`}
              alt={alt}
              loading="lazy"
              decoding="async"
            />
          }
          {width >= 640 && width < 1024 &&
            <img
              src={`/assets/images/${imgFolder}/md/${img}`}
              className={`hidden sm:block lg:hidden ${className}`}
              alt={alt}
              loading="lazy"
              decoding="async"
            />
          }
          {width < 640 &&
            <img
              src={`/assets/images/${imgFolder}/sm/${img}`}
              className={`block sm:hidden ${className}`}
              alt={alt}
              loading="lazy"
              decoding="async"
            />
          }
        </>
      }
    </>
  );
};

export default ResponsiveImage;