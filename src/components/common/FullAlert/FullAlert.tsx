// base
import { Alert } from "antd";
import { FC } from "react";

interface IPropType {
  message: string;
  type?: "success" | "info" | "warning" | "error";
}

const FullAlert: FC<IPropType> = ({ message, type = "info" }) => {
  return <Alert message={message} type={type} />;
};

export { FullAlert };
