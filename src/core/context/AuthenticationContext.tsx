"use client";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { IUserInfoType } from "@/core/models/user-info.model";
import {
  getAccessToken,
  getLoggedUserInfoFromStorage,
} from "../services/authentication/authentication.service";

interface IAuthenticationContext {
  children: ReactNode;
}
export interface IAuthInfo {
  token: string;
  setTokenState: Dispatch<SetStateAction<string>>;
  userInfo: IUserInfoType;
  setUserInfoState: Dispatch<SetStateAction<IUserInfoType>>;
}
export interface IAuthInfo {}
//createContext ===> یک:ایجاد کردن کانتکست
// درون ریترن ازش استفاده میشه
export const authContext = createContext<IAuthInfo | null>(null);

//useContext ===> دو:دسترسی به داده در درخت کامپوننت ها
const useUserAuth = () => {
  const pc = useContext(authContext);
  if (pc === null) {
    throw new Error("usePermissions Must be inside of Provider");
  }
  return pc;
};

// دسترسی به وضعیت کاربر در هر نقطه از برنامه
//Provider ===> سه:فراهم کردن داده در درخت کامپوننت ها
const AuthenticationContext: FC<IAuthenticationContext> = ({ children }) => {
  const token = getAccessToken() ? String(getAccessToken()) : "";
  // const refreshToken =

  // states
  const [tokenState, setTokenState] = useState<string>(token);
  const [initialUserInfoState] = useState<IUserInfoType>({
    name: "",
    Username: "",
    lastName: "",
    phone_number: 0,
    UserLocalId: 0,
  });
  const [userInfoState, setUserInfoState] =
    useState<IUserInfoType>(initialUserInfoState);

  useEffect(() => {
    const userInfo = getLoggedUserInfoFromStorage();
    console.log("userInfoContext", userInfo);
    setUserInfoState(userInfo);
  }, []);

  return (
    <authContext.Provider
      value={{
        token: tokenState,
        setTokenState,
        userInfo: userInfoState,
        setUserInfoState,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export { AuthenticationContext, useUserAuth };
