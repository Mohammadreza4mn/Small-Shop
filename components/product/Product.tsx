import styles from "../../styles/Product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/action";
import Button from "@material-ui/core/Button";

export interface IProduct {
  location: { postcode: number; street: { number: number } };
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
  count: number;
}

interface IProductProps {
  product: IProduct;
}

const Product = (props: IProductProps) => {
  const dispatch = useDispatch();
  const { basket }: { basket: IProduct[] } = useSelector((state) => state);

  const handleAddToBasket = (product: IProduct) => {
    dispatch({
      type: actionTypes.addProduct,
      payload: { ...product, count: 1 },
    });
  };

  return (
    <div className={styles.product}>
      <h2
        className={styles.product__title}
      >{`${props.product.name.first} ${props.product.name.last}`}</h2>
      <div className={styles.product__image}>
        <img
          src={props.product.picture.medium}
          alt={`${props.product.name.first} ${props.product.name.last}`}
        />
      </div>
      <div className="product__price-button-container">
        <div className={styles.product__price}>
          ${props.product.location.postcode}
        </div>
        <Button
          variant="contained"
          color="primary"
          disabled={basket.some(
            (item) =>
              item.location.street.number ==
              props.product.location.street.number
          )}
          onClick={() => handleAddToBasket(props.product)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
