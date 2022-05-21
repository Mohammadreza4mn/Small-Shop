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
  CircularProgress,
} from "@material-ui/core";
import NumberControl from "../numberControl/NumberControl";
import { productStyles } from "../../assets/jss/style";
import { IProduct } from "../../utils/interface";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectBasket, selectLoading } from "../../redux/selectors";
import { FC } from "react";

const useStyles = makeStyles(productStyles);

const Product: FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);
  const { basket } = useAppSelector(selectLoading);

  const generateCardActions = () => {
    let index = list.findIndex(({ id }) => id == product.id);

    if (basket.includes(`btn__add-basket--${product.id}`)) {
      return <CircularProgress />;
    } else {
      if (index == -1) {
        return (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={(e) => dispatch(addBasket({ ...product, count: 1 }))}
          >
            افزودن به سبد خرید
          </Button>
        );
      } else {
        return <NumberControl product={list[index]} />;
      }
    }
  };

  const generateClassCard = () => {
    if (basket.includes(`card__product--${product.id}`)) {
      return classes.cardLoading;
    } else {
      return classes.root;
    }
  };

  return (
    <Card className={generateClassCard()}>
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
      <CardActions>{generateCardActions()}</CardActions>
    </Card>
  );
};

export default Product;
