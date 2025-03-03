"use client";

// base
import { FC } from "react";
// lib
import { Button } from "antd";
// core
import { btnTextTypeEnum, buttonTypeEnum } from "@/core/enums/button.enum";

interface IPropType {
  type?: buttonTypeEnum;
  btnText?: string;
  isLoading?: boolean;
}

const FullButton: FC<IPropType> = ({
  type = buttonTypeEnum.submit,
  btnText,
  isLoading,
}) => {
  return (
    <Button htmlType="submit" loading={isLoading}>
      {btnText ? btnText : btnTextTypeEnum.add}
    </Button>
  );
};

export { FullButton };
