import { FC, ReactNode, SVGProps } from "react";
import cn from "classnames";

type ButtonProps = {
  variant?: "contained" | "outlined";
  color?: "primary" | "default";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  children: ReactNode;
  onClick?: () => void;
  startIcon?: FC<SVGProps<SVGSVGElement>>;
  endIcon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
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
      onClick={onClick}
      className={cn(
        "font-semibold",
        "font-[16px]",
        "rounded-[15px]",
        "flex",
        "items-center",
        "transition duration-200 hover:shadow-lg",
        {
          ["px-[101px] py-[18px]"]: size === "large",
          ["px-[76px] py-[15px]"]: size === "medium",
          ["px-[18px] py-[11px]"]: size === "small",
          ["bg-primary text-white font-bold"]:
            variant === "contained" && color === "primary" && !disabled,
          ["bg-default text-primary"]:
            variant === "contained" && color === "default" && !disabled,
          ["bg-white text-primary border border-primary"]:
            variant === "outlined" && color === "primary" && !disabled,
          ["bg-white text-default border border-default"]:
            variant === "outlined" && color === "default" && !disabled,
          ["bg-grey text-white pointer-events-none"]: disabled,
        },
        className ?? ""
      )}
    >
      {StartIcon ? (
        <StartIcon
          className={cn("mr-[10px]", {
            ["stroke-white"]: color === "primary" || disabled,
            ["stroke-primary"]: color === "default" && !disabled,
          })}
        />
      ) : null}
      {children}
      {EndIcon ? (
        <EndIcon
          className={cn("ml-[10px]", {
            ["stroke-white"]: color === "primary" || disabled,
            ["stroke-primary"]: color === "default" && !disabled,
          })}
        />
      ) : null}
    </button>
  );
};
