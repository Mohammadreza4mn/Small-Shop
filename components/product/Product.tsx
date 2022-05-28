import { addBasket } from "../../redux/action";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Divider,
  CircularProgress,
  Box,
} from "@material-ui/core";
import NumberControl from "../numberControl/NumberControl";
import { productStyles } from "../../styles/jss/style";
import { IProduct } from "../../utils/interface";
import { ElementBasket, ElementProduct } from "../../utils/enum";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectBasket, selectLoading } from "../../redux/selectors";
import { FC } from "react";
import Image from "next/image";

const useStyles = makeStyles(productStyles);

const Product: FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);
  const { product: productLoading, basket } = useAppSelector(selectLoading);

  const generateCardActions = () => {
    let index = list.findIndex(({ id }) => id == product.id);

    if (basket.includes(ElementBasket.btn_add_basket + product.id)) {
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
    if (productLoading.includes(ElementProduct.card_product + product.id)) {
      return `${classes.cardLoading} ${classes.root}`;
    } else {
      return classes.root;
    }
  };

  return (
    <Card className={generateClassCard()}>
      <Link href={`product/${product.id}`}>
        <Box className={classes.img}>
          <Image
            src={product.img}
            alt={product.name}
            layout="responsive"
            width={100}
            height={50}
            objectFit="contain"
            blurDataURL="/images/Loading_icon.gif"
            placeholder="blur"
          />
        </Box>
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
