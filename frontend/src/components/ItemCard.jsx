import React, { useState } from "react";
import styles from "./ItemCard.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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
    <div className={`card text-white shadow-lg mb-5 ${styles.crd}`}>
      <img
        className="mt-3 rounded-circle"
        src={imgUrl}
        alt="Item Image"
        height={"90%"}
      />
      <div className="card-body">
        <div className="col-12 d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <h5 className="text-success">{`${price} PKR`}</h5>
        </div>
        <p className="card-text">{description}</p>
        <div className="col-12 d-flex justify-content-between">
          <button className={`btn ${styles.cardbtn}`} onClick={handleClick}>
            Add to Cart
          </button>
          <div
            className="align-self-center"
            onClick={() => {
              if (quantity != 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <RemoveCircleIcon />
          </div>
          <button className={`btn px-3 rounded-pill ${styles.cardbtn}`}>
            {quantity}
          </button>
          <div
            className="align-self-center"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <AddCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
