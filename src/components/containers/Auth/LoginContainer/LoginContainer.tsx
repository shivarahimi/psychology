"use client";
// base
import { FC, useState } from "react";
import { Form, Formik } from "formik";
import { PasswordCode } from "./PasswordCode/PasswordCode";
import { ILogInValues } from "@/core/types/formikValues/LogIn/LogIn.values";

interface IPropType {}

const LoginContainer: FC<IPropType> = () => {
  const [initialValues] = useState<ILogInValues>({
    userName: "",
    password: "",
  });
  const onSubmit = (values: ILogInValues) => {
    console.log("val", values);
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
          <PasswordCode
          // isLoading={setMutation.isLoading}
          />
        </Form>
      )}
    </Formik>
  );
};

export { LoginContainer };
