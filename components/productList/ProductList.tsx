import Product from "../product/Product";
import { IProduct } from "../../utils/interface";
import { makeStyles } from "@material-ui/core";
import { productListStyles } from "../../assets/jss/style";

const useStyles = makeStyles(productListStyles);

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
