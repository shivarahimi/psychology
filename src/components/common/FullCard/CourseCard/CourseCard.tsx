// base
import { FC } from "react";
import { FullImage } from "../../FullImage/FullImage";
import { envConfig } from "@/configs/env.config";
import { serveFileTypeEnum } from "@/core/enums/serve-file-type.enum";
import { FaPlus } from "react-icons/fa6";

interface IPropType {
  picture: string;
  title: string;
  price: number;
}

const CourseCard: FC<IPropType> = ({ picture, title, price }) => {
  return (
    <section>
      <section className="bg-white h-52 shadow-sm rounded-2xl">
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
        {/* api/Files/Course/book/one */}
      </section>
      <h2>{title}</h2>
      <div className="flex items-center justify-between">
        <span>{price}</span>

        <div className="flex items-center justify-center gap-1 text-sm bg-[#007bff] text-white p-1 rounded cursor-pointer">
          <FaPlus />
          <p>خرید</p>
        </div>
      </div>
    </section>
  );
};

export { CourseCard };
