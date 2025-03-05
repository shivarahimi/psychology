import { IPaginationResult } from "../common/common.res";

export interface IGetCoursesResult extends IPaginationResult {
  items: IGetCoursesList[];
}
export interface IGetCoursesList {
  id: string;
  title: string;
  price: number;
  discount: number;
  courseLength: string;
  shortDescription: string;
  description: string;
  isActive: boolean;
  createdDateTimeShamsi: string;
  openDateTimeShamsi: string;
  endDateTimeShamsi: string;
  isStarted: boolean;
  finalPrice: number;
  picture: string;
  studentsCount: number;
  episodeCount: number;
  isOwned: boolean;
}
