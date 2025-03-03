"use client";

import { FC } from "react";

// components
import ReactQueryProvider from "./ReactQuery/ReactQuery";
import { AuthenticationContext } from "@/core/context/AuthenticationContext";

interface IPropType {
  children: React.ReactNode;
}

const CoreProvider: FC<IPropType> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AuthenticationContext>{children}</AuthenticationContext>
    </ReactQueryProvider>
  );
};

export { CoreProvider };
