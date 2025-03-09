// base
import { FC } from "react";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { FaRegCircleUser } from "react-icons/fa6";
import { UserPopover } from "./UserPopover/UserPopover";
import Link from "next/link";

interface IPropType {}

const AuthBtn: FC<IPropType> = () => {
  const { userInfo } = useUserAuth();
  const isLogged = userInfo;
  console.log("isLogged", isLogged);
  // return <p>{userInfo?.name}</p>;
  return isLogged ? (
    <UserPopover />
  ) : (
    <Link href="/auth/login" className="flex items-center justify-center gap-2">
      <FaRegCircleUser size={20} />
      <p className="text-sm cursor-pointer">ورود</p>
    </Link>
  );
};

export { AuthBtn };
