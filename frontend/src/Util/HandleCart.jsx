import React from "react";

const handleCart = (
  cart,
  setCart,
  itemID,
  quantity,
  title,
  price,
  checkOut
) => {
  if (cart === []) {
    setCart([
      {
        itemId: itemID,
        quantity: quantity,
        title: title,
        price: price,
        subTotal: quantity * price,
      },
    ]);
  } else {
    const existingItem = cart.find((item) => item.itemId === itemID);
    if (existingItem) {
      let newQautity = 0;
      if (checkOut) {
        newQautity = quantity;
        if (quantity === 0) {
          const newCart = cart.filter((item) => item.itemId != itemID);
          setCart([...newCart]);
          return;
        }
      }
      const newCart = cart.map((item) => {
        if (item.itemId === existingItem.itemId) {
          if (!checkOut) {
            newQautity = item.quantity + quantity;
          }
          return {
            itemId: item.itemId,
            title: title,
            price: price,
            quantity: newQautity,
            subTotal: newQautity * price,
          };
        }
        return item;
      });
      setCart([...newCart]);
    } else {
      setCart([
        ...cart,
        {
          itemId: itemID,
          quantity: quantity,
          title: title,
          price: price,
          subTotal: quantity * price,
        },
      ]);
    }
  }
};

export default handleCart;
