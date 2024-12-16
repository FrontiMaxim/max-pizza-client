import { FC, SVGProps } from "react";
import cn from "classnames";

type IconButtonProps = {
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "default";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  className?: string;
};

export const IconButton: FC<IconButtonProps> = ({
  type = "button",
  variant = "primary",
  icon,
  onClick,
  size = "small",
  className,
  disabled,
}) => {
  const Icon = icon;
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "font-semibold rounded-[15px] flex items-center justify-center",
        {
          ["p-[18px]"]: size === "large",
          ["p-[16px]"]: size === "medium",
          ["p-[15px]"]: size === "small",
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
      {
        <Icon
          className={cn({
            ["stroke-white"]: variant === "primary" || disabled,
            ["stroke-primary"]:
              variant === "default" || (variant === "secondary" && !disabled),
          })}
        />
      }
    </button>
  );
};
