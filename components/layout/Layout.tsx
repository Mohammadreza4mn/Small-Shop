import Header from "../header/Header";
import { PropsWithChildren } from "react";
import { Box } from "@material-ui/core";
import Toast from "../toast/Toast";
import Head from "next/head";
import { FC } from "react";

const Layout: FC<{ children: PropsWithChildren<any>; pageTitle: string }> = ({
  children,
  pageTitle,
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/static/images/favicon.ico" />
        <meta name="keywords" content="فروشگاه، خرید، لوازم جانبی" />
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
