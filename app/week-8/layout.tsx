import type { ReactNode } from "react";
import { AuthContextProvider } from "./utils/auth-context";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}