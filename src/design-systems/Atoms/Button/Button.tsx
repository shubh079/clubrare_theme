import React from "react";
import { ButtonProps } from "./interface";

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return <button {...props}>{label}</button>;
};
