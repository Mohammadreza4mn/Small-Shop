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
import { addBasket } from "../../../redux/action";
import { wrapper } from "../../../redux/store";
import { GetServerSideProps } from "next";
import NumberControl from "../../../components/numberControl/NumberControl";
import { productInfoAPI } from "../../../libs/api";
import { productStyles } from "../../../styles/jss/style";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { selectBasket, selectLoading } from "../../../redux/selectors";
import { IProduct } from "../../../utils/interface";
import { ElementBasket } from "../../../utils/enum";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";

const useStyles = makeStyles(productStyles);

export default function Product({
  productInfo,
}: {
  productInfo: IProduct;
}): ReactElement {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);
  const { basket } = useAppSelector(selectLoading);

  const generateCardActions = () => {
    let index = list.findIndex(({ id }) => id == productInfo.id);

    if (basket.includes(ElementBasket.btn_add_basket + productInfo.id)) {
      return <CircularProgress />;
    } else {
      if (index == -1) {
        return (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={(e) => dispatch(addBasket({ ...productInfo, count: 1 }))}
          >
            افزودن به سبد خرید
          </Button>
        );
      } else {
        return <NumberControl product={list[index]} />;
      }
    }
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={productInfo.img}
        title={productInfo.name}
      />
      <Divider />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {productInfo.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {productInfo.description}
        </Typography>
        <Divider />
        <Typography
          className={classes.price}
          dir="ltr"
          variant="body1"
          component="p"
        >
          {`${productInfo.price.toLocaleString()} تومان`}
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>{generateCardActions()}</CardActions>
    </Card>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params, preview }) => {
    interface IProductId extends ParsedUrlQuery {
      productId: string;
    }
    const { productId } = params as IProductId;

    const [productInfo] = await Promise.all([productInfoAPI(productId)]);

    return {
      props: {
        productInfo: productInfo.data || null,
        statusCode: productInfo.status || null,
        error: productInfo.data.message || null,
        pageTitle: productInfo.data.name || null,
      },
    };
  });
