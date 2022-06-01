import {
  Card,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Divider,
  Box,
} from "@material-ui/core";
import { productStyles } from "../../styles/jss/style";
import { IProduct } from "../../utils/interface";
import { ElementBasket, ElementProduct } from "../../utils/enum";
import { useAppSelector } from "../../redux/hooks";
import { selectBasket, selectLoading } from "../../redux/selectors";
import { FC, ReactNode } from "react";
import Image from "next/image";
import { separatorsNumber } from "../../utils/functions";
import CustomLink from "../customLink/CustomLink";
import { generateCardActions } from "../../helpers/productCard";

const useStyles = makeStyles(productStyles);

const Product: FC<{ product: IProduct }> = ({ product }) => {
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);
  const { product: productLoading, basket } = useAppSelector(selectLoading);

  const generateClassCard = () => {
    if (productLoading.includes(ElementProduct.card_product + product.id)) {
      return `${classes.cardLoading} ${classes.root}`;
    } else {
      return classes.root;
    }
  };

  const generateBtn = generateCardActions({
    zone: basket,
    element: ElementBasket.btn_add_basket + product.id,
    product,
    list,
  });

  return (
    <Card className={generateClassCard()}>
      <CustomLink href={`product/${product.id}`} title={product.name}>
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
      </CustomLink>
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
        <CustomLink href={`product/${product.id}`} title={product.name}>
          اطلاعات بیشتر
        </CustomLink>
        <Divider />
        <Typography
          className={classes.price}
          dir="ltr"
          variant="body1"
          component="p"
        >
          {separatorsNumber({ price: product.price, currencyUnit: "fa-IR" })}
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>{generateBtn as ReactNode}</CardActions>
    </Card>
  );
};

export default Product;
