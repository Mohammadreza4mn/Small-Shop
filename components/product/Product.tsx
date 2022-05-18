import { addBasket } from "../../redux/action";
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
import { IProduct, IProductBasket } from "../../utils/interface";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectBasket } from "../../redux/selectors";
import { FC } from "react";

const useStyles = makeStyles(productStyles);

const Product: FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);

  const generateCardActions = (list: IProductBasket[]) => {
    let index = list.findIndex(({ id }) => id == product.id);

    if (index == -1) {
      return (
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => dispatch(addBasket({ ...product, count: 1 }))}
        >
          افزودن به سبد خرید
        </Button>
      );
    } else {
      return <NumberControl product={list[index]} />;
    }
  };

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
      <CardActions>{generateCardActions(list)}</CardActions>
    </Card>
  );
};

export default Product;
