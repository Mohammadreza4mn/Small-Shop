import {
  IFindBasket,
  IFindLoading,
  IGenerateCardActions,
} from "../utils/interface";
import { Button, CircularProgress } from "@material-ui/core";
import { addBasket } from "../redux/action";
import { useAppDispatch } from "../redux/hooks";
import NumberControl from "../components/numberControl/NumberControl";

export const findLoading = ({
  zone,
  element,
  exprIfTrue,
  exprIfFalse,
}: IFindLoading) => (zone.includes(element) ? exprIfTrue : exprIfFalse);

export const findBasket = ({
  list,
  id,
  exprIfTrue,
  exprIfFalse,
}: IFindBasket) => {
  let index: number = list.findIndex(({ id: idItem }) => idItem === id);
  let notFound = -1;

  return index > notFound ? exprIfTrue(index) : exprIfFalse;
};

export const generateCardActions = ({
  zone,
  element,
  product,
  list,
}: IGenerateCardActions) => {
  const dispatch = useAppDispatch();

  const btnAdd = (
    <Button
      size="small"
      color="primary"
      variant="contained"
      onClick={(e) => dispatch(addBasket({ ...product, count: 1 }))}
    >
      افزودن به سبد خرید
    </Button>
  );

  const numberControl = (index: number) => (
    <NumberControl product={list[index]} />
  );

  return findLoading({
    zone,
    element,
    exprIfTrue: <CircularProgress />,
    exprIfFalse: findBasket({
      list,
      id: product.id,
      exprIfTrue: (index: number) => numberControl(index),
      exprIfFalse: btnAdd,
    }),
  });
};
