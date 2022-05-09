import styles from "../../styles/Product.module.scss";

export interface IProduct {
  location: { postcode: number; street: { number: number } };
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

interface IProductProps {
  product: IProduct;
}

const Product = (props: IProductProps) => {
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
        <button className={`snipcart-add-item ${styles.product__button}`}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
