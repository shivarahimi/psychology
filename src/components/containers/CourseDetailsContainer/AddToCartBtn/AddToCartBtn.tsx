"use client";

// base
import { FC } from "react";
// core
import { useShoppingCart } from "@/core/context/ShoppingCartContext";
import { IGetCoursesList } from "@/core/types/response/Course.res";
import { FullAlert } from "@/components/common/FullAlert/FullAlert";
import { FaPlus } from "react-icons/fa6";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { toastTypes } from "@/core/enums/toast-types.enum";

interface IPropType {
  currentCourse: IGetCoursesList | null;
}

const AddToCartBtn: FC<IPropType> = ({ currentCourse }) => {
  // context
  const { cart, addToCart } = useShoppingCart();
  // isAlreadyInCart
  const isAlreadyInCart = cart.some(
    (item) => item.course?.id === currentCourse?.id
  );
  return (
    <section>
      {!isAlreadyInCart ? (
        <FullButton
          btnText="خرید"
          onClick={() => addToCart(currentCourse)}
          className="flex items-center justify-center bg-[#007bff] text-white"
          icon={<FaPlus />}
        />
      ) : (
        <FullAlert
          message="این دوره در سبد خرید شماست!"
          type={toastTypes.success}
        />
      )}
    </section>
  );
};

export { AddToCartBtn };
