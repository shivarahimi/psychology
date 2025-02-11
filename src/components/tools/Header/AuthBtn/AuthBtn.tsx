// base
import { FC } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

interface IPropType {}

const AuthBtn: FC<IPropType> = () => {
  return (
    <>
      <FaRegCircleUser size={20} />
      <p className="text-sm cursor-pointer">ورود</p>
    </>
  );
};

export { AuthBtn };
