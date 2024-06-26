import React from "react";
import { AppButton } from "..";
import { useFormikContext } from "formik";

export const SubmitButton = ({ title }: { title: string }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};
