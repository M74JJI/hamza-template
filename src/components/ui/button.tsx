import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center gap-x-3 whitespace-nowrap rounded-md text-sm rounded-lg shadow-md border-none cursor-pointer text-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer  transition-all duration-600 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "bg-[#039be5] bg-gradient-to-tr from-[#0163E0] to-[#18ACFE] hover:bg-gradient-to-tl text-white font-bold",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "text-[#fff] cursor-pointer bg-[#bedbfd] font-bold shadow-[#968f8f33] hover:bg-[#a4cefd] hover:shadow-lg hover:shadow-[#0000001a_0px_4px_6px_-1px,_#0000000f_0px_2px_4px_-1px]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "3d": "text-white bg-gradient-to-br from-[#00c6ff] to-[#0072ff] border-0 font-bold rounded-full shadow-[0px_4px_0px_#0072ff] transition-all duration-200 ease-in-out cursor-pointer hover:translate-y-[-2px] hover:shadow-[0px_6px_0px_#0072ff] active:translate-y-0 active:shadow-none active:bg-gradient-to-br active:from-[#0072ff] active:to-[#00c6ff]",
      },
      size: {
        default: "py-2.5 px-5",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = "button";
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

export { Button, buttonVariants };
