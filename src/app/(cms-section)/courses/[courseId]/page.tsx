// base
import { CourseDetailsContainer } from "@/components/containers/CourseDetailsContainer/CourseDetailsContainer";
import { FC } from "react";

interface IParamType {
  params: { courseId: string };
}
const Course: FC<IParamType> = ({ params: { courseId } }) => {
  return <CourseDetailsContainer courseId={courseId} />;
};

export default Course;
