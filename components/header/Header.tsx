import { AppBar, Toolbar, Badge, IconButton } from "@material-ui/core";
import Link from "next/link";
import { IProduct } from "../../components/product/Product";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

export default function Header() {
  const { basket }: { basket: IProduct[] } = useSelector((state) => state);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link href="/shopping-cart">
          <IconButton color="secondary">
            <Badge badgeContent={basket.length} color="primary">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
