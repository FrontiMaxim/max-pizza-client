import { ChangeEventHandler, FC } from "react";
import cn from "classnames";
import IconSearch from "../../../assets/icons/search.svg?react";
import IconClose from "../../../assets/icons/close.svg?react";

type SearchProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onReset: () => void;
  placeholder: string;
};

export const Search: FC<SearchProps> = ({
  onChange,
  placeholder,
  value,
  onReset,
}) => {
  return (
    <div className="relative">
      <IconSearch className="absolute translate-y-[100%] translate-x-[20px]" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={cn(
          "w-full h-[50px] font-[16px] bg-[#F9F9F9] outline-none rounded-[15px] pl-[48px]"
        )}
        onChange={onChange}
      />
      {value && (
        <IconClose
          className="absolute right-0 translate-y-[-30px] translate-x-[-20px] cursor-pointer"
          onClick={onReset}
        />
      )}
    </div>
  );
};
