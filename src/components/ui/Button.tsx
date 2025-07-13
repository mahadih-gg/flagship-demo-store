import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "../../utils";

type ButtonProps = {
  children: React.ReactNode;
  link?: string;
  variant?: "default" | "ghost";
  size?: "default" | "xl";
  isLoading?: boolean;
  className?: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles = {
  default:
    "bg-[#0065FF] text-white border font-normal border-[#0065FF] hover:bg-[#0052CC]",
  ghost:
    "bg-transparent text-[#0052CC] font-normal text-base 2xl:text-xl underline",
};

const sizeStyles = {
  default: "h-12 2xl:h-16 px-[18px] xl:px-5 3xl:px-9 text-base 2xl:text-xl rounded-lg",
  xl: "h-12 lg:h-14 2xl:h-[76px] px-[18px] md:px-9 2xl:px-[52px] text-base 2xl:text-xl rounded-none",
};

const Button = ({
  children,
  className,
  variant = "default",
  size = "default",
  isLoading,
  icon,
  link,
  ...props
}: ButtonProps) => {

  if (link) {
    return (
      <a
        href={link}
        className={cn(
          "inline-flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-helvetica-neue",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
      >
        {isLoading ? <span className="mr-2">Loading...</span> : null}
        {children}
        {icon && <span className="ml-2 2xl:ml-2.5">{icon}</span>}
      </a>
    )
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-helvetica-neue",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {children}
      {icon && <span className="ml-2 2xl:ml-2.5">{icon}</span>}
      {isLoading ? (
        <span className="ml-2">
          <AiOutlineLoading3Quarters className="animate-spin" />
        </span>
      ) : null}
    </button>
  );
};

export default Button;