"use client";
// base
import { FC } from "react";
import { FullImage } from "../../FullImage/FullImage";
import { envConfig } from "@/configs/env.config";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";
import { FaPlus } from "react-icons/fa6";
import { useShoppingCart } from "@/core/context/ShoppingCartContext";
import { IGetCoursesList } from "@/core/types/response/Course.res";
import { FullButton } from "../../Form/FullButton/FullButton";
import { FullAlert } from "../../FullAlert/FullAlert";
import { toastTypes } from "@/core/enums/toast-types.enum";

interface IPropType {
  currentCourse: IGetCoursesList;
  picture: string;
  title: string;
  price: number;
}

const CourseCard: FC<IPropType> = ({
  currentCourse,
  picture,
  title,
  price,
}) => {
  // state
  const { cart, addToCart } = useShoppingCart();
  // isAlreadyInCart
  const isAlreadyInCart = cart.some(
    (item) => item.course?.id === currentCourse?.id
  );

  return (
    <section>
      <section className="bg-white h-52 shadow-sm rounded-2xl cursor-pointer">
        <FullImage
          src={
            picture
              ? `${envConfig.base_url}/api/Files/${serveFileTypeEnum.Course}/${picture}`
              : ""
          }
          width={200}
          height={200}
          alt="آکادمی دکتریت"
          className=" p-5 flex items-center justify-center"
        />
      </section>
      <h2>{title}</h2>
      <div className="flex items-center justify-between">
        <span>{price}</span>

        {!isAlreadyInCart ? (
          <FullButton
            btnText="خرید"
            onClick={() => addToCart(currentCourse)}
            className="flex items-center justify-center bg-[#007bff] text-white"
            icon={<FaPlus />}
          />
        ) : (
          ""
        )}

        {/* <div className="flex items-center justify-center gap-1 text-sm bg-[#007bff] text-white p-1 rounded cursor-pointer">
          <FaPlus />
          <button onClick={() => addToCart(currentCourse)}>خرید</button>
        </div> */}
      </div>
    </section>
  );
};

export { CourseCard };
