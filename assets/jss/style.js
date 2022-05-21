import { createStyles } from "@material-ui/core/styles";

export const productStyles = (theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
    },
    media: {
      height: 220,
      backgroundSize: "contain !important",
    },
    description: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    price: {
      fontWeight: "bold !important",
    },
    cardLoading: {
      opacity: 0.3,
      pointerEvents: "none",
    },
  });

export const productListStyles = (theme) =>
  createStyles({
    list: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 10,
    },
  });

export const headerStyles = (theme) =>
  createStyles({
    root: {
      justifyContent: "space-between",
    },
    badge: {
      "& .MuiBadge-anchorOriginTopRightRectangle": {
        transform: "scale(0.6) translate(50%, -50%)",
        background: "unset",
      },
      "& .MuiCircularProgress-svg": {
        color: "red",
      },
    },
  });

export const shoppingCartStyles = (theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "50vh",
    },
    listItem: {
      display: "flex",
      flexDirection: "column",
    },
  });

export const numberControlStyles = (theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
    productCount: {
      width: 30,
      display: "flex",
      justifyContent: "center",
    },
  });
