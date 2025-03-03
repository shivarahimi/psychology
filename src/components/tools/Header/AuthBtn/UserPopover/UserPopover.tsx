// base
import { FC } from "react";
import { useUserAuth } from "@/core/context/AuthenticationContext";

interface IPropType {}

const UserPopover: FC<IPropType> = () => {
  const { userInfo } = useUserAuth();
  console.log("userInfo", userInfo);
  return (
    <div>
      <p>{`${userInfo?.name || ""} ${userInfo?.lastName || ""}`}</p>
    </div>
  );
};

export { UserPopover };
