import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "border border-solid rounded",
  {
    variants: {
      variant: {
        default: "w-full bg-blue-500 text-white hover:bg-blue-600 cursor-pointer",
        destructive: "w-full bg-red-500 text-white hover:bg-red-600 cursor-pointer",
        outline: "w-full border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 cursor-pointer",
        secondary: "w-full bg-gray-500 text-white hover:bg-gray-600 cursor-pointer",
        ghost: "w-full bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer",
        link: "w-full bg-transparent text-blue-500 hover:text-blue-600 hover:underline cursor-pointer",
        accept: "w-full bg-green-500 text-white hover:bg-green-600 cursor-pointer",
        agree: "w-full bg-sky-500 text-white hover:bg-sky-600 cursor-pointer",
        disagree: "w-full bg-red-500 text-white hover:bg-red-600 cursor-pointer"
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof buttonVariants> {
    asChild?: boolean;
  }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";