import React, { useEffect, useState } from "react";
import handleCart from "../../Util/HandleCart";

function TableRow({
  index,
  itemId,
  title,
  price,
  quantity,
  subTotal,
  cart,
  setCart,
  imgUrl,
}) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const handleQuantityChange = (event) => {
    setItemQuantity(parseInt(event.target.value)); // Update the quantity state with the new value
  };
  useEffect(() => {
    handleCart(cart, setCart, itemId, itemQuantity, title, price, imgUrl, true);
  }, [itemQuantity]);
  console.log(subTotal);
  return (
    // <tr>
    //   <th scope="row">{index + 1}</th>
    //   <td>{title}</td>
    //   <td>{price}</td>
    //   <td className="d-flex justify-content-center">
    //     <div className="align-self-center" onClick={handleClickMinus}>
    //       {/* <RemoveCircleIcon /> */}-
    //     </div>
    //     <h5 className={`mx-3`}>{quantity}</h5>
    //     <div className="align-self-center" onClick={handleClickAdd}>
    //       {/* <AddCircleIcon /> */}+
    //     </div>
    //   </td>
    //   <td>{subTotal}</td>
    // </tr>
    <tr class="table-body-row">
      <td class="product-remove">
        <button class="border border-white bg-dark text-white rounded">
          {index}
        </button>
      </td>
      <td class="product-image">
        <img src={imgUrl} alt="" />
      </td>
      <td class="product-name">{title}</td>
      <td class="product-price">{price}</td>
      <td class="product-quantity">
        <input
          type="number"
          placeholder="0"
          value={itemQuantity} // Set the value of the input to the quantity state
          onChange={handleQuantityChange}
        />
      </td>
      <td class="product-total">{subTotal}</td>
    </tr>
  );
}

export default TableRow;
