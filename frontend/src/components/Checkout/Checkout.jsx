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
          `https://dinner-dash-web.onrender.com/user/save-order`,
          {
            order: orders,
          },
          { headers: { secret_token: user.token } }
        );
        handleCart(cart, setCart, "1", 1, 1, 1, " ", false, true);
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
      <div className={`container-fluid p-0 overflow-hidden`}>
        <div className="row ">
          <div className={`col-12`}>
            <Navbar cart={cart} user={user} setUser={setUser} />
            <div
              class="hero-area hero-bg"
              style={{ height: "300px", textAlign: "center" }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-9 text-center m-auto">
                    <div class="hero-text">
                      <div class="hero-text-tablecell">
                        <p class="subtitle">Shopping Cart</p>
                        <h1>Check Out</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart-section mt-150 mb-150">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 col-md-12">
                    <div class="cart-table-wrap">
                      <table class="cart-table">
                        <thead class="cart-table-head">
                          <tr class="table-head-row">
                            <th class="product-remove"></th>
                            <th class="product-image">Product Image</th>
                            <th class="product-name">Name</th>
                            <th class="product-price">Price</th>
                            <th class="product-quantity">Quantity</th>
                            <th class="product-total">Total</th>
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
                              imgUrl={item.imgUrl}
                              cart={cart}
                              setCart={setCart}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="total-section">
                      <table class="total-table">
                        <thead class="total-table-head">
                          <tr class="table-total-row">
                            <th>Total</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="total-data">
                            <td>
                              <strong>Subtotal: </strong>
                            </td>
                            <td>${total}</td>
                          </tr>
                          <tr class="total-data">
                            <td>
                              <strong>Shipping: </strong>
                            </td>
                            <td>$45</td>
                          </tr>
                          <tr class="total-data">
                            <td>
                              <strong>Total: </strong>
                            </td>
                            {Object.keys(cart).length ? (
                              <td>${total + 45}</td>
                            ) : (
                              <td>$0</td>
                            )}
                          </tr>
                        </tbody>
                      </table>
                      <div class="cart-buttons">
                        {Object.keys(user).length ? (
                          <a onClick={handleCheckout} class="boxed-btn black">
                            Check Out
                          </a>
                        ) : undefined}
                      </div>
                    </div>

                    <div class="coupon-section">
                      <h3>Apply Coupon</h3>
                      <div class="coupon-form-wrap">
                        <form action="index.html">
                          <p>
                            <input type="text" placeholder="Coupon" />
                          </p>
                          <p>
                            <input type="submit" value="Apply" />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
