import Header from "../header/Header";
import { PropsWithChildren } from "react";
import { Box } from "@material-ui/core";
import Toast from "../toast/Toast";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>Small Shop</title>
      </Head>
      <Header />
      <Toast />
      <Box component="main" mt={10}>
        {children}
      </Box>
    </>
  );
}
