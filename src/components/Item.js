import React, { useState } from "react";

// receiving name and category props from shopping list
function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  // function to toggle back and forth for add or remove to cart is true or not
  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
      // ternary for if is in cart is true, remove from list, else add
        className={isInCart ? "remove" : "add"}
         // click event for toggling the cart
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
