import { Control, Controller } from "react-hook-form";
import { TextField } from "../../shared/ui";
import { FC, useState } from "react";
import { DataRegistration } from "../../entities/user";
import IconEye from "../../assets/icons/eye.svg?react";
import IconEyeSlash from "../../assets/icons/eye-slash.svg?react";

type InputPasswordProps = {
  control: Control<DataRegistration>;
};

export const InputPassword: FC<InputPasswordProps> = ({ control }) => {
  const [type, setType] = useState<"text" | "password">("password");

  return (
    <Controller
      control={control}
      name="password"
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <div className="relative">
          <TextField
            placeholder="Не меньше 6-ти символов"
            title="Пароль*"
            type={type}
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            error={error?.message}
          />
          {type === "password" ? (
            <IconEyeSlash
              className="absolute right-0 top-10 mr-2 cursor-pointer"
              onClick={() => setType("text")}
            />
          ) : (
            <IconEye
              className="absolute right-0 top-[42px] mr-2 cursor-pointer"
              onClick={() => setType("password")}
            />
          )}
        </div>
      )}
    />
  );
};
