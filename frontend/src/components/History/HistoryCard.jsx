import React from "react";
import ItemCard from "./ItemCard";

function HistoryCard({ total, index, items, status }) {
  return (
    <div className="card mb-5">
      <div className="card-header">{index + 1}</div>
      <div className="card-body">
        <h5 className="card-title">Total: {total} PKR</h5>
        <h5 className="card-title">Status: {status}</h5>
        <div className="accordion" id="accordionExample">
          {items.map((item, index) => (
            <ItemCard
              title={item.itemId.title}
              index={index}
              key={item._id}
              total={item.subTotal.$numberDecimal}
              quantity={item.quantity}
              description={item.itemId.description}
            />
          ))}
        </div>
        <a href="#" className="btn btn-primary my-3 bg-dark">
          Order Details
        </a>
      </div>
    </div>
  );
}

export default HistoryCard;
