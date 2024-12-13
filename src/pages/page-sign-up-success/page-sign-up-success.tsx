import { useNavigate } from "react-router";
import { Button } from "../../shared/ui";

export const PageSignUpSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="px-4 py-5 rounded-[18px] shadow-st flex flex-col justify-center items-center gap-5">
        <span className="font-bold text-[20px]">
          🍕 На ваш email отправлено письмо для завершения регистрации 🍕
        </span>
        <Button onClick={() => navigate("../../")}>Вернуться на главную</Button>
      </div>
    </div>
  );
};
