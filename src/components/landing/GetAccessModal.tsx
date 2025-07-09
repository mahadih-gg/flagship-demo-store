import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/Button";

const inputClass =
  "w-full h-[45px] 3xl:h-[60px] px-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065FF] font-helvetica-neue transition-all duration-200";

const GetAccessModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-[30px] 3xl:p-10 w-[calc(100%-32px)] md:w-[510px] 3xl:w-[680px] font-helvetica-neue"
          >
            <h2 className="text-[32px] md:text-[48px] 3xl:text-[64px] font-medium text-[#1F2544] text-center mb-[18px] 3xl:mb-6 leading-none">Get Early Access</h2>
            <p className="text-center text-base md:text-lg 3xl:text-2xl text-[#475467] mb-[30px] 3xl:mb-10">Unlock a free trial of our commercial product</p>

            <form className="text-[#1F2544] flex flex-col gap-[30px] 3xl:gap-10 text-lg 2xl:text-2xl leading-[130%]">

              <div>
                <label className="block mb-3">First Name*</label>
                <input className={inputClass} type="text" required />
              </div>

              <div>
                <label className="block mb-3">Last Name*</label>
                <input className={inputClass} type="text" required />
              </div>

              <div>
                <label className="block mb-3">Email Address*</label>
                <input className={inputClass} type="email" required />
              </div>

              <div>
                <label className="block mb-3">Company Name*</label>
                <input className={inputClass} type="text" required />
              </div>

              <Button type="submit" className="w-full">
                Request Early Access
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetAccessModal;