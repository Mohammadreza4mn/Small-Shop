import Product, { IProduct } from "../product/Product";

interface IProductListProps {
  products: IProduct[];
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        <Product product={product} key={product.location.street.number} />
      ))}
    </div>
  );
};

export default ProductList;
