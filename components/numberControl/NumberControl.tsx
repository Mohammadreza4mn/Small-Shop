import { IconButton, Box } from "@material-ui/core";

import { useDispatch } from "react-redux";
import * as actionTypes from "../../redux/action";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";

export default function NumberControl({ product }) {
  const dispatch = useDispatch();

  return (
    <Box>
      <IconButton
        onClick={() =>
          dispatch({
            type: actionTypes.updateBasketServer,
            payload: { id: product.id, data: { count: ++product.count } },
          })
        }
      >
        <AddCircleOutlineIcon />
      </IconButton>
      <span>{product.count}</span>
      <IconButton
        onClick={() => {
          if (product.count > 1) {
            dispatch({
              type: actionTypes.updateBasketServer,
              payload: { id: product.id, data: { count: --product.count } },
            });
          }
        }}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          dispatch({
            type: actionTypes.removeProductBasketServer,
            payload: product.id,
          });
        }}
      >
        <DeleteIcon color="error" />
      </IconButton>
    </Box>
  );
}
