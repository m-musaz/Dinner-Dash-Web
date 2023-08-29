import React from "react";
import styles from "./ItemCard.module.css";

function ItemCard({ title, description, price, imgUrl }) {
  return (
    <div
      className="card text-white shadow-lg mb-5"
      style={{ width: "20rem", minHeight: "10rem", backgroundColor: "#1e1e1e" }}
    >
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
          <button className={`btn ${styles.cardbtn}`}>Add to Cart</button>
          <button className={`btn ${styles.cardbtn}`}>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
