import React, { useEffect, useState } from "react";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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
}) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const handleClickMinus = () => {
    if (itemQuantity - 1 === 0) {
      setItemQuantity(0);
    } else {
      setItemQuantity(itemQuantity - 1);
    }
  };
  const handleClickAdd = () => {
    setItemQuantity(itemQuantity + 1);
  };
  useEffect(() => {
    handleCart(cart, setCart, itemId, itemQuantity, title, price, true);
  }, [itemQuantity]);
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{title}</td>
      <td>{price}</td>
      <td className="d-flex justify-content-center">
        <div className="align-self-center" onClick={handleClickMinus}>
          <RemoveCircleIcon />
        </div>
        <h5 className={`mx-3`}>{quantity}</h5>
        <div className="align-self-center" onClick={handleClickAdd}>
          <AddCircleIcon />
        </div>
      </td>
      <td>{subTotal}</td>
    </tr>
  );
}

export default TableRow;
