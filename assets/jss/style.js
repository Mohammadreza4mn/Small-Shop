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
