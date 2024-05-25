import { Formik } from "formik";
import React, { ReactNode } from "react";

interface IAppForm {
  initialValues: { [key: string]: string };
  onSubmit: (values: any) => void;
  validationSchema: Object;
  children: ReactNode;
}

export const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: IAppForm) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};
