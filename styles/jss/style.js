import { createStyles } from "@material-ui/core/styles";

export const productStyles = (theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    img: {
      cursor: "pointer",
      marginBottom: "auto",
    },
    description: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    price: {
      fontWeight: "bold !important",
    },
    "@keyframes loading": {
      "0%": { opacity: 1 },
      "50%": { opacity: 0.3 },
      "100%": { opacity: 1 },
    },
    cardLoading: {
      pointerEvents: "none",
      animation: "$loading 2s infinite",
    },
  });

export const productInfoStyles = (theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "50vh",
      "& .MuiCardActions-root": {
        justifyContent: "center",
      },
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
      margin: "0 10px",
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

export const progressBarStyles = (theme) =>
  createStyles({
    root: {
      zIndex: 9999,
      backgroundColor: theme.palette.primary.main,
      "& .MuiLinearProgress-bar": {
        backgroundColor: "yellowgreen",
      },
    },
    hidden: {
      visibility: "hidden",
    },
  });
