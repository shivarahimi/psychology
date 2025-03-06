"use client";

import { FC } from "react";

// components
import ReactQueryProvider from "./ReactQuery/ReactQuery";
import { AuthenticationContext } from "@/core/context/AuthenticationContext";
import { ShoppingCartProvider } from "@/core/context/ShoppingCartContext";

interface IPropType {
  children: React.ReactNode;
}

const CoreProvider: FC<IPropType> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AuthenticationContext>
        <ShoppingCartProvider>{children}</ShoppingCartProvider>
      </AuthenticationContext>
    </ReactQueryProvider>
  );
};

export { CoreProvider };
