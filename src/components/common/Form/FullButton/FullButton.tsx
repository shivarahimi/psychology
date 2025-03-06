"use client";

// base
import { FC, ReactNode } from "react";
// lib
import { Button } from "antd";
// core
import { btnTextTypeEnum, buttonTypeEnum } from "@/core/enums/button.enum";

interface IPropType {
  type?: buttonTypeEnum;
  btnText?: string;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
  icon?: ReactNode;
}

const FullButton: FC<IPropType> = ({
  type = buttonTypeEnum.submit,
  btnText,
  onClick,
  isLoading,
  className,
  icon,
}) => {
  return (
    <Button
      htmlType={type ? type : "submit"}
      onClick={onClick ? onClick : () => {}}
      loading={isLoading}
      className={className || ""}
      icon={icon}
    >
      {btnText ? btnText : btnTextTypeEnum.add}
    </Button>
  );
};

export { FullButton };
