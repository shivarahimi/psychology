// base
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { FullModal } from "@/components/common/FullModal/FullModal";
import { ShoppingCartItem } from "@/core/context/ShoppingCartContext";
import { FC } from "react";

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
  cart: ShoppingCartItem[]; //array
  removeFromCart: (id: string | undefined) => void;
}

const ShoppingCartModal: FC<IPropType> = ({
  isOpen,
  toggleModal,
  cart,
  removeFromCart,
}) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.course?.price || 0),
    0
  );
  const totalDiscount = cart.reduce(
    (sum, item) =>
      sum + ((item.course?.price || 0) * (item.course?.discount || 0)) / 100,
    0
  );
  const finalPrice = totalPrice - totalDiscount;
  // فول مودال با محتویات درونش
  return (
    <>
      <FullModal title="سبد خرید" isOpen={isOpen} toggleModal={toggleModal}>
        {cart.map((item) => (
          <>
            <div className=" border border-gray-900 p-5 mb-3">
              <FullButton
                btnText="حذف"
                onClick={() => removeFromCart(item.course?.id)}
                className="flex items-center justify-center bg-red-500 text-white"
              />
              <p>{item.course?.title}</p>
              <span>{item.course?.price}</span>
              <span className="bg-red-500">{item.course?.discount}</span>
            </div>
          </>
        ))}
        <div className="flex flex-col">
          <span>جمع کل:{totalPrice}</span>
          <span>تخفیف:{totalDiscount}</span>
          <span className=" font-bold">مبلغ قابل پرداخت:{finalPrice}</span>
        </div>
      </FullModal>
    </>
  );
};

export { ShoppingCartModal };
