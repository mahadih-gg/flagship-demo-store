import { motion } from "framer-motion";
import { Link } from "react-router";
import { ButtonDemoStore } from "../ui/ButtonDemoStore";

const DemoShowcase = () => {
  const demos = [
    {
      title: "Telecom",
      image: "/assets/images/demo-store/demo-telco.webp",
      link: "/telco",
      description: "Mobile phone and internet provider demo"
    },
    {
      title: "Ecommerce",
      image: "/assets/images/demo-store/demo-ecom.webp",
      link: "/ecom",
      description: "Beauty and personal care products demo"
    },
    {
      title: "Sports",
      image: "/assets/images/demo-store/demo-sports.webp",
      link: "/sports",
      description: "Sports league and team website demo"
    }
  ];

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-9 sm:gap-16 xl:gap-3 3xl:gap-5">
      {demos.map((demo, i) => (
        <motion.div key={i} className="relative flex flex-col items-center justify-between px-3 sm:px-4 xl:px-5 3xl:px-8 pt-[18px] sm:pt-[30px] xl:pt-[18px] 3xl:pt-[26px] group bg-[#F1F4F7] rounded-[36px] overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.2
          }}
        >
          <h3 className="inline-block mx-auto rounded-full text-center font-semibold text-[#15234E] bg-white px-3 py-1 text-xs sm:text-xl xl:text-xs 3xl:text-base mb-6 sm:mb-9 xl:mb-6 3xl:mb-8">
            {demo.title}
          </h3>
          <Link to={demo.link} className="block">
            <img
              src={demo.image}
              alt={`${demo.title} Demo`}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105 lg:group-hover:scale-110"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-40 group-hover:opacity-100 transition-all duration-300 hidden lg:flex items-center justify-center">
              <ButtonDemoStore className="h-10 3xl:h-14 flex items-center justify-center text-base 3xl:text-[22px] px-10 xl:px-5 3xl:px-7 py-0">View Demo</ButtonDemoStore>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default DemoShowcase; 