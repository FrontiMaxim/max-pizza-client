import IconLogo from "../../../assets/icons/logo.svg?react";

export const Logo = () => {
  return (
    <div className="flex gap-x-[15px] items-center">
      <IconLogo />
      <div>
        <div className="font-black uppercase tracking-[1px]">Max Pizza</div>
        <div className="text-[#7B7B7B] lowercase">Вкусней уже некуда</div>
      </div>
    </div>
  );
};
