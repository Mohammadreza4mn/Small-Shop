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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IinistialState } from "../../utils/interface";
import { headerStyles } from "../../assets/jss/style";

const useStyles = makeStyles(headerStyles);

export default function Header() {
  const classes = useStyles();

  const basket = useSelector<IinistialState, IinistialState>(
    ({ basket }) => basket.list
  );

  const [count, setCount] = useState<number>(0);

  const generateCountBasket = () => {
    if (basket.length > 0) {
      return basket.reduce((total, { count }) => total + count, 0);
    } else {
      return 0;
    }
  };

  useEffect(() => setCount(generateCountBasket()), [basket]);

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
