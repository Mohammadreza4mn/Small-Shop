import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Box,
  makeStyles,
  Chip,
} from "@material-ui/core";
import { IProduct } from "../../utils/interface";
import NumberControl from "../../components/numberControl/NumberControl";
import { useRouter } from "next/router";
import { shoppingCartStyles } from "../../assets/jss/style";
import { useEffect, useState } from "react";

const useStyles = makeStyles(shoppingCartStyles);

export default function ShoppingCart() {
  const Router = useRouter();
  const classes = useStyles();

  const list = useSelector<IProduct[]>(({ basket }) => basket.list);

  const [totalPrice, setTotalPrice] = useState(0);

  const calculationTotalPrice = () => {
    if (list.length > 0) {
      return list.reduce((total, { count, price }) => total + count * price, 0);
    } else {
      return 0;
    }
  };

  useEffect(() => setTotalPrice(calculationTotalPrice()), [list]);

  return (
    <div>
      {list.length > 0 ? (
        <List dense={true} className={classes.listItem}>
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
          <Chip label={`جمع کل: ${totalPrice.toLocaleString()} تومان`} />
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
