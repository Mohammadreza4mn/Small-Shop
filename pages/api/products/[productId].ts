import type { NextApiRequest, NextApiResponse } from "next";
import db from "../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productId }: { productId?: number } = req.query;

  const handleFindProduct = () =>
    new Promise((resolve, reject) => {
      let flag = db.find(({ id }) => id == productId);

      if (flag) {
        resolve(flag);
      } else {
        reject("The product was not found");
      }
    });

  try {
    const result = await handleFindProduct();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
}
