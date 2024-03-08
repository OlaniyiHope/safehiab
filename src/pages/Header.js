// ParentTable.js
import React, { useState } from "react";
import Nav from "./Nav";
import vivid from "./vivid.jpg";
import trust from "./pil2.png";
import trust2 from "./hull2.png";
import trust3 from "./oneTree.jpeg";
import trust4 from "./bbc.png";
import videoSource from "./adv.mp4";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import ran from "./ran.png";

import "./land.css";
const Header = () => {
  const vividImage = `url(${vivid})`; // Convert the image path to a URL string

  return (
    <>
      <header class="header-area">
        <div class="logo-bar">
          <div class="container clearfix">
            <div class="logo">
              <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index.html">
                <img
                  src={ran}
                  alt=""
                  style={{ width: "100px", height: "50px" }}
                />
              </a>
            </div>

            <div class="information-content">
              <div class="info-box  hidden-sm">
                <div class="icon">
                  <span class="icon-envelope"></span>
                </div>
                <div class="text">EMAIL</div>
                <a href="mailt:contact@scriptsbundle.com">
                  safehiab@gmail.com
                </a>{" "}
              </div>

              <div class="info-box">
                <div class="icon">
                  <span class="icon-phone"></span>
                </div>
                <div class="text">Call Now</div>
                <a class="location" href="#">
                  09134777222
                </a>{" "}
              </div>
              <div class="info-box">
                <div class="icon">
                  <span class="icon-map-pin"></span>
                </div>
                <div class="text">Find Us</div>
                <a class="location" href="#">
                  i201, Ogba Shopping Complex, Ikeja, Lagos
                </a>{" "}
              </div>
            </div>
          </div>
        </div>

        <div class="navigation-2">
          <nav class="navbar navbar-default ">
            <div class="container">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#main-navigation"
                  aria-expanded="false"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="collapse navbar-collapse" id="main-navigation">
                <ul class="nav navbar-nav">
                  <li class="dropdown active">
                    {" "}
                    <a
                      class="dropdown-toggle "
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      Home <span class="fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index.html">
                          Home{" "}
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index-2.html">
                          Home Page 2
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index-3.html">
                          Home Page 3 (Video Bg)
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index-5.html">
                          Home Order Tracking
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index-4.html">
                          Home Order Tracking 2
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/one-page.html">
                          One Page{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a
                      class="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      About Company <span class="fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/about.html">
                          About{" "}
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/about-1.html">
                          About 2
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown ">
                    {" "}
                    <a
                      class="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      Our Service <span class="fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/services.html">
                          Services
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/services-2.html">
                          Services 2
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/services-3.html">
                          Services 3
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/services-4.html">
                          Services 4 (Sticky Bar)
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/services-details.html">
                          Services Detail
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li class="hidden-sm">
                    <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/gallery.html">
                      Gallery
                    </a>
                  </li>
                  <li class="dropdown  hidden-sm">
                    <a
                      class="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      Blog <span class="fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog.html">
                          Grid View{" "}
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-1.html">
                          Right Sidebar With 2 Column
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-2.html">
                          Left Sidebar With 2 Column
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-3.html">
                          Masonry Grid
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-detail.html">
                          Post With Slider
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-detail-2.html">
                          Post With Static Bg
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-detail-3.html">
                          Post Full Width
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    {" "}
                    <a
                      class="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      Pages <span class="fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/404.html">
                          Error Page
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/team.html">
                          Our Team{" "}
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/icons.html">
                          Icons
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/flat-icons.html">
                          Flat Icons
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/gallery.html">
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/login.html">
                          Sign In
                        </a>
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/sign-up.html">
                          Sign Up
                        </a>
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/profile.html">
                          Profile
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    {" "}
                    <a
                      class="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                      data-animations="fadeInUp"
                    >
                      CONTACT US <span class="fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index-5.html">
                          Tracking Landing Page
                        </a>{" "}
                      </li>

                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index-4.html">
                          Tracking Classic Page{" "}
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/history.html">
                          Tracking Order History
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/online-booking.html">
                          Cargo Booking
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
                <a
                  href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/online-booking.html"
                  class="btn btn-primary pull-right"
                >
                  Cargo Booking
                </a>{" "}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
