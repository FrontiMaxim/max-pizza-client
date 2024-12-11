import { FC } from "react";
import { Button, TextField } from "../../shared/ui";

export const FormRegistration: FC = () => {
  return (
    <form className="w-[20%] min-w-[280px] px-4  py-5 rounded-[18px] shadow-st">
      <div className="text-center text-3xl font-bold">Регистрация</div>
      <div className="mt-4 flex flex-col gap-y-3">
        <div>
          <TextField name="firstName" title="Имя" />
        </div>
        <div>
          <TextField name="lastName" title="Фамилия" />
        </div>
        <div>
          <TextField name="email" title="Эл. почта" />
        </div>
        <div>
          <TextField name="password" title="Пароль" />
        </div>
      </div>

      <div className="mt-7">
        <Button className="w-full" size="medium">
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};
