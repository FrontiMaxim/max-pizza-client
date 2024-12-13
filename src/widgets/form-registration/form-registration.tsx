import { FC, useState } from "react";
import { Button, Loader } from "../../shared/ui";
import {
  InputEmail,
  InputFirstName,
  InputLastName,
  InputPassword,
} from "../../features";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DataRegistration,
  fetchRegistration,
  SchemaRegistration,
} from "../../entities/user";
import { useNavigate } from "react-router";

export const FormRegistration: FC = () => {
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const [resultRegistration, setResultRegistration] = useState({
    isSuccess: false,
    error: "",
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<DataRegistration>({
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    },
    mode: "onTouched",
    resolver: zodResolver(SchemaRegistration),
  });

  const onSubmit = async (data: DataRegistration) => {
    setIsPending(true);
    const result = await fetchRegistration(data);
    setIsPending(false);

    if (result.isSuccess) {
      navigate("../success");
    } else {
      setResultRegistration({ ...result });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[20%] min-w-[300px] px-4  py-5 rounded-[18px] shadow-st"
    >
      <div className="text-center text-3xl font-bold">Регистрация</div>
      <div className="mt-4 flex flex-col gap-y-3">
        <div>
          <InputFirstName control={control} />
        </div>
        <div>
          <InputLastName control={control} />
        </div>
        <div>
          <InputEmail control={control} />
        </div>
        <div>
          <InputPassword control={control} />
        </div>
      </div>

      <div className="mt-7">
        <Button
          className="w-full"
          size="medium"
          type="submit"
          disabled={!isValid || isPending}
        >
          {isPending ? <Loader color="default" /> : "Зарегистрироваться"}
        </Button>
      </div>

      {!resultRegistration.isSuccess && (
        <div className="mt-5 text-error text-center">
          {resultRegistration.error}
        </div>
      )}
    </form>
  );
};
