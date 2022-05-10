import Header from "../header/Header";
import { PropsWithChildren } from "react";
import { Box } from "@material-ui/core";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      <Box mt={10}>{children}</Box>
    </>
  );
}
