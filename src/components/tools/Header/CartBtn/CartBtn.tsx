// base
import { FC } from "react";
// components
import { CountBadge } from "@/components/common/CountBadge/CountBadge";
// lib
import { PiShoppingCartSimpleFill } from "react-icons/pi";

interface IPropType {}

const CartBtn: FC<IPropType> = () => {
  return (
    <CountBadge countNumber={20}>
      <PiShoppingCartSimpleFill size={20} className="cursor-pointer" />
    </CountBadge>
  );
};

export { CartBtn };
