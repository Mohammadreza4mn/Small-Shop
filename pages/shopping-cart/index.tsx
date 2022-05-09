import { useSelector, useDispatch } from "react-redux";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { IProduct } from "../../components/product/Product";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import * as actionTypes from "../../redux/action";
import Link from "next/link";

export default function ShoppingCart() {
  const { basket }: { basket: IProduct[] } = useSelector((state) => state);
  console.log(basket);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: 70 }}>
      {basket.length > 0 ? (
        <List dense={true}>
          {basket.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <img src={item.picture.medium} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${item.name.first} ${item.name.last}`} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() =>
                    dispatch({
                      type: actionTypes.incrementProduct,
                      payload: item.location.street.number,
                    })
                  }
                >
                  <AddCircleOutlineIcon />
                </IconButton>
                <span>{item.count}</span>
                <IconButton
                  onClick={() =>
                    dispatch({
                      type: actionTypes.decrementProduct,
                      payload: item.location.street.number,
                    })
                  }
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : (
        <Link href="/">go back</Link>
      )}
    </div>
  );
}
