// base
import { FC } from "react";
// components
import { CountBadge } from "@/components/common/CountBadge/CountBadge";
// lib
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useShoppingCart } from "@/core/context/ShoppingCartContext";

interface IPropType {}

const CartBtn: FC<IPropType> = () => {
  const { cart } = useShoppingCart();
  return (
    <CountBadge countNumber={cart.length}>
      <PiShoppingCartSimpleFill size={20} className="cursor-pointer" />
    </CountBadge>
  );
};

export { CartBtn };
