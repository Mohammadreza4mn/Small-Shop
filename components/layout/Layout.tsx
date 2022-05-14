import Header from "../header/Header";
import { PropsWithChildren } from "react";
import { Box } from "@material-ui/core";
import Toast from "../toast/Toast";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      <Toast />
      <Box mt={10}>{children}</Box>
    </>
  );
}
