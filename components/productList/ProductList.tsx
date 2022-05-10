import Product, { IProduct } from "../product/Product";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    marginTop: 70,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 10
  },
});

const ProductList = ({ products }: { products: IProduct[] }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
