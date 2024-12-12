import { FC, ReactNode, SVGProps } from "react";
import cn from "classnames";

type ButtonProps = {
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "default";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  children: ReactNode;
  onClick?: () => void;
  startIcon?: FC<SVGProps<SVGSVGElement>>;
  endIcon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  type = "button",
  variant = "primary",
  children,
  onClick,
  startIcon,
  endIcon,
  size = "small",
  className,
  disabled,
}) => {
  const StartIcon = startIcon;
  const EndIcon = endIcon;

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "font-semibold rounded-[15px] flex items-center justify-center",
        {
          ["px-[101px] py-[18px]"]: size === "large",
          ["px-[76px] py-[15px]"]: size === "medium",
          ["px-[18px] py-[11px]"]: size === "small",
          ["bg-primary text-white font-bold transition duration-200 hover:shadow-lg"]:
            variant === "primary" && !disabled,
          ["bg-secondary text-primary transition duration-200 hover:shadow-lg"]:
            variant === "secondary" && !disabled,
          ["bg-white text-primary border border-primary transition duration-200 hover:shadow-lg"]:
            variant === "default" && !disabled,
          ["bg-grey text-white"]: disabled,
        },
        className ?? ""
      )}
      disabled={disabled}
    >
      {StartIcon ? (
        <StartIcon
          className={cn("mr-[10px]", {
            ["stroke-white"]: variant === "primary" || disabled,
            ["stroke-primary"]:
              variant === "default" || (variant === "secondary" && !disabled),
          })}
        />
      ) : null}
      {children}
      {EndIcon ? (
        <EndIcon
          className={cn("ml-[10px]", {
            ["stroke-white"]: variant === "primary" || disabled,
            ["stroke-primary"]:
              variant === "default" || (variant === "secondary" && !disabled),
          })}
        />
      ) : null}
    </button>
  );
};
