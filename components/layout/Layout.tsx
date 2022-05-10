import Header from "../header/Header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
