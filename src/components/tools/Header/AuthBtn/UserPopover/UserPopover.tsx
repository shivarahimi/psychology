// base
import { FC } from "react";
// lib
import { FaAngleDown, FaRegCircleUser } from "react-icons/fa6";
// components
import { FullPopover } from "@/components/common/FullPopover/FullPopover";
import { Content } from "./Content/Content";
// core
import { useUserAuth } from "@/core/context/AuthenticationContext";

interface IPropType {}

const UserPopover: FC<IPropType> = () => {
  const { userInfo } = useUserAuth();
  console.log("userInfo", userInfo);
  return (
    <FullPopover content={<Content />} trigger="click">
      <div className="flex items-center justify-center gap-1 cursor-pointer">
        <FaRegCircleUser size={20} />
        <p className="text-sm text-gray-900">
          {" "}
          {`${userInfo?.name || ""} ${userInfo?.lastName || ""}`}
        </p>
        <FaAngleDown size={12} />
      </div>
    </FullPopover>
  );
};

export { UserPopover };
