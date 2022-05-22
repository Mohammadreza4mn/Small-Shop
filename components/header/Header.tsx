import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import { useEffect, useState } from "react";
import { headerStyles } from "../../styles/jss/style";
import { useAppSelector } from "../../redux/hooks";
import { selectBasket, selectLoading } from "../../redux/selectors";
import { ElementBasket } from "../../utils/enum";
import { FC } from "react";

const useStyles = makeStyles(headerStyles);

const Header: FC = () => {
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);
  const { basket } = useAppSelector(selectLoading);

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (list.length > 0) {
      setCount(list.reduce((total, { count }) => total + count, 0));
    } else {
      setCount(0);
    }
  }, [list]);

  const generateShoppingCart = () => {
    if (basket.includes(ElementBasket.badge_basket)) {
      return (
        <Badge
          className={classes.badge}
          badgeContent={<CircularProgress />}
          color="error"
        >
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      );
    } else {
      return (
        <Badge badgeContent={count} color="error">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      );
    }
  };

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.root}>
        <IconButton>
          <Link href="/">
            <HomeIcon fontSize="large" />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="/shopping-cart">{generateShoppingCart()}</Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
