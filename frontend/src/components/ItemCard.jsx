import React, { useState } from "react";
import styles from "./ItemCard.module.css";
import handleCart from "../Util/HandleCart";

function ItemCard({
  itemID,
  title,
  description,
  price,
  imgUrl,
  cart,
  setCart,
}) {
  const [quantity, setQuantity] = useState(1);
  const handleClick = () => {
    handleCart(cart, setCart, itemID, quantity, title, price);
  };

  return (
    <>
      <div class="col-lg-4 col-md-6 text-center">
        <div class="single-product-item">
          <div class="product-image">
            <a href={`/item?id=${itemID}`}>
              <img className={styles.foodimage} src={imgUrl} alt="" />
            </a>
          </div>
          <h3>{title}</h3>
          <p class="product-price">
            <span>Per Kg</span> {price}${" "}
          </p>
          <a class="cart-btn" onClick={handleClick}>
            <i class="fas fa-shopping-cart" onClick={handleClick}></i> Add to
            Cart
          </a>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
