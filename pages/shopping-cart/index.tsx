import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Box,
  makeStyles
} from "@material-ui/core";
import { IProduct } from "../../utils/interface";
import * as actionTypes from "../../redux/action";
import { wrapper } from "../../redux/store";
import { GetServerSideProps } from "next";
import { END } from "redux-saga";
import NumberControl from "../../components/numberControl/NumberControl";
import { useRouter } from "next/router";
import { shoppingCartStyles } from "../../assets/jss/style";

const useStyles = makeStyles(shoppingCartStyles);

export default function ShoppingCart() {
  const Router = useRouter();
  const classes = useStyles();

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
        <Box className={classes.root}>
          <h4>سبد خرید خالی است</h4>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => Router.back()}
          >
            بازگشت به صفحه قبل
          </Button>
        </Box>
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
