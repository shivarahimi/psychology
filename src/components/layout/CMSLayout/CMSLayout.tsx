// base
import { FC, ReactNode } from "react";
import { Footer } from "@/components/tools/Footer/Footer";
import { Header } from "@/components/tools/Header/Header";

interface IPropType {
  children: ReactNode;
}

const CMSLayout: FC<IPropType> = ({ children }) => {
  return (
    <>
      <Header />
      <section>{children}</section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export { CMSLayout };
