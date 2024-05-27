import { useFormikContext } from "formik";
import React from "react";
import { AppTextInput, ErrorMessage, IAppTextInput } from "..";

interface IAppFormField extends IAppTextInput {
  name: string;
}

export const AppFormField = ({ name, width, ...otherProps }: IAppFormField) => {
  const { errors, touched, handleChange, setFieldTouched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        width={width}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
