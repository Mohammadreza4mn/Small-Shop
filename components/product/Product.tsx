import { useDispatch, useSelector } from "react-redux";
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
import NumberControl from "../numberControl/NumberControl";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  count?: number;
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
  const { basket }: { basket: IProduct[] } = useSelector((state) => state);

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
        {basket.some(({ id }) => id == product.id) ? (
          <NumberControl product={basket.find(({ id }) => id == product.id)} />
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() =>
              dispatch({
                type: actionTypes.addProductServer,
                payload: { ...product, count: 1 },
              })
            }
          >
            Add to cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Product;
