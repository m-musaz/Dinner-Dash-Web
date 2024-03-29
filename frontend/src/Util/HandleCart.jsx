import React from "react";

const handleCart = (
  cart,
  setCart,
  itemID,
  quantity,
  title,
  price,
  imgUrl,
  checkOut,
  Clear
) => {
  console.log("url=", imgUrl);
  if (Clear) {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    return;
  }
  if (!cart.length) {
    setCart([
      {
        itemId: itemID,
        quantity: quantity,
        title: title,
        price: price,
        subTotal: quantity * price,
        imgUrl: imgUrl,
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
          if (newCart.length === 0) {
            localStorage.setItem("cart", JSON.stringify(newCart));
          }
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
            imgUrl: item.imgUrl,
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
          imgUrl: imgUrl,
        },
      ]);
    }
  }
};

export default handleCart;
