import { FC } from "react";
import cn from "classnames";

type LoaderProps = {
  color: "primary" | "secondary" | "default";
  width?: number;
  height?: number;
};

export const Loader: FC<LoaderProps> = ({ color, width = 24, height = 24 }) => {
  return (
    <span
      className={cn(
        `w-[${width}px] h-[${height}px] border-[3px] border-b-transparent rounded-[50%] box-border animate-spin`,
        {
          ["border-primary"]: color === "primary",
          ["border-secondary"]: color === "secondary",
          ["border-white"]: color === "default",
        }
      )}
    />
  );
};
