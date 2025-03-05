// base
import { FC } from "react";
import { CourseCard } from "@/components/common/FullCard/CourseCard/CourseCard";
import { GetCourses } from "@/core/services/api/server/Course.api";
import { courseSortByEnum } from "@/core/enums/courseSortBy.enum";
import {
  IGetCoursesResult,
  IGetCoursesList,
} from "@/core/types/response/Course.res";

interface IPropType {}

const LastCourses: FC<IPropType> = async () => {
  let leastCourses: IGetCoursesList[] = [];
  console.log("leastCourses", leastCourses);
  // GetCourses
  try {
    const getCourses = await GetCourses({
      page: 1,
      pageSize: 8,
      sortBy: courseSortByEnum.leastRecent,
    });
    const result: IGetCoursesResult = getCourses.data.result;
    if (result.items) {
      leastCourses = result.items;
      console.log("leastCourses", leastCourses);
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <section>
      <section className=" mx-auto lg:w-[85%] xl:w-[65%] w-[95%] grid grid-cols-4 gap-8">
        {leastCourses?.map((item) => (
          <CourseCard
            picture={item?.picture}
            title={item?.title}
            price={item.price}
          />
        ))}
      </section>
    </section>
  );
};

export { LastCourses };
