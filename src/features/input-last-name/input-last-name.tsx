import { Control, Controller } from "react-hook-form";
import { TextField } from "../../shared/ui";
import { FC } from "react";
import { DataRegistration } from "../../entities/user";

type InputLastNameProps = {
  control: Control<DataRegistration>;
};

export const InputLastName: FC<InputLastNameProps> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="lastName"
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <TextField
          placeholder="Иванов"
          title="Фамилия*"
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
