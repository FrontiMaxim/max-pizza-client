import { FC, useState } from "react";
import { IconButton, Logo, Search } from "../../shared/ui";

import IconCart from "../../assets/icons/cart.svg?react";
import { ButtonSignUp } from "../../features";

type HeaderProps = {
  isShowSearch?: boolean;
  isShowCart?: boolean;
};

export const Header: FC<HeaderProps> = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="py-[31px] px-[67px] border-b border-[#EDEDED] bg-white rounded-tl-[15px] rounded-tr-[15px] flex justify-between">
      <div>
        <Logo />
      </div>
      <div className="w-[55%] ml-[3%]">
        <Search
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onReset={() => setSearch("")}
          placeholder="Поиск пиццы..."
        />
      </div>
      <div className="flex">
        <ButtonSignUp />
        <div className="ml-[5%]">
          <IconButton icon={IconCart} variant="default" />
        </div>
      </div>
    </div>
  );
};
