import Product, { IProduct } from "../product/Product";
import { makeStyles,styled,Button} from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 10
  },
});

const MyButton = styled(Button)({
  color: "red",
  backgroundColor: "green",
});


const ProductList = ({ products }: { products: IProduct[] }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <MyButton>Styled components</MyButton>
    </div>
  );
};

export default ProductList;
