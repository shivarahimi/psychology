import axios from "axios";
import { envConfig } from "@/configs/env.config";
import { getAccessToken } from "../authentication/authentication.service";

export const https = () => {
  const authGuard = axios.create({
    baseURL: envConfig.base_url,
  });
  // request headers
  authGuard.interceptors.request.use((config) => {
    const token = getAccessToken();
    config.headers.Authorization = token
      ? token
      : "set.Invalid.TokenForGetRefreshToken";
    return config;
  });

  return authGuard;
};
