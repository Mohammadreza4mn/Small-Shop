import styles from "../../styles/Product.module.scss";
import { useDispatch } from "react-redux";
import { addBasketAPI } from "../../libs/api";
import * as actionTypes from "../../redux/action";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
} from "@material-ui/core";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  count: number;
  description: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 220,
  },
});

const Product = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleAddToBasket = (product: IProduct) => {
    addBasketAPI(product).then(() => alert("200"));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {product.price.toLocaleString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleAddToBasket(product)}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
