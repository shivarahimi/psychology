// base
import { FullModal } from "@/components/common/FullModal/FullModal";
import { ShoppingCartItem } from "@/core/context/ShoppingCartContext";
import { FC } from "react";
import { Badge } from "antd";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
  cart: ShoppingCartItem[];
  removeFromCart: (id: string | undefined) => void;
}

const ShoppingCartModal: FC<IPropType> = ({
  isOpen,
  toggleModal,
  cart,
  removeFromCart,
}) => {
  // فول مودال با محتویات درونش

  return (
    <>
      <FullModal title="سبد خرید" isOpen={isOpen} toggleModal={toggleModal}>
        {cart.map((item) => (
          <div className=" border border-gray-900 p-5 mb-3">
            <FullButton
              btnText="حذف"
              onClick={() => removeFromCart(item.course?.id)}
              className="flex items-center justify-center bg-red-500 text-white"
            />
            {item.course?.title}
          </div>
        ))}
      </FullModal>
    </>
  );
};

export { ShoppingCartModal };
