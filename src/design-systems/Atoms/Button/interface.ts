import React from 'react'
import type { PropsWithChildren } from "react";


export interface ButtonProps {
    primary?: boolean;
    className?: string
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
  }
  
