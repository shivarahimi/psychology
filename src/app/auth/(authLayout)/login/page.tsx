// base
import { LoginContainer } from "@/components/containers/Auth/LoginContainer/LoginContainer";
import { Metadata } from "next";
import { FC } from "react";

interface IPropType {}

export const metadata: Metadata = {
  title: "ورود به حساب کاربری | آکادمی روانشناسی دکتریت",
  description: "ورود به حساب کاربری | آکادمی روانشناسی دکتریت",
};

const Login: FC<IPropType> = () => {
  return <LoginContainer />;
};

export default Login;
