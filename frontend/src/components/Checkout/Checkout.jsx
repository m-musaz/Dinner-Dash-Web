import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import styles from "./Checkout.module.css";
import TableRow from "./TableRow";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    // Load cart from local store if present
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromStorage) {
      setCart(cartFromStorage);
    }
  }, []);

  useEffect(() => {
    // Load cart from local store if present
    let val = 0;
    cart.forEach((item) => {
      val += item.subTotal;
    });
    setTotal(val);
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      console.log("empty");
    }
  }, [cart]);
  return (
    <>
      <div
        className={`container-fluid p-0 overflow-hidden ${styles.outercontainer}`}
      >
        <div className="row ">
          <div className={`col-12`}>
            <Navbar cart={cart} />
            <div className={`row py-3 ${styles.categoriesbg}`}>
              <div className="col-12 my-5">
                <h1 className="pb-5">CheckOut</h1>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qauntity</th>
                      <th scope="col">Sub Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((item, index) => (
                      <TableRow
                        key={item.itemId}
                        index={index}
                        title={item.title}
                        itemId={item.itemId}
                        price={item.price}
                        quantity={item.quantity}
                        subTotal={item.subTotal}
                        cart={cart}
                        setCart={setCart}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <h1 className="pb-5">Total: {total} PKR</h1>
              <button
                className={`mb-4 py-2 rounded-pill ${styles.checkoutbtn}`}
              >
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
