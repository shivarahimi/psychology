import { IUserInfoType } from "@/core/models/user-info.model";
import * as cookies from "../common/cookies.service";
import * as storage from "../common/storage.service";
import { projectConfig } from "@/configs/project.config";
import { storageTypeEnum } from "@/core/enums/storage-type.enum";

// isUsingCookies
// save token to cookie
const isUsingCookies = projectConfig.storage === storageTypeEnum.cookies;

// =============== userInfo =============== //
// name:"سجاد" ===> "name":"سجاد"
// setLoggedUserInfoToStorage ===> سیو کردن اطلاعاتی که از توکن دریافت کردم
const setLoggedUserInfoToStorage = (user: IUserInfoType): void => {
  if (isUsingCookies) {
    cookies.setGenericCookie("userInfo", user);
  } else {
    storage.setItemGeneric(projectConfig.storage, "userInfo", user);
  }
};
// getLoggedUserInfoToStorage
// for top header person information after login
const getLoggedUserInfoFromStorage = (): IUserInfoType => {
  if (isUsingCookies) {
    return cookies.getGenericCookie("userInfo");
  } else {
    return storage.getItemGeneric(storageTypeEnum.localStorage, "userInfo");
  }
};

// =============== token =============== //
// for call api in interceptors
const getAccessToken = (): string | null => {
  if (isUsingCookies) {
    const value = cookies.getCookie("token");
    return value ? value : null;
  } else {
    const value = storage.getItem(projectConfig.storage, "token");

    return value ? value : null;
  }
};

// for login ===> سیو کردن توکن دریافتی
const setAccessToken = (token: string): void => {
  if (isUsingCookies) {
    cookies.setCookie("token", token);
  } else {
    storage.setItem(projectConfig.storage, "token", token);
  }
};

export {
  getAccessToken,
  setLoggedUserInfoToStorage,
  getLoggedUserInfoFromStorage,
  setAccessToken,
};
