import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import { useEffect, useState } from "react";
import { headerStyles } from "../../assets/jss/style";
import { useAppSelector } from "../../redux/hooks";
import { selectBasket } from "../../redux/selectors";

const useStyles = makeStyles(headerStyles);

export default function Header() {
  const classes = useStyles();

  const { list } = useAppSelector(selectBasket);

  const [count, setCount] = useState<number>(0);

  const generateCountBasket = () => {
    if (list.length > 0) {
      return list.reduce((total, { count }) => total + count, 0);
    } else {
      return 0;
    }
  };

  useEffect(() => setCount(generateCountBasket()), [list]);

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.root}>
        <IconButton>
          <Link href="/">
            <HomeIcon fontSize="large" />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="/shopping-cart">
            <Badge badgeContent={count} color="error">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
