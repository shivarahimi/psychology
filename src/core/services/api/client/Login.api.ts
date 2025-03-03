import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
// core
import { IAxiosResult } from "@/core/models/axios-result.model";
import { ILoginPayload } from "@/core/types/payload/Login.Payload";
import { https } from "../../interceptors/https.interceptors";

//Login
const Login = async (
  payload: ILoginPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/User/Login`, payload);
};

export const useLogin = () => {
  return useMutation(Login);
};
