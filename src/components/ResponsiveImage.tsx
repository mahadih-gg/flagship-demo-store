import Image from 'next/image';

interface PropsType {
  img: string;
  imgFolder?: string;
  alt: string;
  className?: string;
  smClassName?: string;
  mdClassName?: string;
  lgClassName?: string;
  priority?: boolean;
  quality?: number;
}

const ResponsiveImage = ({
  img,
  imgFolder = "",
  alt,
  className = "",
  smClassName = "",
  mdClassName = "",
  lgClassName = "",
  priority = false,
  quality = 85
}: PropsType) => {

  console.log(
    `/assets/images/${imgFolder}/${img}`,
    `/assets/images/${imgFolder}/lg/${img}`,
    `/assets/images/${imgFolder}/md/${img}`,
    `/assets/images/${imgFolder}/sm/${img}`
  );

  return (
    <div className="w-full">
      <Image
        src={`/assets/images/${imgFolder}/${img}`}
        alt={alt}
        width={1920}
        height={1080}
        sizes="(min-width: 1536px) 100vw"
        className={`w-full h-auto hidden 2xl:block ${className}`}
        priority={priority}
        quality={quality}
      />
      <Image
        src={`/assets/images/${imgFolder}/lg/${img}`}
        alt={alt}
        width={1024}
        height={576}
        sizes="(min-width: 1024px) and (max-width: 1535px) 100vw"
        className={`w-full h-auto hidden lg:block 2xl:hidden ${lgClassName}`}
        priority={priority}
        quality={quality}
      />
      <Image
        src={`/assets/images/${imgFolder}/md/${img}`}
        alt={alt}
        width={768}
        height={432}
        sizes="(min-width: 640px) and (max-width: 1023px) 100vw"
        className={`w-full h-auto hidden sm:block lg:hidden ${mdClassName}`}
        priority={priority}
        quality={quality}
      />
      <Image
        src={`/assets/images/${imgFolder}/sm/${img}`}
        alt={alt}
        width={640}
        height={360}
        sizes="(max-width: 639px) 100vw"
        className={`w-full h-auto block sm:hidden ${smClassName}`}
        priority={priority}
        quality={quality}
      />
    </div>
  );
};

export default ResponsiveImage;