import { AppBar, Toolbar, Badge, IconButton } from "@material-ui/core";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IinistialState } from "../../utils/interface";

export default function Header() {
  const { basket } = useSelector<IinistialState, IinistialState>(
    (state) => state
  );

  const [count, setCount] = useState<number>(0);

  const generateCountBasket = () => {
    if (basket.length > 1) {
      return basket.reduce(
        (total, currentValue) => total.count + currentValue.count
      );
    } else if (basket.length > 0) {
      return basket[0].count || 0;
    } else {
      return 0;
    }
  };

  useEffect(() => setCount(generateCountBasket()), [basket]);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link href="/shopping-cart">
          <IconButton>
            <Badge badgeContent={count} color="error">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
