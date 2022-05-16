import Header from "../header/Header";
import { PropsWithChildren } from "react";
import { Box } from "@material-ui/core";
import Toast from "../toast/Toast";
import Head from "next/head";
import { FC } from "react";

const Layout: FC<{ children: PropsWithChildren<any> }> = ({ children }) => {
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
};

export default Layout;
