import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "./Home.module.css";
import DD from "../../assets/DD_bg_logo_2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ItemCard from "../ItemCard";
import { useNavigate } from "react-router";
import Footer from "./Footer";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  async function fetchCategories() {
    try {
      const res = await axios.get(
        `https://dinner-dash-web.onrender.com/categories/get-all`
      );
      setCategories(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchItems() {
    try {
      const res = await axios.get(
        `https://dinner-dash-web.onrender.com/items/category-items`,
        { params: { catIDs: "65c6b22aa0c2d611445480d6" } }
      );
      setItems(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  //
  useEffect(() => {
    fetchCategories();
    fetchItems();
    // Load cart from local store if present
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

  // Updating LocalStorage
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 5000,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className={`container-fluid p-0 overflow-hidden`}>
        <div className="row ">
          <div className={`col-12`}>
            <Navbar cart={cart} user={user} setUser={setUser} />
            <div
              class="hero-area hero-bg"
              style={{ height: "700px", textAlign: "center" }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-9 text-center m-auto">
                    <div class="hero-text">
                      <div class="hero-text-tablecell">
                        <p class="subtitle">Fast & Fresh</p>
                        <h1>Elevate your Dining Experience</h1>
                        <div class="hero-btns">
                          <a
                            class="boxed-btn text-decoration-none"
                            onClick={() => {
                              navigate(`/categories?id=${categories[0]?._id}`);
                            }}
                          >
                            Explore Menu
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* USP Cards */}
            <div class="list-section pt-80 pb-80">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div class="list-box d-flex align-items-center">
                      <div class="list-icon">
                        <i class="fas fa-shipping-fast"></i>
                      </div>
                      <div class="content">
                        <h3>Free Shipping</h3>
                        <p>When order over $75</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div class="list-box d-flex align-items-center">
                      <div class="list-icon">
                        <i class="fas fa-phone-volume"></i>
                      </div>
                      <div class="content">
                        <h3>24/7 Support</h3>
                        <p>Get support all day</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="list-box d-flex justify-content-start align-items-center">
                      <div class="list-icon">
                        <i class="fas fa-sync"></i>
                      </div>
                      <div class="content">
                        <h3>Refund</h3>
                        <p>Get refund within 3 days!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* USP End */}

            {/* Product Section */}
            <div class="product-section mt-150 mb-150">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2 text-center">
                    <div class="section-title">
                      <h3 className="font-weight-bold">
                        <span class="orange-text">New</span> Products
                      </h3>
                      <p>
                        Elevate your dining experience with our handcrafted
                        creations, meticulously crafted to tantalize your taste
                        buds.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  {items?.map((item) => (
                    <ItemCard
                      itemID={item._id}
                      title={item.title}
                      description={item.description}
                      price={item.price.$numberDecimal}
                      imgUrl={item.photoUrl}
                      key={item._id}
                      cart={cart}
                      setCart={setCart}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Product Section End*/}

            {/* Discount Section */}
            <section class="shop-banner">
              <div class="container">
                <h3>
                  December sale is on! <br />
                  with big <span class="orange-text">Discount...</span>
                </h3>
                <div class="sale-percent">
                  <span>
                    Sale! <br />
                    Upto
                  </span>
                  50% <span>off</span>
                </div>
                <a
                  class="cart-btn btn-lg text-decoration-none"
                  onClick={() => {
                    navigate(`/categories?id=${categories[0]?._id}`);
                  }}
                >
                  Shop Now
                </a>
              </div>
            </section>
            {/* Discount Section */}

            {/* Who we are section */}
            <div class="abt-section mt-5 pt-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 col-md-12 bg-dark d-flex justify-content-center align-items-center">
                    <div class="bg-dark">
                      <img src="../assets/img/Group 1.png"></img>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 px-5">
                    <div class="text-left">
                      <p class="font-weight-light">Since 2002</p>
                      <h1 className="font-weight-bold ">
                        We are <span class="orange-text">Dinner Dash</span>
                      </h1>
                      <p>
                        Since its inception in 2002, Dinner Dash has remained a
                        driving force in the food ecommerce industry, offering a
                        diverse range of gourmet delicacies and everyday
                        necessities. With an unwavering commitment to
                        convenience and quality, we have cultivated a reputation
                        for excellence, catering to the discerning tastes of
                        customers worldwide.Our dedication to innovation ensures
                        that we continue to evolve, providing unparalleled
                        service and culinary inspiration to all who seek it.
                      </p>
                      <p>
                        Join us as we continue to redefine the boundaries of
                        food ecommerce, serving up delightful moments and
                        unforgettable meals for years to come.
                      </p>
                      <a class="boxed-btn mt-4 text-decoration-none">
                        know more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Who we are section */}

            {/* Testimonials  */}
            <div class="testimonail-section mt-150 mb-150">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2 text-center">
                    <div class="section-title">
                      <h3 className="font-weight-bold">
                        <span class="orange-text">Customer</span> Testimonials
                      </h3>
                    </div>
                  </div>
                  <div class="col-lg-10 offset-lg-1 text-center">
                    <div className="row justify-content-evenly">
                      <div className="slider-container">
                        <Slider {...settings}>
                          <div>
                            <div>
                              <div class="client-avater">
                                <img
                                  src="../assets/img/avaters/avatar1.png"
                                  alt=""
                                />
                              </div>
                              <div class="client-meta">
                                <h3>
                                  Jacob Sikim2 <span>Local shop owner</span>
                                </h3>
                                <p className="px-4">
                                  " Absolutely delicious! The food arrived
                                  promptly and tasted even better than I
                                  expected. Definitely ordering again! "
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div class="client-avater">
                                <img
                                  src="../assets/img/avaters/avatar2.png"
                                  alt=""
                                />
                              </div>
                              <div class="client-meta">
                                <h3>
                                  Jacob Sikim <span>Local shop owner</span>
                                </h3>
                                <p className="px-4">
                                  " Fantastic service and amazing variety! From
                                  breakfast to dinner, they've got it all.
                                  Highly recommend! "
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div class="client-avater">
                                <img
                                  src="../assets/img/avaters/avatar3.png"
                                  alt=""
                                />
                              </div>
                              <div class="client-meta">
                                <h3>
                                  David Niph <span>Local shop owner</span>
                                </h3>
                                <p className="px-4">
                                  " I was skeptical about ordering food online,
                                  but this exceeded my expectations. Fresh
                                  ingredients and top-notch flavors. A must-try!
                                  "
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div class="client-avater">
                                <img
                                  src="../assets/img/avaters/avatar1.png"
                                  alt=""
                                />
                              </div>
                              <div class="client-meta">
                                <h3>
                                  Jacob Sikim <span>Local shop owner</span>
                                </h3>
                                <p className="px-4">
                                  " The convenience of having gourmet meals
                                  delivered to my doorstep has made my busy
                                  weeknights so much easier. Thank you for the
                                  great service "
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div class="client-avater">
                                <img
                                  src="../assets/img/avaters/avatar2.png"
                                  alt=""
                                />
                              </div>
                              <div class="client-meta">
                                <h3>
                                  Jacob Sikim <span>Local shop owner</span>
                                </h3>
                                <p className="px-4">
                                  " As a foodie, I'm always on the hunt for new
                                  culinary experiences. This ecommerce food
                                  business has become my go-to for exploring
                                  unique and delicious dishes. "
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div class="client-avater">
                                <img
                                  src="../assets/img/avaters/avatar3.png"
                                  alt=""
                                />
                              </div>
                              <div class="client-meta">
                                <h3>
                                  Jacob Sikim <span>Local shop owner</span>
                                </h3>
                                <p className="px-4">
                                  " I've tried many food delivery services, but
                                  none compare to the quality and taste of the
                                  meals from this ecommerce platform. 5 stars
                                  all the way!"
                                </p>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonials End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
