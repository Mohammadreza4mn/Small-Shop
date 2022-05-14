import { useSelector, useDispatch } from "react-redux";
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
import { IProduct } from "../../../utils/interface";
import * as actionTypes from "../../../redux/action";
import { wrapper } from "../../../redux/store";
import { GetServerSideProps } from "next";
import { END } from "redux-saga";
import NumberControl from "../../../components/numberControl/NumberControl";
import { productInfoAPI } from "../../../libs/api";
import { productStyles } from "../../../assets/jss/style";

const useStyles = makeStyles(productStyles);

export default function Product({ productInfo, test }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const basket = useSelector(({ basket }) => basket.list);

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
      <CardActions>
        {basket.some(({ id }) => id == productInfo.id) ? (
          <NumberControl
            product={basket.find(({ id }) => id == productInfo.id)}
          />
        ) : (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() =>
              dispatch({
                type: actionTypes.addProductServer,
                payload: { ...productInfo, count: 1 },
              })
            }
          >
            افزودن به سبد خرید
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params, preview }) => {
    const { data: productInfo } = await productInfoAPI(params.productId);

    return {
      props: {
        productInfo: productInfo,
        test: store.getState(),
      },
    };
  });
