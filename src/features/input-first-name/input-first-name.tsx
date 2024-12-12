import { Control, Controller } from "react-hook-form";
import { TextField } from "../../shared/ui";
import { FC } from "react";
import { DataRegistration } from "../../entities/user";

type InputFirstNameProps = {
  control: Control<DataRegistration>;
};

export const InputFirstName: FC<InputFirstNameProps> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="firstName"
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <TextField
          placeholder="Иван"
          title="Имя*"
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
