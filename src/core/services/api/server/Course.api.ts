import { AxiosResponse } from "axios";
import { https } from "../../interceptors/https.interceptors";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { IGetCoursesPayload } from "@/core/types/payload/Course.payload";

// GetCourses
export const GetCourses = async (
  payload: Partial<IGetCoursesPayload>
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/Course/GetCourses`, payload);
};
// GetCourse
export const GetCourse = async (
  id: string
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().get(`/api/Course/GetCourse?id=${id}`);
};
