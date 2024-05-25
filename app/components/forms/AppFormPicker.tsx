import React from "react";
import { useFormikContext } from "formik";
import { AppPicker, IAppPicker } from "../AppPicker";
import { ErrorMessage } from "./ErrorMessage";

interface IAppFormPicker extends IAppPicker {
  name: string;
}

export const AppFormPicker = ({ items, name, placeholder }: IAppFormPicker) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        // @ts-ignore
        selectedItem={values[name]}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
