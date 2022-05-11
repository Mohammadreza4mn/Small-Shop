export const productStyles = (theme) => ({
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

export const productListStyles = (theme) => ({
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 10,
  },
});
