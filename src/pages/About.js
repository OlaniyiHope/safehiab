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
import Slider from "react-slick";

import {
  faAngleLeft,
  faAngleRight,
  faHeadset,
  faPhone,
  faEnvelope,
  faTruck,
  faMapMarker,
  faBox,
  faShip,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import ran from "./ran.png";
import eight from "./8.jpeg";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./land.css";
import TopNav from "./TopNav";
import Header from "./Header";
import Testimonial from "./Testimonial";
const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>About Our Company - Safe Hiab</title>
        <meta
          name="keyword"
          content="Safe Hiab, Hiab Logistics and rental service in Lagos, Hiab Logistics and rental services in Nigeria, Truck rental in Nigeria, where to rent a truck in Lagos, where to rent a truck in Nigeria, companies that loads goods in Nigeria, conpanies that loads goods in Lagos, Learn about Safe Hiab, a reliable transportation company in Nigeria. Discover our mission, values, and services. Contact us for safe and efficient transportation solutions."
        />

        <meta
          name="description"
          content="Safe Hiab, Hiab Logistics and rental service in Lagos, Hiab Logistics and rental services in Nigeria, Truck rental in Nigeria, where to rent a truck in Lagos, where to rent a truck in Nigeria, companies that loads goods in Nigeria, conpanies that loads goods in Lagos, Learn about Safe Hiab, a reliable transportation company in Nigeria. Discover our mission, values, and services. Contact us for safe and efficient transportation solutions."
        />

        <meta name="author" content="SAFE HIAB LOGISTICS LIMITED" />
      </Helmet>
      <body>
        <div class="color-switcher" id="choose_color">
          {" "}
          <a href="#." class="picker_close">
            <FontAwesomeIcon icon={faCog} className="fa-gear" />
          </a>
          <h5>STYLE SWITCHER</h5>
          <div class="theme-colours">
            <p> Choose Colour style </p>
            <ul>
              <li>
                <a href="#." class="defualt" id="defualt"></a>
              </li>
              <li>
                <a href="#." class="red" id="red"></a>
              </li>
              <li>
                <a href="#." class="green" id="green"></a>
              </li>
              <li>
                <a href="#." class="orange" id="orange"></a>
              </li>
              <li>
                <a href="#." class="purple" id="purple"></a>
              </li>
              <li>
                <a href="#." class="yellow" id="yellow"></a>
              </li>
            </ul>
          </div>
          <div class="clr"> </div>
        </div>

        <Header />

        <section class="breadcrumbs-area parallex">
          <div class="container">
            <div class="row">
              <div class="page-title">
                <div class="col-sm-12 col-md-6 page-heading text-left">
                  <h3>Who we are</h3>
                  <h2>About Our Company</h2>
                </div>
                <div class="col-sm-12 col-md-6 text-right">
                  <ul class="breadcrumbs">
                    <li>
                      <a href="#">home</a>
                    </li>
                    <li>
                      <a href="#">pages</a>
                    </li>
                    <li>
                      <a href="#">about our projects</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="padding-top-70" id="about">
          <div class="container">
            <div class="row clearfix">
              <div class="col-md-7 col-sm-12 col-xs-12 ">
                <div class="about-title">
                  <h2>Who We Are</h2>
                  <p>
                    Safe Hiab is a private owned business registered in Nigeria
                    to carry out general contracts, providing reliable,
                    trustworthy, and safe services. Safe Hiab is affiliated to
                    Safe Oil and Gas Global Limited which has been In business
                    for about 4 years. Safe Hiab is very passionate about
                    delivering heavy or oversized items efficiently and safe for
                    our customer satisfaction. Our professional drivers are
                    committed to delivering and we take pride in excellence.
                  </p>
                  <h2>Our Mission and Value</h2>
                  <p>
                    Our mission is to provide our client with quick, reliable
                    and easy services that exceed our client expectations. Also
                    to help find the best solution by answering questions with
                    workable solutions. Honesty, transparency, trustworthiness,
                    good customer relationship, integrity is what we are called.
                    We give our 100% support to business in the society and
                    solve their transport needs.
                  </p>
                  <h2>Our Services</h2>
                  <p>
                    We cater to a wide spectrum of delivery needs, ranging from
                    straightforward transportations to intricate logistics
                    solutions:
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Handling Simple to Complex Deliveries</li>
                      <li>Transporting Goods</li>
                      <li>Transporting Boat</li>
                      <li> Transporting Container</li>
                      <li>Transporting Engines</li>
                      <li>Transporting agricultural equipments/machineries</li>
                      <li>Transporting factory equipments</li>
                      <li>Transporting turbines</li>
                      <li>Transporting kiosks</li>
                      <li>Transporting Sculptures/statues </li>
                      <li>
                        Transporting Tanks etc our customer service is second to
                        none
                      </li>
                    </ul>
                  </p>
                  <h2>Safe Hiab</h2>
                  <p>
                    Safety is our top priority every precaution is taken to
                    ensure the safety of our drivers, customers, and general
                    public, by following protocols at all times .by maintaining
                    and inspecting our vehicles and adhere to federal, state and
                    community regulations.
                  </p>
                </div>
              </div>

              <div class="col-md-5 col-sm-12 col-xs-12 our-gallery">
                <a
                  class="tt-lightbox"
                  href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/about-company-1.png"
                >
                  {" "}
                  <img
                    class="img-responsive margin-bottom-30"
                    alt="Image"
                    src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/about-company-1.png"
                  />
                </a>
                <a
                  class="tt-lightbox"
                  href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/about-company-2.png"
                >
                  {" "}
                  <img
                    class="img-responsive margin-bottom-30"
                    alt="Image"
                    src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/about-company-2.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div
          class="parallex section-padding-70 fun-facts-bg text-center"
          style={{ backgroundColor: "red !important" }}
        >
          <div class="container" style={{ backgroundColor: "red !important" }}>
            <div class="row" style={{ backgroundColor: "red !important" }}>
              <div class="col-xs-6 col-sm-3 col-md-3">
                <div class="statistic-percent" data-perc="56">
                  <div class="facts-icons">
                    {" "}
                    <FontAwesomeIcon icon={faHeadset} className="fa-headset" />
                  </div>
                  <div class="fact">
                    {" "}
                    <span class="percentfactor">56</span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3 col-md-3">
                <div class="statistic-percent" data-perc="126">
                  <div class="facts-icons">
                    {" "}
                    <FontAwesomeIcon icon={faBox} className="fa-box" />
                  </div>
                  <div class="fact">
                    {" "}
                    <span class="percentfactor">30</span>
                    <p>Order Received</p>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3 col-md-3">
                <div class="statistic-percent" data-perc="274">
                  <div class="facts-icons">
                    {" "}
                    <FontAwesomeIcon icon={faTruck} className="fa-truck" />
                  </div>
                  <div class="fact">
                    {" "}
                    <span class="percentfactor">10</span>
                    <p>Free Delivery</p>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3 col-md-3">
                <div class="statistic-percent" data-perc="434">
                  <div class="facts-icons">
                    {" "}
                    <FontAwesomeIcon icon={faShip} className="fa-ship" />
                  </div>
                  <div class="fact">
                    {" "}
                    <span class="percentfactor">50</span>
                    <p>Completed Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="team" class="custom-padding white">
          <div class="container">
            <div class="main-heading text-center">
              <h2>our Team</h2>
              <p>
                Meet the team that helps to make sure your goods is delivered
                safely
              </p>
            </div>

            <div class="row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="team-grid">
                  <div class="team-image">
                    <img alt="" class="img-responsive" src={eight} />
                    <div class="team-grid-overlay">
                      <div class="social-media">
                        <a class="facebook" href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a class="twitter" href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a class="google" href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                        <a class="linkedin" href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="team-content">
                    <h2>Samuel</h2>
                    <p>Truck Manager</p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="team-grid">
                  <div class="team-image">
                    <img alt="" class="img-responsive" src={eight} />
                    <div class="team-grid-overlay">
                      <div class="social-media">
                        <a class="facebook" href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a class="twitter" href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a class="google" href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                        <a class="linkedin" href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="team-content">
                    <h2>Bemi</h2>
                    <p>Truck Supervisor</p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="team-grid">
                  <div class="team-image">
                    <img alt="" class="img-responsive" src={eight} />
                    <div class="team-grid-overlay">
                      <div class="social-media">
                        <a class="facebook" href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a class="twitter" href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a class="google" href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                        <a class="linkedin" href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="team-content">
                    <h2>Rilwan</h2>
                    <p>Truck inspector</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer-area">
          <div class="footer-content">
            <div class="container">
              <div class="row clearfix">
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="row clearfix">
                    <div class="col-lg-7 col-sm-6 col-xs-12 column">
                      <div class="footer-widget about-widget">
                        <div class="logo">
                          <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index.html">
                            <img
                              src={ran}
                              style={{ width: "100px", height: "50px" }}
                              class="img-responsive"
                              alt=""
                            />
                          </a>
                        </div>

                        <ul class="contact-info">
                          <li>
                            <FontAwesomeIcon
                              icon={faMapMarker}
                              className="icon"
                            />
                            i201, i202 Ogba Multipurpose Hall adjacent Sunday
                            market, along wempco, Ogba, Ikeja lagos
                          </li>
                          <li>
                            <FontAwesomeIcon
                              icon={faPhone}
                              className="fa-phone"
                            />
                            09134770477, 08038763637
                          </li>
                          <li>
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className="fa-envelope"
                            />
                            info@safehiab.com.ng
                          </li>
                        </ul>
                        <div class="social-links-two clearfix">
                          {" "}
                          <a
                            href="https://facebook.com/safehiablogisticslimited"
                            class="facebook img-circle"
                          >
                            <FontAwesomeIcon
                              icon={faFacebookF}
                              className="fa-facebook-f"
                            />
                          </a>{" "}
                          <a
                            href="https://twitter.com/safehiablogisticslimited"
                            class="twitter img-circle"
                          >
                            <FontAwesomeIcon
                              icon={faTwitter}
                              className="fa-twitter"
                            />
                          </a>{" "}
                          <a
                            href="https://instagram.com/safehiablogisticslimited"
                            class="google-plus img-circle"
                          >
                            <FontAwesomeIcon
                              icon={faInstagram}
                              className="fa-instagram"
                            />
                          </a>{" "}
                          <a
                            href="https://linkedin.com/in/safehiablogisticslimited"
                            class="linkedin img-circle"
                          >
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className="fa-linkedin"
                            />
                          </a>{" "}
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-5 col-sm-6 col-xs-12 column">
                      <h2>Our Service</h2>
                      <div class="footer-widget links-widget">
                        <ul>
                          <li>
                            <a href="#">Transporting Gas tanks and cylinders</a>
                          </li>
                          <li>
                            <a href="#">Transporting containers and goods</a>
                          </li>
                          <li>
                            <a href="#">Transporting factory equipments</a>
                          </li>
                          <li>
                            <a href="#">Transporting agricultural equipments</a>
                          </li>
                          <li>
                            <a href="#">Transporting kiosks</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="col-lg-7 col-sm-6 col-xs-12 column">
                    <div class="footer-widget news-widget">
                      <h2>Privacy Policy</h2>
                      <ul>
                        <li>
                          <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/about.html">
                            Our Terms
                          </a>
                        </li>
                        <li>
                          <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/team.html">
                            Help center
                          </a>
                        </li>
                        <li>
                          <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/services.html">
                            Contact
                          </a>
                        </li>

                        <li>
                          <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/contact.html">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-5 col-sm-6 col-xs-12 column">
                    <div class="footer-widget links-widget">
                      <h2>Site Links</h2>
                      <ul>
                        <li>
                          <a href="/about">About Us</a>
                        </li>

                        <li>
                          <a href="/services">Our Services</a>
                        </li>
                        <li>
                          <a href="/blog">Blog</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <div class="auto-container clearfix">
              <div class="copyright text-center">
                Copyright 2024 &copy; SafeHiab
                <a
                  target="_blank"
                  href="http://themeforest.net/user/scriptsbundle/portfolio"
                ></a>{" "}
                All Rights Reserved
              </div>
            </div>
          </div>
        </footer>

        <div
          data-target="#request-quote"
          data-toggle="modal"
          class="quote-button hidden-xs"
        >
          <a class="btn btn-primary" href="javascript:void(0)">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        <div
          class="modal fade "
          id="request-quote"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="quotation-box-1">
                  <h2>REQUEST A QUOTE</h2>
                  <div class="desc-text">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                  </div>
                  <form
                    action="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/contact.html"
                    method="post"
                  >
                    <div class="row clearfix">
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Your Name"
                          value=""
                          name="your-name"
                        />
                      </div>

                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Subject"
                          value=""
                          name="your-subject"
                        />
                      </div>

                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <input
                          class="form-control"
                          type="email"
                          placeholder="Email Address"
                          value=""
                          name="your-email"
                        />
                      </div>

                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <select
                          class="quote-select form-control"
                          name="sel-location"
                        >
                          <option>Select Location</option>
                          <option>Afghanistan</option>
                          <option>Albania</option>
                          <option>Algeria</option>
                          <option>American Samoa</option>
                          <option>Andorra</option>
                          <option>Angola</option>
                          <option>Anguilla</option>
                          <option>Antarctica</option>
                          <option>Argentina</option>
                          <option>Armenia</option>
                          <option>Aruba</option>
                          <option>Australia</option>
                          <option>Austria</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                          <option>Belarus</option>
                          <option>Belgium</option>
                          <option>Belize</option>
                          <option>Benin</option>
                          <option>Bermuda</option>
                          <option>Bhutan</option>
                          <option>Bolivia</option>
                          <option>Botswana</option>
                          <option>Bouvet Island</option>
                          <option>Brazil</option>
                          <option>Brunei Darussalam</option>
                          <option>Bulgaria</option>
                          <option>Burkina Faso</option>
                          <option>Burundi</option>
                          <option>Cambodia</option>
                          <option>Cameroon</option>
                          <option>Canada</option>
                          <option>Cape Verde</option>
                          <option>Cayman Islands</option>
                          <option>Chad</option>
                          <option>Chile</option>
                          <option>China</option>
                          <option>Christmas Island</option>
                          <option>Cocos Islands</option>
                          <option>Colombia</option>
                          <option>Comoros</option>
                          <option>Congo</option>
                          <option>Cook Islands</option>
                          <option>Costa Rica</option>
                          <option>Cote d'Ivoire</option>
                          <option>Croatia</option>
                          <option>Cuba</option>
                          <option>Cyprus</option>
                          <option>Czech Republic</option>
                          <option>Denmark</option>
                          <option>Djibouti</option>
                          <option>Dominica</option>
                          <option>Dominican Republic</option>
                          <option>Ecuador</option>
                          <option>Egypt</option>
                          <option>El Salvador</option>
                          <option>Equatorial Guinea</option>
                          <option>Eritrea</option>
                          <option>Estonia</option>
                          <option>Ethiopia</option>
                          <option>Faroe Islands</option>
                          <option>Fiji</option>
                          <option>Finland</option>
                          <option>France</option>
                          <option>French Guiana</option>
                          <option>Gabon</option>
                          <option>Gambia</option>
                          <option>Georgia</option>
                          <option>Germany</option>
                          <option>Ghana</option>
                          <option>Gibraltar</option>
                          <option>Greece</option>
                          <option>Greenland</option>
                          <option>Grenada</option>
                          <option>Guadeloupe</option>
                          <option>Guam</option>
                          <option>Guatemala</option>
                          <option>Guinea</option>
                          <option>Guinea-Bissau</option>
                          <option>Guyana</option>
                          <option>Haiti</option>
                          <option>Honduras</option>
                          <option>Hong Kong</option>
                          <option>Hungary</option>
                          <option>Iceland</option>
                          <option>India</option>
                          <option>Indonesia</option>
                          <option>Iran</option>
                          <option>Iraq</option>
                          <option>Ireland</option>
                          <option>Israel</option>
                          <option>Italy</option>
                          <option>Jamaica</option>
                          <option>Japan</option>
                          <option>Jordan</option>
                          <option>Kazakhstan</option>
                          <option>Kenya</option>
                          <option>Kiribati</option>
                          <option>Kuwait</option>
                          <option>Kyrgyzstan</option>
                          <option>Laos</option>
                          <option>Latvia</option>
                          <option>Lebanon</option>
                          <option>Lesotho</option>
                          <option>Liberia</option>
                          <option>Libya</option>
                          <option>Liechtenstein</option>
                          <option>Lithuania</option>
                          <option>Luxembourg</option>
                          <option>Macao</option>
                          <option>Madagascar</option>
                          <option>Malawi</option>
                          <option>Malaysia</option>
                          <option>Maldives</option>
                          <option>Mali</option>
                          <option>Malta</option>
                          <option>Marshall Islands</option>
                          <option>Martinique</option>
                          <option>Mauritania</option>
                          <option>Mauritius</option>
                          <option>Mayotte</option>
                          <option>Mexico</option>
                          <option>Micronesia</option>
                          <option>Moldova</option>
                          <option>Monaco</option>
                          <option>Mongolia</option>
                          <option>Montenegro</option>
                          <option>Montserrat</option>
                          <option>Morocco</option>
                          <option>Mozambique</option>
                          <option>Myanmar</option>
                          <option>Namibia</option>
                          <option>Nauru</option>
                          <option>Nepal</option>
                          <option>Netherlands</option>
                          <option>New Caledonia</option>
                          <option>New Zealand</option>
                          <option>Nicaragua</option>
                          <option>Niger</option>
                          <option>Nigeria</option>
                          <option>Norfolk Island</option>
                          <option>North Korea</option>
                          <option>Norway</option>
                          <option>Oman</option>
                          <option>Pakistan</option>
                          <option>Palau</option>
                          <option>Panama</option>
                          <option>Papua New Guinea</option>
                          <option>Paraguay</option>
                          <option>Peru</option>
                          <option>Philippines</option>
                          <option>Pitcairn</option>
                          <option>Poland</option>
                          <option>Portugal</option>
                          <option>Puerto Rico</option>
                          <option>Qatar</option>
                          <option>Romania</option>
                          <option>Russian Federation</option>
                          <option>Rwanda</option>
                          <option>Saint Helena</option>
                          <option>Saint Lucia</option>
                          <option>Samoa</option>
                          <option>San Marino</option>
                          <option>Sao Tome and Principe</option>
                          <option>Saudi Arabia</option>
                          <option>Senegal</option>
                          <option>Serbia</option>
                          <option>Seychelles</option>
                          <option>Sierra Leone</option>
                          <option>Singapore</option>
                          <option>Slovakia</option>
                          <option>Slovenia</option>
                          <option>Solomon Islands</option>
                          <option>Somalia</option>
                          <option>South Africa</option>
                          <option>South Georgia</option>
                          <option>South Korea</option>
                          <option>Spain</option>
                          <option>Sri Lanka</option>
                          <option>Sudan</option>
                          <option>Suriname</option>
                          <option>Swaziland</option>
                          <option>Sweden</option>
                          <option>Switzerland</option>
                          <option>Taiwan</option>
                          <option>Tajikistan</option>
                          <option>Tanzania</option>
                          <option>Thailand</option>
                          <option>Timor-Leste</option>
                          <option>Togo</option>
                          <option>Tokelau</option>
                          <option>Tonga</option>
                          <option>Tunisia</option>
                          <option>Turkey</option>
                          <option>Turkmenistan</option>
                          <option>Tuvalu</option>
                          <option>Uganda</option>
                          <option>Ukraine</option>
                          <option>United Arab Emirates</option>
                          <option>United Kingdom</option>
                          <option>United States</option>
                          <option>Uruguay</option>
                          <option>Uzbekistan</option>
                          <option>Vanuatu</option>
                          <option>Vatican City</option>
                          <option>Venezuela</option>
                          <option>Vietnam</option>
                          <option>Wallis and Futuna</option>
                          <option>Western Sahara</option>
                          <option>Yemen</option>
                          <option>Zambia</option>
                          <option>Zimbabwe</option>
                        </select>
                      </div>

                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <textarea
                          class="form-control"
                          rows="7"
                          cols="20"
                          placeholder="Your Message"
                          name="your-message"
                        ></textarea>
                      </div>

                      <div class="form-group col-md-12 col-sm-12 col-xs-12 text-right">
                        {" "}
                        <a class="custom-button light">Submit Request</a>{" "}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default About;
