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
import NumberControl from "../../components/numberControl/NumberControl";
import { useRouter } from "next/router";
import { shoppingCartStyles } from "../../styles/jss/style";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectBasket } from "../../redux/selectors";
import Image from "next/image";

const useStyles = makeStyles(shoppingCartStyles);

export default function ShoppingCart() {
  const Router = useRouter();
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (list.length > 0) {
      setTotalPrice(
        list.reduce((total, { count = 1, price }) => total + count * price, 0)
      );
    } else {
      setTotalPrice(0);
    }
  }, [list]);

  return (
    <div>
      {list.length > 0 ? (
        <List dense={true} className={classes.listItem}>
          {list.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <Image src={item.img} alt={item.name} layout="fill" />
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
