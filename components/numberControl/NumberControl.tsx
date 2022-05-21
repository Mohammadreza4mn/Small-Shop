import {
  IconButton,
  Box,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { updateBasket, removeItemBasket } from "../../redux/action";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FC } from "react";
import { IProductBasket } from "../../utils/interface";
import { ElementBasket } from "../../utils/enum";
import { selectLoading } from "../../redux/selectors";
import { numberControlStyles } from "../../assets/jss/style";

const useStyles = makeStyles(numberControlStyles);

const NumberControl: FC<{ product: IProductBasket }> = ({ product }) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const { basket } = useAppSelector(selectLoading);

  const handleUpdateBasket = (status: "increment" | "decrement" | "remove") => {
    if (status == "increment") {
      dispatch(
        updateBasket({ id: product.id, data: { count: ++product.count } })
      );
    } else if (status == "decrement") {
      dispatch(
        updateBasket({ id: product.id, data: { count: --product.count } })
      );
    } else if (status == "remove") {
      dispatch(removeItemBasket(product.id));
    }
  };

  const generateProductCount = () => {
    if (basket.includes(ElementBasket.span_product_count + product.id)) {
      return <CircularProgress size={20} />;
    } else {
      return product.count;
    }
  };

  return (
    <Box className={classes.root}>
      <IconButton onClick={() => handleUpdateBasket("increment")}>
        <AddCircleOutlineIcon />
      </IconButton>
      <span className={classes.productCount}>{generateProductCount()}</span>
      <IconButton
        disabled={product.count <= 1}
        onClick={() => handleUpdateBasket("decrement")}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
      <IconButton onClick={() => handleUpdateBasket("remove")}>
        <DeleteIcon color="error" />
      </IconButton>
    </Box>
  );
};

export default NumberControl;
