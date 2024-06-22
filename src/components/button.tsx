import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const ButtonStyles = cva([
    "transition-colors"
], {
    variants: {
        variant: {
            default: ["bg-background", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-grey-100"]
        },
        size: {
            default: ["rounded", "p-2"],
            icon: [
                "rounded-full",
                "w-10",
                "h-10",
                "flex",
                "items-center",
                "justify-center",
                "p-2.5"
            ],
        }

    },
    defaultVariants: {
        variant: "default",
        size: "default"

    }

})

type ButtonProps = VariantProps<typeof ButtonStyles> & ComponentProps<"button">

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
    return (
        <button {...props} className={twMerge(ButtonStyles({ variant, size }), className)} />
    );
}

export default Button;
