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
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FiTruck } from "react-icons/fi"; // Assuming you're using Feather Icons

import ran from "./ran.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./land.css";
import TopNav from "./TopNav";
import Header from "./Header";
import Testimonial from "./Testimonial";
const Land = () => {
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
        <Header />
        <div class="revs">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            emulateTouch={true}
          >
            <div>
              <img
                src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/slider/1.jpg"
                alt=""
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "481px !important",
                }}
              />
              <div
                className="text-content"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  color: "white",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h2
                  className="htwo"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "20px",
                    lineHeight: "62px",
                    visibility: "inherit",
                  }}
                >
                  We provide Efficient
                </h2>
                <h3
                  className="hthree"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "38px",
                    lineHeight: "81px",
                    visibility: "inherit",
                  }}
                >
                  Logistic Services
                </h3>
                <p
                  style={{
                    color: "white",
                    fontSize: "17px",
                    lineHeight: "33px",
                  }}
                >
                  We provide always our best services for our clients and always
                  try to achieve our client's trust and satisfaction.
                </p>
                <a
                  className="btn btn-colored btn-lg"
                  href="contact"
                  style={{ color: "white" }}
                >
                  Contact Now
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/slider/2.jpg"
                alt=""
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "481px !important",
                }}
              />
              <div
                className="text-content"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  color: "white",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h2
                  className="htwo"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "20px",
                    lineHeight: "62px",
                    visibility: "inherit",
                  }}
                >
                  Safe and ontime delivery
                </h2>
                <h3
                  className="hthree"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "38px",
                    lineHeight: "81px",
                    visibility: "inherit",
                  }}
                >
                  to anywhere in Nigeria
                </h3>
                <p
                  style={{
                    color: "white",
                    fontSize: "17px",
                    lineHeight: "33px",
                  }}
                >
                  We provide always our best services for our clients and always
                  try to achieve our client's trust and satisfaction.
                </p>
                <a
                  className="btn btn-colored btn-lg"
                  href="contact"
                  style={{ color: "white" }}
                >
                  Contact Now
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/slider/3.jpg"
                alt=""
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "481px !important",
                }}
              />
              <div
                className="text-content"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  color: "white",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h2
                  className="htwo"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "20px",
                    lineHeight: "62px",
                    visibility: "inherit",
                  }}
                >
                  professional transport
                </h2>
                <h3
                  className="hthree"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "38px",
                    lineHeight: "81px",
                    visibility: "inherit",
                  }}
                >
                  with Efficient logistic services
                </h3>
                <p
                  style={{
                    color: "white",
                    fontSize: "17px",
                    lineHeight: "33px",
                  }}
                >
                  We provide always our best services for our clients and always
                  try to achieve our client's trust and satisfaction.
                </p>
                <a
                  className="btn btn-colored btn-lg"
                  href="contact"
                  style={{ color: "white" }}
                >
                  Contact Now
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/slider/4.jpg"
                alt=""
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "481px !important",
                }}
              />
              <div
                className="text-content"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  color: "white",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h2
                  className="htwo"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "20px",
                    lineHeight: "62px",
                    visibility: "inherit",
                  }}
                >
                  Fast and secure
                </h2>
                <h3
                  className="hthree"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "38px",
                    lineHeight: "81px",
                    visibility: "inherit",
                  }}
                >
                  Logistics services
                </h3>
                <p
                  style={{
                    color: "white",
                    fontSize: "17px",
                    lineHeight: "33px",
                  }}
                >
                  We provide always our best services for our clients and always
                  try to achieve our client's trust and satisfaction.
                </p>
                <a
                  className="btn btn-colored btn-lg"
                  href="contact"
                  style={{ color: "white" }}
                >
                  Contact Now
                </a>
              </div>
            </div>
          </Carousel>
        </div>

        <div class="parallex-small ">
          <div class="container">
            <div class="row custom-padding-20 ">
              <div class="col-md-8 col-sm-8">
                <div class="parallex-text">
                  <h4>Not sure which solution fits you business needs?</h4>
                </div>
              </div>

              <div class="col-md-4 col-sm-4">
                <div class="parallex-button">
                  {" "}
                  <a href="#quote" class="page-scroll btn btn-lg btn-clean">
                    Get a quote <i class="fa fa-angle-double-right "></i>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="custom-padding white" id="about-section-3">
          <div class="container">
            <div class="main-boxes">
              <div class="row">
                <div class="col-sm-12 col-md-4 col-xs-12">
                  <div class="services-grid-1">
                    <div class="service-image">
                      <a href="#">
                        <img
                          alt=""
                          src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/1.jpg"
                        />
                      </a>
                    </div>
                    <div class="services-text">
                      <h4>Fast & Safe Delivery</h4>
                      <p>
                        At <b>Safe Hiab</b>, we understand the importance of
                        fast and safe delivery when it comes to transporting
                        goods. Our priority is to ensure that your goods reaches
                        its destination quickly and securely, without
                        compromising on safety or quality. With our efficient
                        logistics solutions and commitment to excellence, you
                        can trust us to deliver your goods on time, every time.
                      </p>
                    </div>
                    <div class="more-about">
                      {" "}
                      <a class="btn btn-primary btn-lg" href="#">
                        Read More{" "}
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                      </a>{" "}
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-xs-12">
                  <div class="services-grid-1">
                    <div class="service-image">
                      <a href="#">
                        <img
                          alt=""
                          src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/2.jpg"
                        />
                      </a>
                    </div>
                    <div class="services-text">
                      <h4>Commitment to Customer Satisfaction</h4>
                      <p>
                        At <b>Safe Hiab</b>, our commitment to customer
                        satisfaction is at the core of everything we do. We
                        believe that every interaction with our customers is an
                        opportunity to exceed expectations and build
                        long-lasting relationships. Our dedicated team is
                        passionate about ensuring that every customer's needs
                        are not only met but exceeded.
                      </p>
                    </div>
                    <div class="more-about">
                      {" "}
                      <a class="btn btn-primary btn-lg" href="#">
                        Read More{" "}
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                      </a>{" "}
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-xs-12">
                  <div class="services-grid-1">
                    <div class="service-image">
                      <a href="#">
                        <img
                          alt=""
                          src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/1.jpg"
                        />
                      </a>
                    </div>
                    <div class="services-text">
                      <h4>Experience and Expertise</h4>
                      <p>
                        <b>Safe Hiab</b> is a professional logistic company,
                        with experience skill the industry, such as expertise in
                        handling specific types of goods (e.g. tanks, irons etc)
                        or proficiency in managing complex logistical projects
                        (e.g., international goods, supply chain management).
                        With our experience we give our customers the best etc
                      </p>
                    </div>
                    <div class="more-about">
                      {" "}
                      <a class="btn btn-primary btn-lg" href="#">
                        Read More{" "}
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-padding services">
          <div className="container">
            <div className="main-heading text-center">
              <h2>Our Services</h2>
              <p>
                Cras varius purus in tempus porttitor ut dapibus efficitur
                sagittis cras vitae lacus metus nunc vulputate facilisis nisi{" "}
                <br /> eu lobortis erat consequat ut. Aliquam et justo ante. Nam
                a cursus velit
              </p>
            </div>
            <div className="row">
              <Slider {...settings}>
                <div className="item">
                  <div className="services-grid">
                    <div className="icons">
                      <FiTruck style={{ width: "150px", height: "50px" }} />
                    </div>
                    <h4>packaging and storage</h4>
                    <p>
                      We have the right caring, experience and dedicated
                      professional for you.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="services-grid">
                    <div className="icons">
                      <FiTruck style={{ width: "150px", height: "50px" }} />
                    </div>
                    <h4>packaging and storage</h4>
                    <p>
                      We have the right caring, experience and dedicated
                      professional for you.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="services-grid">
                    <div className="icons">
                      <FiTruck style={{ width: "150px", height: "50px" }} />
                    </div>
                    <h4>packaging and storage</h4>
                    <p>
                      We have the right caring, experience and dedicated
                      professional for you.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="services-grid">
                    <div className="icons">
                      <FiTruck style={{ width: "150px", height: "50px" }} />
                    </div>
                    <h4>packaging and storage</h4>
                    <p>
                      We have the right caring, experience and dedicated
                      professional for you.
                    </p>
                  </div>
                </div>
                {/* Repeat the same structure for other services */}
              </Slider>
            </div>
          </div>
        </section>

        <section class="quote" id="quote">
          <div class="container">
            <div class="row clearfix">
              <div class="col-md-7 col-sm-12 col-xs-12 ">
                <div class="choose-title">
                  <h3>More about us</h3>
                  <h2>Why People Choose Us</h2>
                  <p>
                    Ut consequat velit a metus accumsan, vel tempor nulla
                    blandit. Integer euismod magna vel mi congue suscipit.
                    Praesent quis facilisis neque. Donec scelerisque nibh vitae
                    sapien ornare efficitur.
                  </p>
                </div>
                <div class="choose-services">
                  <ul class="choose-list">
                    <li>
                      <div class="choose-box">
                        {" "}
                        <span class="iconbox">
                          <i class="flaticon-logistics-delivery-truck-and-clock"></i>
                        </span>
                        <div class="choose-box-content">
                          <h4>Fast Worldwide delivery</h4>
                          <p>
                            Donec dignissim enim id urna fermentum, non
                            hendrerit sem volutpat ellentesque pretium sapien
                            nec metus.non hendrerit sem volutpat ellentesque
                            pretium sapien nec metus
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="choose-box">
                        {" "}
                        <span class="iconbox">
                          <i class="flaticon-woman-with-headset"></i>
                        </span>
                        <div class="choose-box-content">
                          <h4>Safety & Compliance</h4>
                          <p>
                            Donec dignissim enim id urna fermentum, non
                            hendrerit sem volutpat ellentesque pretium sapien
                            nec metus.non hendrerit sem volutpat ellentesque
                            pretium sapien nec metus
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-5 col-sm-12 no-extra col-xs-12">
                <div class="quotation-box">
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
                        <select class="form-control" name="sel-location">
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

        <section id="blog" class="custom-padding">
          <div class="container">
            <div class="main-heading text-center">
              <h2>OUR BLOG</h2>
              <p>
                Cras varius purus in tempus porttitor ut dapibus efficitur
                sagittis cras vitae lacus metus nunc vulputate facilisis nisi{" "}
                <br /> eu lobortis erat consequat ut. Aliquam et justo ante. Nam
                a cursus velit
              </p>
            </div>

            <div class="row">
              <div class="col-sm-12 col-xs-12 col-md-12">
                <div class="col-md-4 col-sm-12 col-xs-12">
                  <div class="news-box">
                    <div class="news-thumb">
                      <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-detail.html">
                        <img
                          alt=""
                          class="img-responsive"
                          src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/blog/1.jpg"
                        />
                      </a>
                      <div class="date">
                        {" "}
                        <strong>21</strong>
                        <span>Jun</span>{" "}
                      </div>
                    </div>
                    <div class="news-detail">
                      <h2>
                        <a
                          title=""
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-detail.html"
                        >
                          top benefits of hiring our trucking service
                        </a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo enean dolor sit amet, consectetuer.
                      </p>
                      <div class="entry-footer">
                        <div class="post-meta">
                          <div class="post-admin">
                            {" "}
                            <i class="icon-profile-male"></i>Posted by
                            <a href="#">Admin</a>{" "}
                          </div>
                          <div class="post-comment">
                            {" "}
                            <i class="icon-chat"></i> <a href="#">217</a>{" "}
                          </div>
                          <div class="post-like">
                            {" "}
                            <i class="icon-heart"></i> <a href="#">130</a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-12 col-xs-12">
                  <div class="news-box">
                    <div class="news-thumb">
                      <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-detail.html">
                        <img
                          alt=""
                          class="img-responsive"
                          src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/blog/2.jpg"
                        />
                      </a>
                      <div class="date">
                        {" "}
                        <strong>21</strong>
                        <span>Jun</span>{" "}
                      </div>
                    </div>
                    <div class="news-detail">
                      <h2>
                        <a
                          title=""
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-detail.html"
                        >
                          top benefits of hiring our logistics service
                        </a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo enean dolor sit amet, consectetuer.
                      </p>
                      <div class="entry-footer">
                        <div class="post-meta">
                          <div class="post-admin">
                            {" "}
                            <i class="icon-profile-male"></i>Posted by
                            <a href="#">Admin</a>{" "}
                          </div>
                          <div class="post-comment">
                            {" "}
                            <i class="icon-chat"></i> <a href="#">217</a>{" "}
                          </div>
                          <div class="post-like">
                            {" "}
                            <i class="icon-heart"></i> <a href="#">130</a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-12 col-xs-12">
                  <div class="news-box">
                    <div class="news-thumb">
                      <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-detail.html">
                        <img
                          class="img-responsive"
                          alt=""
                          src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/blog/3.jpg"
                        />
                      </a>
                      <div class="date">
                        {" "}
                        <strong>21</strong>
                        <span>Jun</span>{" "}
                      </div>
                    </div>
                    <div class="news-detail">
                      <h2>
                        <a
                          title=""
                          href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/blog-detail.html"
                        >
                          top benefits of hiring our logistics service
                        </a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo enean dolor sit amet, consectetuer.
                      </p>
                      <div class="entry-footer">
                        <div class="post-meta">
                          <div class="post-admin">
                            {" "}
                            <i class="icon-profile-male"></i>Posted by
                            <a href="#">Admin</a>{" "}
                          </div>
                          <div class="post-comment">
                            {" "}
                            <i class="icon-chat"></i> <a href="#">217</a>{" "}
                          </div>
                          <div class="post-like">
                            {" "}
                            <i class="icon-heart"></i> <a href="#">130</a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="clearfix"></div>
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
                            <span class="icon fa fa-map-marker"></span> 60 Link
                            Road Lhr. Pakistan 54770
                          </li>
                          <li>
                            <span class="icon fa fa-phone"></span> (042)
                            1234567890
                          </li>
                          <li>
                            <span class="icon fa fa-envelope-o"></span>{" "}
                            contant@scriptsbundle.com
                          </li>
                          <li>
                            <span class="icon fa fa-fax"></span> (042) 1234 7777
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
                            <a href="#">Packaging And Storage</a>
                          </li>
                          <li>
                            <a href="#">worldwide transport</a>
                          </li>
                          <li>
                            <a href="#">Internation Air Freight</a>
                          </li>
                          <li>
                            <a href="#">ground shipping</a>
                          </li>
                          <li>
                            <a href="#">24/7 Support</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="col-lg-7 col-sm-6 col-xs-12 column">
                    <div class="footer-widget news-widget">
                      <h2>Latest News</h2>

                      <div class="news-post">
                        <div class="icon"></div>
                        <div class="news-content">
                          <figure class="image-thumb">
                            <img
                              src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/blog/popular-2.jpg"
                              alt=""
                            />
                          </figure>
                          <a href="#">
                            top benefits of hiring our professional logistics
                            service
                          </a>
                        </div>
                        <div class="time">June 21, 2016</div>
                      </div>

                      <div class="news-post">
                        <div class="icon"></div>
                        <div class="news-content">
                          <figure class="image-thumb">
                            <img
                              src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/blog/popular-1.jpg"
                              alt=""
                            />
                          </figure>
                          <a href="#">
                            top benefits of hiring our professional logistics
                            service
                          </a>
                        </div>
                        <div class="time">June 21, 2016</div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-5 col-sm-6 col-xs-12 column">
                    <div class="footer-widget links-widget">
                      <h2>Site Links</h2>
                      <ul>
                        <li>
                          <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/about.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/team.html">
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/services.html">
                            Our Services
                          </a>
                        </li>
                        <li>
                          <a href="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/index-7.html">
                            Blog
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

export default Land;
