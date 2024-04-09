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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ran from "./ran.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./land.css";
import TopNav from "./TopNav";
import Header from "./Header";
import Testimonial from "./Testimonial";
const Gallery = () => {
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
      <body>
        <div class="color-switcher" id="choose_color">
          {" "}
          <a href="#." class="picker_close">
            <i class="fa fa-gear"></i>
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
                  <h3>Our membories </h3>
                  <h2>Our Gallery </h2>
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
                      <a href="#">Gallery</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" class="custom-padding">
          <div class="container">
            <div class="main-heading text-center">
              <h2>OUR GALLERY</h2>
              <p>
                Cras varius purus in tempus porttitor ut dapibus efficitur
                sagittis cras vitae lacus metus nunc vulputate facilisis nisi{" "}
                <br /> eu lobortis erat consequat ut. Aliquam et justo ante. Nam
                a cursus velit
              </p>
            </div>

            <div class="portfolio-container text-center">
              <ul id="portfolio-grid" class="three-column hover-two">
                <li class="portfolio-item gutter">
                  <div class="portfolio">
                    <div class="tt-overlay"></div>
                    <img
                      src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/1.jpg"
                      alt=""
                    />

                    <div class="portfolio-info">
                      <h3 class="project-title">Project Title</h3>
                      <a href="#" class="links">
                        App Design
                      </a>
                    </div>

                    <ul class="portfolio-details">
                      <li>
                        <a
                          class="tt-lightbox"
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/1.jpg"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-external-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="portfolio-item gutter">
                  <div class="portfolio">
                    <div class="tt-overlay"></div>
                    <img
                      src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/2.jpg"
                      alt=""
                    />

                    <div class="portfolio-info">
                      <h3 class="project-title">Project Title</h3>
                      <a href="#" class="links">
                        App Design
                      </a>
                    </div>

                    <ul class="portfolio-details">
                      <li>
                        <a
                          class="tt-lightbox"
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/2.jpg"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-external-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="portfolio-item gutter">
                  <div class="portfolio">
                    <div class="tt-overlay"></div>
                    <img
                      src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/3.jpg"
                      alt=""
                    />

                    <div class="portfolio-info">
                      <h3 class="project-title">Project Title</h3>
                      <a href="#" class="links">
                        App Design
                      </a>
                    </div>

                    <ul class="portfolio-details">
                      <li>
                        <a
                          class="tt-lightbox"
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/3.jpg"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-external-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="portfolio-item gutter">
                  <div class="portfolio">
                    <div class="tt-overlay"></div>
                    <img
                      src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/4.jpg"
                      alt=""
                    />

                    <div class="portfolio-info">
                      <h3 class="project-title">Project Title</h3>
                      <a href="#" class="links">
                        App Design
                      </a>
                    </div>

                    <ul class="portfolio-details">
                      <li>
                        <a
                          class="tt-lightbox"
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/4.jpg"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-external-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="portfolio-item gutter">
                  <div class="portfolio">
                    <div class="tt-overlay"></div>
                    <img
                      src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/5.jpg"
                      alt=""
                    />

                    <div class="portfolio-info">
                      <h3 class="project-title">Project Title</h3>
                      <a href="#" class="links">
                        App Design
                      </a>
                    </div>

                    <ul class="portfolio-details">
                      <li>
                        <a
                          class="tt-lightbox"
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/5.jpg"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-external-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="portfolio-item gutter">
                  <div class="portfolio">
                    <div class="tt-overlay"></div>
                    <img
                      src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/6.jpg"
                      alt=""
                    />

                    <div class="portfolio-info">
                      <h3 class="project-title">Project Title</h3>
                      <a href="#" class="links">
                        App Design
                      </a>
                    </div>

                    <ul class="portfolio-details">
                      <li>
                        <a
                          class="tt-lightbox"
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/6.jpg"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-external-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="portfolio-item gutter">
                  <div class="portfolio">
                    <div class="tt-overlay"></div>
                    <img
                      src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/7.jpg"
                      alt=""
                    />

                    <div class="portfolio-info">
                      <h3 class="project-title">Project Title</h3>
                      <a href="#" class="links">
                        App Design
                      </a>
                    </div>

                    <ul class="portfolio-details">
                      <li>
                        <a
                          class="tt-lightbox"
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/7.jpg"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-external-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="portfolio-item gutter">
                  <div class="portfolio">
                    <div class="tt-overlay"></div>
                    <img
                      src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/8.jpg"
                      alt=""
                    />

                    <div class="portfolio-info">
                      <h3 class="project-title">Project Title</h3>
                      <a href="#" class="links">
                        App Design
                      </a>
                    </div>

                    <ul class="portfolio-details">
                      <li>
                        <a
                          class="tt-lightbox"
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/8.jpg"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-external-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="portfolio-item gutter">
                  <div class="portfolio">
                    <div class="tt-overlay"></div>
                    <img
                      src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/9.jpg"
                      alt=""
                    />

                    <div class="portfolio-info">
                      <h3 class="project-title">Project Title</h3>
                      <a href="#" class="links">
                        App Design
                      </a>
                    </div>

                    <ul class="portfolio-details">
                      <li>
                        <a
                          class="tt-lightbox"
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/portfolio/9.jpg"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-external-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
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
                          <span class="icon fa fa-map-marker"></span> i201,
                          i202 Ogba Multipurpose Hall adjacent Sunday market,
                          along wempco, Ogba, Ikeja lagos
                        </li>
                        <li>
                          <span class="icon fa fa-phone"></span>
                          09134777222, 08038763637
                        </li>
                        <li>
                          <span class="icon fa fa-envelope-o"></span>{" "}
                          info@safehiab.com
                        </li>
                        <li>
                          <span class="icon fa fa-fax"></span> 09134777222
                        </li>
                      </ul>
                      <div class="social-links-two clearfix">
                        {" "}
                        <a href="#" class="facebook img-circle">
                          <span class="fa fa-facebook-f"></span>
                        </a>{" "}
                        <a href="#" class="twitter img-circle">
                          <span class="fa fa-twitter"></span>
                        </a>{" "}
                        <a href="#" class="google-plus img-circle">
                          <span class="fa fa-google-plus"></span>
                        </a>{" "}
                        <a href="#" class="linkedin img-circle">
                          <span class="fa fa-pinterest-p"></span>
                        </a>{" "}
                        <a href="#" class="linkedin img-circle">
                          <span class="fa fa-linkedin"></span>
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
                        <a href="/about">
                          About Us
                        </a>
                      </li>
                 
                      <li>
                        <a href="/services">
                          Our Services
                        </a>
                      </li>
                      <li>
                        <a href="/blog">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          Contact Us
                        </a>
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
            <i class="fa fa-envelope"></i>
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

export default Gallery;
