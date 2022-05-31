import { ISeparatorsNumber } from "./interface";

export const separatorsNumber: ISeparatorsNumber = ({
  price,
  currencyUnit,
}) => {
  const unit = {
    "fa-IR": "تومان",
    "en-US": "$",
  };

  return `${Number(price).toLocaleString(currencyUnit)} ${unit[currencyUnit]}`;
};
