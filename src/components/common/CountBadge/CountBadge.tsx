// base
import React, { FC } from "react";
// lib
import { Badge } from "antd";

interface IPropType {
  countNumber: number;
  color?: string;
  children?: React.ReactNode;
}

const CountBadge: FC<IPropType> = ({ countNumber, color, children }) => {
  return (
    <Badge count={countNumber} color={color || "red"} showZero>
      {children || ""}
    </Badge>
  );
};

export { CountBadge };
