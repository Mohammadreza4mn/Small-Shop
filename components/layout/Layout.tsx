import Header from "../header/Header";
import Footer from "../footer/Footer";
import {PropsWithChildren} from "react";

export default function Layout({ children  }: PropsWithChildren<any>) {
  return (
      <>
          <Header />
          <main>{children}</main>
          <Footer />
      </>
  )
}