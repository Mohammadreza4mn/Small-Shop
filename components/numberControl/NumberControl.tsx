import { IconButton, Box } from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { updateBasket, removeItemBasket } from "../../redux/action";
import { useAppDispatch } from "../../redux/hooks";
import { FC } from "react";
import { IProduct } from "../../utils/interface";

const NumberControl: FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <Box>
      <IconButton
        onClick={() =>
          dispatch(
            updateBasket({ id: product.id, data: { count: ++product.count } })
          )
        }
      >
        <AddCircleOutlineIcon />
      </IconButton>
      <span>{product.count}</span>
      <IconButton
        onClick={() => {
          if (product.count > 1) {
            dispatch(
              updateBasket({ id: product.id, data: { count: --product.count } })
            );
          }
        }}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
      <IconButton onClick={() => dispatch(removeItemBasket(product.id))}>
        <DeleteIcon color="error" />
      </IconButton>
    </Box>
  );
};

export default NumberControl;
