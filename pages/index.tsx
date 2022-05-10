import ProductList from "../components/productList/ProductList";
import Head from "next/head";
import { IProduct } from "../components/product/Product";
import { GetStaticProps } from "next";
import { productListAPI } from "../libs/api";

interface IProductListProps {
  products: IProduct[];
}

export default function Home({ products }: IProductListProps) {
  return (
    <>
      <Head>
        <title>Small Shop</title>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <main className="main">
        <ProductList products={products} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: list } = await productListAPI();

  return {
    props: {
      products: list as IProduct[],
    },
  };
};
