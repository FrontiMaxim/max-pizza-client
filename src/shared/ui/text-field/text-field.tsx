import { forwardRef } from "react";
import cn from "classnames";

type TextFieldProps = {
  value?: string;
  placeholder?: string;
  type?: "text" | "password";
  name?: string;
  title: string;
  error?: string;
  className?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      value,
      placeholder,
      title,
      type = "text",
      name,
      error,
      onChange,
      onBlur,
      className,
    } = props;

    return (
      <label className={cn("block", className)}>
        <div className="font-bold">{title}</div>
        <input
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
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
  }
);
