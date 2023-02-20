import React from 'react'
import type { PropsWithChildren } from "react";


export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
  }
  
