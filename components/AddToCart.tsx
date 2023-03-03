import { Button } from "@material-ui/core";
import { AddShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import { Product } from "../types";

//TODO: connect this with Store to retain user cart.
// https://github.com/pmndrs/zustand for state management

const AddToCart = ({ product }: { product: Product }) => {
  const [isInCart, setIsInCart] = useState(false);

  if (isInCart) {
    return (
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<RemoveShoppingCart />}
        onClick={() => {
          setIsInCart(!isInCart);
        }}
      >
        Remove from Cart
      </Button>
    );
  }

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddShoppingCart />}
      onClick={() => {
        setIsInCart(!isInCart);
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
