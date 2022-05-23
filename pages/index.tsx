import ProductList from "../components/productList/ProductList";
import { IProduct } from "../utils/interface";
import { GetServerSideProps } from "next";
import { productListAPI } from "../libs/api";
import { wrapper } from "../redux/store";
import { ReactElement } from "react";

interface IProductListProps {
  products: IProduct[];
}

export default function Home({ products }: IProductListProps): ReactElement {
  return <ProductList products={products} />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ preview }) => {
    const [productList] = await Promise.all([productListAPI()]);

    return {
      props: {
        products: productList.data || null,
        statusCode: productList.status || null,
        error: productList.data.message || null,
      },
    };
  });
