import {
  Card,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Divider,
} from "@material-ui/core";
import { wrapper } from "../../../redux/store";
import { GetServerSideProps } from "next";
import { productInfoAPI } from "../../../libs/api";
import { productInfoStyles } from "../../../styles/jss/style";
import { useAppSelector } from "../../../redux/hooks";
import { selectBasket, selectLoading } from "../../../redux/selectors";
import { IProduct } from "../../../utils/interface";
import { ElementBasket } from "../../../utils/enum";
import { ParsedUrlQuery } from "querystring";
import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import { separatorsNumber } from "../../../utils/functions";
import { generateCardActions } from "../../../helpers/productCard";

const useStyles = makeStyles(productInfoStyles);

export default function Product({
  productInfo,
}: {
  productInfo: IProduct;
}): ReactElement {
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);
  const { basket } = useAppSelector(selectLoading);

  const generateBtn = generateCardActions({
    zone: basket,
    element: ElementBasket.btn_add_basket + productInfo.id,
    product: productInfo,
    list,
  });

  return (
    <Card className={classes.root}>
      <Image
        src={productInfo.img}
        alt={productInfo.name}
        layout="responsive"
        width={100}
        height={50}
        objectFit="contain"
        blurDataURL="/images/Loading_icon.gif"
        placeholder="blur"
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
          {separatorsNumber({
            price: productInfo.price,
            currencyUnit: "fa-IR",
          })}
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>{generateBtn as ReactNode}</CardActions>
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
