import ProductList from "../components/productList/ProductList";
import { IProduct } from "../utils/interface";
import { GetServerSideProps } from "next";
import { productListAPI } from "../libs/api";
import { wrapper } from "../redux/store";

interface IProductListProps {
  products: IProduct[];
}

export default function Home({ products }: IProductListProps) {
  return <ProductList products={products} />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ preview }) => {
    const { data: list } = await productListAPI();

    return {
      props: {
        products: list as IProduct[],
      },
    };
  });
