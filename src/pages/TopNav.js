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

import "./land.css";
const TopNav = () => {
  const vividImage = `url(${vivid})`; // Convert the image path to a URL string

  return (
    <>
      <section class="top-bar">
        <div class="container">
          <div class="left-text nav-left pull-left">
            <p>
              <span>Opening Hours :</span> Monday to Saturday - 8am to 5pm
            </p>
          </div>

          <ul class="nav-right pull-right list-unstyled">
            <li>
              {" "}
              <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/login.html">
                <i class="fa fa-lock"></i> Login{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/sign-up.html">
                <i class="fa fa-user"></i> Sign Up{" "}
              </a>
            </li>
            <li class="dropdown nav-profile">
              <a
                class="dropdown-toggle"
                data-hover="dropdown"
                data-toggle="dropdown"
                data-animations="fadeInUp"
              >
                <img
                  class="img-circle resize"
                  alt=""
                  src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/avatar.jpg"
                />
                <span class="hidden-xs small-padding">
                  {" "}
                  <span>Umair</span> <i class="fa fa-caret-down"></i>
                </span>
              </a>
              <ul class="dropdown-menu with-arrow pull-right">
                <li>
                  {" "}
                  <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/profile.html">
                    {" "}
                    <i class="fa fa-user"></i> <span>My Profile</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/history.html">
                    {" "}
                    <i class="fa fa-check"></i> <span>Tracking History</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:void(0)">
                    {" "}
                    <i class="fa fa-lock"></i> <span>Payment Setting</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:void(0)">
                    {" "}
                    <i class="fa fa-sign-out"></i> <span>Log Out</span>{" "}
                  </a>{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TopNav;
