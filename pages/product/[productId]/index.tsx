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
import { addBasket } from "../../../redux/action";
import { wrapper } from "../../../redux/store";
import { GetServerSideProps } from "next";
import NumberControl from "../../../components/numberControl/NumberControl";
import { productInfoAPI } from "../../../libs/api";
import { productStyles } from "../../../assets/jss/style";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { selectBasket } from "../../../redux/selectors";
import { IProduct } from "../../../utils/interface";

const useStyles = makeStyles(productStyles);

export default function Product({ productInfo }: { productInfo: IProduct }) {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);

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
        {list.some(({ id }) => id == productInfo.id) ? (
          <NumberControl
            product={list.find(({ id }) => id == productInfo.id)}
          />
        ) : (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => dispatch(addBasket({ ...productInfo, count: 1 }))}
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
      },
    };
  });
