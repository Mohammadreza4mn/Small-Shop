import Product from "../product/Product";
import { IProduct } from "../../utils/interface";
import { makeStyles } from "@material-ui/core";
import { productListStyles } from "../../styles/jss/style";
import { FC } from "react";

const useStyles = makeStyles(productListStyles);

const ProductList: FC<{ products: IProduct[] }> = ({ products }) => {
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
