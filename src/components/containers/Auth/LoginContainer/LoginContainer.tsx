"use client";
// base
import { FC, useState } from "react";
import { Form, Formik } from "formik";
import { PasswordCode } from "./PasswordCode/PasswordCode";
import { ILogInValues } from "@/core/types/formikValues/LogIn/LogIn.values";
import { useLogin } from "@/core/services/api/client/Login.api";
import { IGetTokenOrLoginResult } from "@/core/types/response/Login.res";
import { jwtDecode } from "jwt-decode";
import { IdecodeToken } from "@/core/models/decode-token.model";
import { IUserInfoType } from "@/core/models/user-info.model";

import {
  setAccessToken,
  setLoggedUserInfoToStorage,
} from "@/core/services/authentication/authentication.service";
import { useUserAuth } from "@/core/context/AuthenticationContext";

interface IPropType {}

const LoginContainer: FC<IPropType> = () => {
  const [initialValues] = useState<ILogInValues>({
    userName: "",
    password: "",
  });
  // context
  const { setUserInfoState } = useUserAuth();
  // api
  const setMutation = useLogin();

  const onSubmit = (values: ILogInValues) => {
    console.log("val", values);

    setMutation.mutate(
      {
        userName: values.userName,
        password: values.password,
      },
      {
        onSuccess: (value) => {
          const result: IGetTokenOrLoginResult = value.data.result;
          console.log("result", result);
          const accessToken = result.accessToken;
          const refreshToken = result.refreshToken;

          if (accessToken) {
            //save in cookies
            const decodeToken: IdecodeToken = jwtDecode(accessToken);
            const UserInfoObj: IUserInfoType = {
              name: decodeToken.name,
              phone_number: decodeToken.phone_number,
              UserLocalId: decodeToken.UserLocalId,
              lastName: decodeToken.family_name,
              Username: decodeToken.preferred_username,
            };
            setAccessToken(accessToken);
            // setRefreshToken(refreshToken);
            setLoggedUserInfoToStorage(UserInfoObj);
            setUserInfoState(UserInfoObj);

            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
            // successLoginWithServiceTokenFun(accessToken, refreshToken, "/");
          } else {
            alert("problem!");
            // showToast(
            //   ["مشکلی پیش آمده است به پشتیبانی گزارش دهید"],
            //   toastTypes.error
            // );
          }
        },
      }
    );
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
      // validationSchema={LogInValidation}
    >
      {() => (
        <Form>
          <PasswordCode isLoading={false} />
        </Form>
      )}
    </Formik>
  );
};

export { LoginContainer };
