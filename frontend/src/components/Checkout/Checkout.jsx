import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import styles from "./Checkout.module.css";
import TableRow from "./TableRow";
import axios from "axios";
import handleCart from "../../Util/HandleCart";
import { useNavigate } from "react-router";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    // Load cart from local store if present
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromStorage) {
      setCart(cartFromStorage);
    }
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      if (Object.keys(token).length) {
        console.log(token, "this is token");
        setUser(token);
      }
    }
  }, []);

  const handleCheckout = async () => {
    console.log(cart);
    const orders = cart.map((item) => {
      return { itemId: item.itemId, quantity: item.quantity };
    });
    if (!orders.length) {
      alert("Cart is Empty");
    } else {
      try {
        const res = await axios.post(
          `http://localhost:3000/user/save-order`,
          {
            order: orders,
          },
          { headers: { secret_token: user.token } }
        );
        handleCart(cart, setCart, "1", 1, 1, 1, false, true);
        alert("You Order is Placed");
        navigate("/");
      } catch (err) {
        alert(err);
      }
    }
  };

  useEffect(() => {
    let val = 0;
    cart.forEach((item) => {
      val += item.subTotal;
    });
    setTotal(val);
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <>
      <div
        className={`container-fluid p-0 overflow-hidden ${styles.outercontainer}`}
      >
        <div className="row ">
          <div className={`col-12`}>
            <Navbar cart={cart} user={user} setUser={setUser} />
            <div className={`row py-3 ${styles.categoriesbg}`}>
              <div className="col-12 my-5">
                {Object.keys(user).length ? (
                  <>
                    <h1>{user.user.fullName}'s</h1>
                    <h1 className="pb-5">Cart</h1>
                  </>
                ) : (
                  <h1 className="pb-5">Your Cart</h1>
                )}
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
              <h1 className="">Total: {total} PKR</h1>
              {Object.keys(user).length ? (
                <button
                  className={`mb-4 py-2 rounded-pill ${styles.checkoutbtn}`}
                  onClick={handleCheckout}
                >
                  CheckOut
                </button>
              ) : undefined}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
