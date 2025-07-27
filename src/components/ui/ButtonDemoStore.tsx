"use client";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#0032FD] text-white hover:opacity-90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#0032FD] bg-background hover:bg-accent hover:text-accent-foreground",
        outlineSecondary: "border border-[#1C2B33] hover:bg-gray-100/30",
        secondary: "bg-white text-[#0032FD] hover:opacity-90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        none: "",
        blueOutline:
          "rounded-full border-2 border-[#34485414] bg-white text-[#0032FD] hover:bg-gray-50",
      },
      size: {
        default:
          "font-22px lg:px-[28px] lg:py-[18px] py-[1.125rem] px-[1.75rem] leading-normal w-full md:max-w-[200px]",
        sm: "font-16px h-6 px-2 2xl:h-7 3xl:h-8 leading-normal",
        md: "font-20px px-4 h-9 3xl:h-10 leading-normal",
        lg: "font-22px max-md:h-14 px-6 h-11 3xl:h-[52px] leading-normal",
        "2xl":
          "font-28px h-16 px-6 xs:h-20 2xl:h-[60px] 3xl:h-20 3xl:px-[30px] leading-normal",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonDemoStoreProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "outlineSecondary" | "secondary" | "ghost" | "link" | "none" | "blueOutline";
  size?: "default" | "sm" | "md" | "lg" | "2xl" | "icon";
  asChild?: boolean;
}

const ButtonDemoStore = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }: ButtonDemoStoreProps, ref: React.Ref<HTMLButtonElement>) => {
    const Comp = asChild ? Slot : "button";
    const [isMac, setIsMac] = React.useState(false);

    React.useEffect(() => {
      setIsMac(window.navigator.platform.toLowerCase().includes("mac"));
    }, []);

    const shouldAddPadding = !isMac && (size === "md" || size === "lg");
    const nonMacPadding = shouldAddPadding ? "pb-0.5" : "pt-0.5";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          nonMacPadding
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonDemoStore.displayName = "ButtonDemoStore";

export { ButtonDemoStore, buttonVariants };

