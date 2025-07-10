import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";

// Define the form data type
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
};

const inputClass =
  "w-full h-[45px] 3xl:h-[60px] px-4 text-lg rounded-lg border border-[#98A1BC] focus:outline-none focus:ring-2 focus:ring-[#0065FF] font-helvetica-neue transition-all duration-200";

const errorInputClass =
  "w-full h-[45px] 3xl:h-[60px] px-4 text-lg rounded-lg border border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 font-helvetica-neue transition-all duration-200";

const GetAccessModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      console.log("Form data:", data);
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form and close modal on success
      reset();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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

            <form onSubmit={handleSubmit(onSubmit)} className="text-[#1F2544] flex flex-col gap-[30px] 3xl:gap-10 text-lg 2xl:text-2xl leading-[130%]">

              <div className="relative">
                <label className="block mb-3">First Name*</label>
                <input
                  className={errors.firstName ? errorInputClass : inputClass}
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: { value: 2, message: "First name must be at least 2 characters" },
                    maxLength: { value: 50, message: "First name must be less than 50 characters" }
                  })}
                />
                {errors.firstName && (
                  <p className="absolute text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div className="relative">
                <label className="block mb-3">Last Name*</label>
                <input
                  className={errors.lastName ? errorInputClass : inputClass}
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: { value: 2, message: "Last name must be at least 2 characters" },
                    maxLength: { value: 50, message: "Last name must be less than 50 characters" }
                  })}
                />
                {errors.lastName && (
                  <p className="absolute text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>

              <div className="relative">
                <label className="block mb-3">Email Address*</label>
                <input
                  className={errors.email ? errorInputClass : inputClass}
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="absolute text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="relative">
                <label className="block mb-3">Company Name*</label>
                <input
                  className={errors.companyName ? errorInputClass : inputClass}
                  type="text"
                  {...register("companyName", {
                    required: "Company name is required",
                    minLength: { value: 2, message: "Company name must be at least 2 characters" },
                    maxLength: { value: 100, message: "Company name must be less than 100 characters" }
                  })}
                />
                {errors.companyName && (
                  <p className="absolute text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                )}
              </div>

              <Button type="submit" isLoading={isSubmitting} className="w-full">
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