"use client";
// base
import { FC } from "react";
// lib
import { useFormikContext } from "formik";
import { Input } from "antd";
// core
import { textInputType } from "@/core/enums/textInput-type.enum";
import { ITextInputProps } from "@/core/types/props/textInput.props";

export interface ITextType {
  type?: textInputType.text;
}
export interface IPassType {
  type?: textInputType.password;
}

type ICombinedPageType = ITextInputProps & (ITextType | IPassType);

const TextInput: FC<ICombinedPageType> = ({
  type,
  name,
  onChange,
  placeholder,
}) => {
  // formik context
  const { setFieldValue } = useFormikContext();

  // handleChange
  // const handleChange = (
  //   param: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   let inputValue: string | number = param.target.value;
  //   console.log(inputValue);
  //   setFieldValue(name, inputValue);
  // };

  const inputPropsObj = {
    name: name,
    onChange: (
      param: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      let inputValue: string | number = param.target.value;
      console.log(inputValue);
      setFieldValue(name, inputValue);
    },
    placeholder: placeholder,
  };
  return (
    <>
      {type === textInputType.password ? (
        <Input.Password {...inputPropsObj} />
      ) : (
        <Input {...inputPropsObj} />
      )}
    </>
  );
};

export { TextInput };
