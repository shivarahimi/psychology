// base
import { FC } from "react";
// components
import { Intro } from "./Intro/Intro";

interface IPropType {}

const LandingContainer: FC<IPropType> = () => {
  return (
    <>
      <Intro />
    </>
  );
};

export { LandingContainer };
