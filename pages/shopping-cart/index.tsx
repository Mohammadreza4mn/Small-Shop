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
import { IProduct } from "../../utils/interface";

import * as actionTypes from "../../redux/action";
import Link from "next/link";
import { wrapper } from "../../redux/store";
import { GetServerSideProps } from "next";
import { END } from "redux-saga";
import NumberControl from "../../components/numberControl/NumberControl";

export default function ShoppingCart() {
  const dispatch = useDispatch();

  const list = useSelector<IProduct[]>(({ basket }) => basket.list);

  //TODO اضافه کردن جمع حساب سبد خرید
  return (
    <div>
      {list.length > 0 ? (
        <List dense={true}>
          {list.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <img src={item.img} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <NumberControl product={item} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Link href="/">go back</Link>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ preview }) => {
    await store.dispatch({ type: actionTypes.getListBasket });
    store.dispatch(END);
    await store.sagaTask.toPromise();
  });
