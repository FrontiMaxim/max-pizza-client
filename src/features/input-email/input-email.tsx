import { Control, Controller } from "react-hook-form";
import { TextField } from "../../shared/ui";
import { FC } from "react";
import { DataRegistration } from "../../entities/user";

type InputEmailProps = {
  control: Control<DataRegistration>;
};

export const InputEmail: FC<InputEmailProps> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="email"
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <TextField
          placeholder="example@example.com"
          title="Эл. почта*"
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          error={error?.message}
        />
      )}
    />
  );
};
