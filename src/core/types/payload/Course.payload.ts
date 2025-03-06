import { IPaginationPayload } from "../common/common.payload";

// GetCourses
export interface IGetCoursesPayload extends IPaginationPayload {
  title: string;
  hasDiscount: true;
  fromDateTimeShamsi: string;
  toDateTimeShamsi: string;
  sortBy: number;
}
