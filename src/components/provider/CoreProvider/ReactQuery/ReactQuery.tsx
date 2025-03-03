"use client";

// base
import { FC } from "react";

//lib
import { QueryClient, QueryClientProvider } from "react-query";

interface IPropType {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const ReactQueryProvider: FC<IPropType> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
