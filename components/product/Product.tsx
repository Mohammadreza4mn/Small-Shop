import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/action";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Divider,
} from "@material-ui/core";
import NumberControl from "../numberControl/NumberControl";
import { productStyles } from "../../assets/jss/style";
import { IProduct } from "../../utils/interface";
import Link from "next/link";

const useStyles = makeStyles(productStyles);

const Product = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const basket = useSelector(({ basket }) => basket.list);

  return (
    <Card className={classes.root}>
      <Link href={`product/${product.id}`}>
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.name}
        />
      </Link>
      <Divider />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography
          className={classes.description}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {product.description}
        </Typography>
        <Link href={`product/${product.id}`}>اطلاعات بیشتر</Link>
        <Divider />
        <Typography
          className={classes.price}
          dir="ltr"
          variant="body1"
          component="p"
        >
          {`${product.price.toLocaleString()} تومان`}
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>
        {basket.some(({ id }) => id == product.id) ? (
          <NumberControl product={basket.find(({ id }) => id == product.id)} />
        ) : (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => dispatch(addProduct({ ...product, count: 1 }))}
          >
            افزودن به سبد خرید
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Product;
