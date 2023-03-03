import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../types";
import { products, reviews } from "../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | { message: string }>
) {
  const { id } = req.query;

  // Find the product with the specified ID in the products array
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) {
    res.status(404).json({message: `Product with ID ${id} not found`});
  } else {
    //TODO: Make a separate endpoint to fetch each product reviews
    product.reviews = reviews.filter((r) => r.productId === product?.id);
    res.status(200).json(product);
  }
}
