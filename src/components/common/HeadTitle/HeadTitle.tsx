// base
import Link from "next/link";
import { FC } from "react";

interface IPropType {
  title: string;
  href: string;
}

const HeadTitle: FC<IPropType> = ({ title, href }) => {
  return (
    <section className="flex items-center justify-between mx-auto lg:w-[85%] xl:w-[65%] w-[95%] mb-7">
      <p className="text-xl">{title} دوره ها</p>
      <Link href={href || ""}>
        <p className=" border border-[#007bff] text-sm rounded-2xl px-2 hover:bg-[#007bff] hover:text-white">
          مشاهده همه
        </p>
      </Link>
    </section>
  );
};

export { HeadTitle };
