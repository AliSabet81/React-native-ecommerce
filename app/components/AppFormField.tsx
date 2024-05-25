import { useFormikContext } from "formik";
import React from "react";
import { AppTextInput, IAppTextInput } from "./AppTextInput";
import { ErrorMessage } from "./ErrorMessage";

interface IAppFormField extends IAppTextInput {
  name: string;
}

export const AppFormField = ({ name, ...otherProps }: IAppFormField) => {
  const { errors, touched, handleChange, setFieldTouched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
