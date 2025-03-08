"use client";
// base
import { FC, useState } from "react";
// components
import { CountBadge } from "@/components/common/CountBadge/CountBadge";
// lib
import { useShoppingCart } from "@/core/context/ShoppingCartContext";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { ShoppingCartModal } from "./ShoppingCartModal/ShoppingCartModal";

interface IPropType {}

const CartBtn: FC<IPropType> = () => {
  // state
  const [showShoppingCart, setShowShoppingCart] = useState<boolean>(false);
  // context
  const { cart, removeFromCart } = useShoppingCart();

  return (
    // استفاده از مودال اختصاصی در جاییکه دکمه مربوطه است
    <>
      <ShoppingCartModal
        isOpen={showShoppingCart}
        toggleModal={() => setShowShoppingCart(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />

      <section
        onMouseEnter={() => setShowShoppingCart(true)}
        className="cursor-pointer"
      >
        <CountBadge countNumber={cart.length}>
          <PiShoppingCartSimpleFill size={20} className="cursor-pointer" />
        </CountBadge>
      </section>
    </>
  );
};

export { CartBtn };
