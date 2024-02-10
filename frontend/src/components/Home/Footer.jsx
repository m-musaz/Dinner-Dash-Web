import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  return (
    <div class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-box about-widget">
              <h2 class="widget-title">About us</h2>
              <p>
                Indulge in a Culinary Adventure with Dinner Dash © 2024.
                Discover our exquisite menu crafted with passion and care. Join
                us in savoring the flavors that bring people together. Bon
                appétit!"
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-box get-in-touch footer-box pages">
              <h2 class="widget-title">Get in Touch</h2>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/muhammad-musa-zulfiqar">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.upwork.com/freelancers/musazulfqar">
                    Upwork
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-box pages">
              <h2 class="widget-title">Pages</h2>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="services.html">Shop</a>
                </li>
                <li>
                  <a href="news.html">News</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-box subscribe">
              <h2 class="widget-title">Subscribe</h2>
              <p>Subscribe to our mailing list to get the latest updates.</p>
              <form action="index.html">
                <input type="email" placeholder="Email" />
                <button type="submit">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
