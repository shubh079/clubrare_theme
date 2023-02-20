import React from "react";
import { CheckIconProps, IconProps } from "./interface";

export const InfoIcon: React.FC<IconProps> = ({
  className = '',
  fill = "fill-error-800",
  stroke = "stroke-error-800",
  ...props
}) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z"
        className={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 5.625H6V8.25H6.375"
        className={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.90625 4.5C6.21691 4.5 6.46875 4.24816 6.46875 3.9375C6.46875 3.62684 6.21691 3.375 5.90625 3.375C5.59559 3.375 5.34375 3.62684 5.34375 3.9375C5.34375 4.24816 5.59559 4.5 5.90625 4.5Z"
        className={fill}
      />
    </svg>
 
  );
};
