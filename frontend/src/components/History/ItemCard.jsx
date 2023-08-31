import React from "react";

function ItemCard({ key, itemid, index, title, description, quantity, total }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${itemid}${index}`}
          aria-expanded="true"
          aria-controls={`#collapse${itemid}${index}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${itemid}${index}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <h3>{description}</h3>
          <h5>Item Quantity: {quantity}</h5>
          <h5>Sub Total: {total} PKR</h5>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
