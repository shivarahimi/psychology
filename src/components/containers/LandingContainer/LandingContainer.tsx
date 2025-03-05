// base
import { FC } from "react";
// components
import { Intro } from "./Intro/Intro";
import { LastCourses } from "./LastCourses/LastCourses";

interface IPropType {}

const LandingContainer: FC<IPropType> = () => {
  return (
    <main>
      <Intro />
      <LastCourses />
    </main>
  );
};

export { LandingContainer };
