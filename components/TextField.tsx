import React from "react";
import { ErrorMessage, Field } from "formik";
import { FormGroup, Label } from "reactstrap";
import clsx from "clsx";

interface Props {
  label: string;
  name: string;
  isValid: boolean;
  type: string;
  className?: string;
}

export default function TextField({
  label,
  name,
  isValid,
  type,
  className,
}: Props) {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Field
        name={name}
        className={clsx("form-control", className)}
        type={type}
        id={name}
      ></Field>
      <ErrorMessage name={name} component="div" className="errorMessage" />
    </FormGroup>
  );
}
