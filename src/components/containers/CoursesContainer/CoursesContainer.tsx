// base
import { CourseCard } from "@/components/common/FullCard/CourseCard/CourseCard";
import { GetCourses } from "@/core/services/api/server/Course.api";
import {
  IGetCoursesList,
  IGetCoursesResult,
} from "@/core/types/response/Course.res";
import { FC } from "react";

interface IPropType {}

const CoursesContainer: FC<IPropType> = async () => {
  let courses: IGetCoursesList[] = [];
  // GetCourses
  try {
    const getCourses = await GetCourses({
      page: 1,
      pageSize: 8,
    });
    const result: IGetCoursesResult = getCourses.data.result;
    if (result.items) {
      courses = result.items;
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <section className=" mx-auto lg:w-[85%] xl:w-[65%] w-[95%] grid grid-cols-4 gap-8">
      {courses?.map((item) => (
        <CourseCard
          currentCourse={item}
          picture={item?.picture}
          title={item?.title}
          price={item.price}
        />
      ))}
    </section>
  );
};

export { CoursesContainer };
