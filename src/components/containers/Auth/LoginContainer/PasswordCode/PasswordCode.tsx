// base
import { FC } from "react";
// components
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
// core
import { textInputType } from "@/core/enums/textInput-type.enum";

interface IPropType {}

const PasswordCode: FC<IPropType> = () => {
  return (
    <>
      <TextInput name="userName" placeholder="نام کاربری" />
      <TextInput
        name="password"
        type={textInputType.password}
        placeholder="رمز عبور"
      />
      <FullButton isLoading={false} />
    </>
  );
};

export { PasswordCode };
