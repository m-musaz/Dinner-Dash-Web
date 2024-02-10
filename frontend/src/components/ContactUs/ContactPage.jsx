import React, { useEffect, useState } from "react";
import styles from "./ContactPage.module.css";
import Navbar from "../Home/Navbar";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import handleCart from "../../Util/HandleCart";

function ContactPage() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const location = useLocation();
  const [ItemID, setItemID] = useState([]);
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    handleCart(
      cart,
      setCart,
      ItemID,
      quantity,
      item[0]?.title,
      item[0]?.price.$numberDecimal,
      item[0]?.imgUrl
    );
  };

  useEffect(() => {
    // Load cart from local store if present
    const urlSearchParams = new URLSearchParams(location.search);
    const idParam = urlSearchParams.get("id");
    if (idParam) {
      setItemID([idParam]);
    }
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      setUser(token);
    } else {
      setUser({});
    }
    if (cartFromStorage) {
      setCart(cartFromStorage);
    }
  }, []);

  const fetchItem = async () => {
    try {
      const res = await axios.get(
        `https://dinner-dash-web-backend.vercel.app/items/get-by-id`,
        {
          params: { id: ItemID },
        }
      );
      setItem(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (ItemID.length) {
      console.log(ItemID);
      fetchItem();
    }
  }, [ItemID]);

  // Updating LocalStorage
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value)); // Update the quantity state with the new value
  };
  return (
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
                      <p class="subtitle">We would love to hear From you</p>
                      <h1>Contact Us</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-from-section mt-150 mb-150">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mb-5 mb-lg-0">
                  <div class="form-title">
                    <h2>Do you have any questions?</h2>
                    <p>
                      Have a question, suggestion, or just want to say hello?
                      We'd love to hear from you! At Dinner Dash, we're
                      committed to providing exceptional service and ensuring
                      your dining experience is nothing short of delightful.
                      Whether you're seeking assistance with an order, curious
                      about our menu offerings, or simply want to share your
                      feedback, our dedicated team is here to assist you every
                      step of the way. Feel free to reach out to us via phone,
                      email, or through the contact form below. Your
                      satisfaction is our top priority, and we look forward to
                      serving you soon!
                    </p>
                  </div>
                  <div id="form_status"></div>
                  <div class="contact-form">
                    <form
                      type="POST"
                      id="fruitkha-contact"
                      onSubmit="return valid_datas( this );"
                    >
                      <p>
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          id="name"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          id="email"
                        />
                      </p>
                      <p>
                        <input
                          type="tel"
                          placeholder="Phone"
                          name="phone"
                          id="phone"
                        />
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          id="subject"
                        />
                      </p>
                      <p>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                        ></textarea>
                      </p>
                      <input type="hidden" name="token" value="FsWga4&@f6aw" />
                      <p>
                        <input type="submit" value="Submit" />
                      </p>
                    </form>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="contact-form-wrap">
                    <div class="contact-form-box">
                      <h4>
                        <i class="fas fa-map"></i> Shop Address
                      </h4>
                      <p>34/8, Lahore, Pakistan</p>
                    </div>
                    <div class="contact-form-box">
                      <h4>
                        <i class="far fa-clock"></i> Shop Hours
                      </h4>
                      <p>
                        MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                      </p>
                    </div>
                    <div class="contact-form-box">
                      <h4>
                        <i class="fas fa-address-book"></i> Contact
                      </h4>
                      <p>
                        Phone: +00 111 222 3333 <br /> Email:
                        support@dinnerdash.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="find-location blue-bg">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <p>
                    {" "}
                    <i class="fas fa-map-marker-alt"></i> Find Our Location
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="embed-responsive embed-responsive-21by9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen=""
              class="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
