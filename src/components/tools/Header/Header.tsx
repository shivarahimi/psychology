// base
import { FC } from "react";
// components
import { FullImage } from "@/components/common/FullImage/FullImage";
// lib
import { headerMenuList } from "@/core/data/HeaderMenu/HeaderMenu.data";
import { AuthBtn } from "./AuthBtn/AuthBtn";
import { CartBtn } from "./CartBtn/CartBtn";
import { HeaderResponsive } from "./HeaderResponsive/HeaderResponsive";

interface IPropType {}

const Header: FC<IPropType> = () => {
  const logo = "/images/general/logo.svg";

  return (
    <header className="mx-auto lg:w-[85%] xl:w-[65%] w-[95%] py-8">
      <section className="flex items-center justify-between">
        <div className="lg:hidden">
          <HeaderResponsive />
        </div>
        <FullImage src={logo} alt="لوگو" width={140} height={140} />

        <ul className="hidden lg:flex items-center justify-center gap-5">
          {headerMenuList.map((item) => (
            <li key={item.key}>{item.title}</li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-3">
          <CartBtn />
          <div className="flex items-center gap-2">
            <AuthBtn />
          </div>
        </div>
      </section>
    </header>
  );
};

export { Header };
