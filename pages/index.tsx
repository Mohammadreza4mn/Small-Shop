import Script from "next/script";
import ProductList from "../components/productList/ProductList";
import Contact from "../components/contact/Contact";
import Head from "next/head";
import { IProduct } from "../components/product/Product";
import { GetStaticProps } from "next";
import Jumbotron from "../components/jumbotron/Jumbotron";
import { listUserAPI } from "../libs/api";

interface IProductListProps {
  products: IProduct[];
}

export default function Home({ products }: IProductListProps) {
  return (
    <>
      <Head>
        <title>My awesome store</title>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <main className="main">
        <Jumbotron />
        <ProductList products={products} />
        <Contact />
      </main>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
      <div
        hidden
        id="snipcart"
        data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx
"
      ></div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const list = await listUserAPI(5);

  return {
    props: {
      products: list.data.results as IProduct[],
    },
  };
};
