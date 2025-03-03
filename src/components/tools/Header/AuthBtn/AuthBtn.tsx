// base
import { FC } from "react";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { FaRegCircleUser } from "react-icons/fa6";
import { UserPopover } from "./UserPopover/UserPopover";

interface IPropType {}

const AuthBtn: FC<IPropType> = () => {
  const { userInfo } = useUserAuth();
  const isLogged = userInfo;
  console.log("isLogged", isLogged);
  // return <p>{userInfo?.name}</p>;
  return isLogged ? (
    <UserPopover />
  ) : (
    <div>
      <FaRegCircleUser size={20} />
      <p className="text-sm cursor-pointer">ورود</p>
    </div>
  );
};

export { AuthBtn };
