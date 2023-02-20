import type { PropsWithChildren } from "react";

export interface HeaderProps extends PropsWithChildren {
  onLogin: () => void;
  onLogout: () => void;
  className?: string;
  onCreateAccount: () => void;
}
