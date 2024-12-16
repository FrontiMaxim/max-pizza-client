import { useNavigate } from "react-router";
import { Button } from "../../shared/ui";

export const PageAuthConfirm = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" bg-white px-4 py-5 rounded-[18px] shadow-st flex flex-col justify-center items-center gap-5">
        <span className="font-bold text-[20px]">
          🍕 Регистрация прошла успешно! 🍕
        </span>
        <Button onClick={() => navigate("/")}>Вернуться на сайт</Button>
      </div>
    </div>
  );
};
