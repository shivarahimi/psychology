// base
import { GetCourse } from "@/core/services/api/server/Course.api";
import { IGetCoursesList } from "@/core/types/response/Course.res";
import { FC } from "react";
import { AddToCartBtn } from "./AddToCartBtn/AddToCartBtn";

interface IPropType {
  courseId: string;
}

const CourseDetailsContainer: FC<IPropType> = async ({ courseId }) => {
  let currentCourse: IGetCoursesList | null = null;
  // GetCourse course details
  try {
    const getCourse = await GetCourse(courseId);
    currentCourse = getCourse.data.result;
    console.log("currentCourse", currentCourse);
  } catch (error) {
    console.log(error);
  }

  return (
    <section>
      <p>{currentCourse?.title}</p>

      <AddToCartBtn currentCourse={currentCourse} />
    </section>
  );
};

export { CourseDetailsContainer };
