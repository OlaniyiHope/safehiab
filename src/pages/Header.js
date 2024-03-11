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
import { FaEnvelope, FaPhone, FaMapPin } from "react-icons/fa"; // Assuming you're using Font Awesome icons

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
              <a href="/">
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
                  <FaEnvelope />
                </div>
                <div class="text">EMAIL</div>
                <a href="mailt:contact@scriptsbundle.com">
                  safehiab@gmail.com
                </a>{" "}
              </div>

              <div class="info-box">
                <div class="icon">
                  <FaPhone />
                </div>
                <div class="text">Call Now</div>
                <a class="location" href="#">
                  09134777222
                </a>{" "}
              </div>
              <div class="info-box">
                <div class="icon">
                  <FaMapPin />
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
                  <li class="hidden-sm active">
                    {" "}
                    <a href="/">
                      Home <span class="fa fa-angle-down"></span>
                    </a>
                  </li>
                  <li class="hidden-sm">
                    <a href="about-us">
                      About Company <span class="fa fa-angle-down"></span>
                    </a>
                  </li>
                  <li class="hidden-sm">
                    {" "}
                    <a href="/our-services">
                      Our Service <span class="fa fa-angle-down"></span>
                    </a>
                  </li>
                  <li class="hidden-sm">
                    <a href="our-gallery">Gallery</a>
                  </li>
                  <li class="  hidden-sm">
                    <a href="our-blog">
                      Blog <span class="fa fa-angle-down"></span>
                    </a>
                  </li>
                </ul>
                <a href="contact" class="btn btn-primary pull-right">
                  Contact Us
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
