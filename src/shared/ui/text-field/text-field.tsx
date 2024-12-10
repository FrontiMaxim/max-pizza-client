import { FC } from "react";
import cn from "classnames";

type TextFieldProps = {
  placeholder?: string;
  type?: "text" | "password";
  name: string;
  title: string;
  error?: string;
  className?: string;
};

export const TextField: FC<TextFieldProps> = ({
  placeholder,
  title,
  type = "text",
  name,
  error,
  className,
}) => {
  return (
    <label className={cn("block", className)}>
      <div className="font-bold">{title}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn(
          "mt-[5px] h-[48px] border rounded-[10px] pl-[19px] font-[16px] w-full",
          {
            ["border-error outline-none"]: error,
            ["border-grey outline-active"]: !error,
          }
        )}
      />
      {error && <div className="mt-[8px] text-error">{error}</div>}
    </label>
  );
};
