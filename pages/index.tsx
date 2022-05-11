import ProductList from "../components/productList/ProductList";
import Head from "next/head";
import { IProduct } from "../components/product/Product";
import { GetServerSideProps } from "next";
import { productListAPI } from "../libs/api";
import { wrapper } from "../redux/store";
import * as actionTypes from "../redux/action";

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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ preview }) => {
    await store.dispatch({ type: actionTypes.getListBasket });

    const { data: list } = await productListAPI();

    return {
      props: {
        products: list as IProduct[],
      },
    };
  });
