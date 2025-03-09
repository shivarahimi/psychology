// base
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { UserPanelNav } from "@/navigations/user-panel.nav";
import Link from "next/link";
import { FC } from "react";
import { BiLogOut } from "react-icons/bi";

interface IPropType {}

const Content: FC<IPropType> = () => {
  const { userInfo } = useUserAuth();

  return (
    <section>
      <div>
        <p>
          سلام {`${userInfo?.name || ""} ${userInfo?.lastName || ""}`} جون دلم
          خوش اومدی✨
        </p>
      </div>
      <div>
        {UserPanelNav().map((item, index) => (
          <Link
            key={index}
            href={item.key}
            className="flex items-center justify-start"
          >
            {item.icon}
            <p>{item.label}</p>
          </Link>
        ))}

        <Link href="/auth/logout" className="flex items-center justify-start">
          <BiLogOut />
          <p>خروج از حساب کاربری</p>
        </Link>
      </div>
    </section>
  );
};

export { Content };
