// ParentTable.js
import React, { useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ran from "./ran.png";
import axios from "axios";
import on from "./11.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./land.css";
import TopNav from "./TopNav";
import Header from "./Header";
import Testimonial from "./Testimonial";
const initialState = {
  fullName: "",
  email: "",
  phone: "",
  companyAddress: "",
  companyName: "",
  message: "",
};
const Registration = () => {
  const [formData, setFormData] = useState(initialState);
  const { fullName, email, phone, companyAddress, companyName, message } =
    formData;

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      email,
      phone,
      companyAddress,
      companyName,
      message,
    };
    try {
      await axios.post(
        `https://hiabapi-00d342930204.herokuapp.com/api/registration`,
        {
          ...formData,
        }
      );

      // navigate("/dashboard/admin");
      toast.success("User successfully created");
      setShowModal(true);
    } catch (err) {
      console.error("Error registering student:", err);
      toast.error("Unable to create user");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

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
                  <h3>Registration</h3>
                  <h2>Register Here to Participate</h2>
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
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-us" class="section-padding-70 contact-bg">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="about-title">
                  <h2>Register Here to Participate</h2>
                  <p>
                    Get free delivery to any where in Nigeria after 5 patronage
                  </p>
                </div>
                <div class="notice success" id="success">
                  <p>
                    Thanks so much for your message. We check e-mail frequently
                    and will try our best to respond to your inquiry.
                  </p>
                </div>

                <div class="row margin-top-50">
                  <form>
                    <div class="col-sm-12 md-12 col-xs-12 ">
                      <div class="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          class="form-control"
                          onChange={handleChange}
                          name="fullName"
                          value={formData.fullName}
                          required
                        />
                      </div>
                    </div>{" "}
                    <div class="col-sm-12 md-12 col-xs-12 ">
                      <div class="form-group">
                        <label>Email Address</label>
                        <input
                          type="text"
                          placeholder="Enter your email address"
                          class="form-control"
                          value={formData.email}
                          name="email"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div class="col-sm-12 md-12 col-xs-12 clearfix">
                      <div class="form-group">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          placeholder="Enter your phone number"
                          class="form-control"
                          value={formData.phone}
                          required
                          name="phone"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col-md-6">
                <div class="row margin-top-50">
                  <form action="#">
                    <div class="col-sm-12 md-12 col-xs-12 clearfix">
                      <div class="form-group">
                        <label>Company Name</label>
                        <input
                          type="text"
                          placeholder="Company Name"
                          class="form-control"
                          value={formData.companyName}
                          onChange={handleChange}
                          name="companyName"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-sm-12 md-12 col-xs-12 clearfix">
                      <div class="form-group">
                        <label>Company Address</label>
                        <input
                          type="text"
                          placeholder="Company Address"
                          class="form-control"
                          name="companyAddress"
                          onChange={handleChange}
                          value={formData.companyAddress}
                          required
                        />
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-12 col-xs-12 clearfix">
                      <div class="form-group">
                        <textarea
                          placeholder="Write your message for us"
                          class="form-control"
                          value={formData.message}
                          rows="6"
                          name="message"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-12 col-xs-12 clearfix">
                      <button
                        type="submit"
                        id="yes"
                        class="btn btn-primary btn-sm"
                        onClick={handleSubmit}
                      >
                        Register
                      </button>
                      <img
                        id="loader"
                        alt=""
                        src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/loader.gif"
                        class="loader"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div class="clearfix"></div>
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
                            09134770477, 08038763637
                          </li>
                          <li>
                            <span class="icon fa fa-envelope-o"></span>{" "}
                            info@safehiab.com
                          </li>
                          <li>
                            <span class="icon fa fa-fax"></span> 09134770477
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
      </body>
      <div open={showModal} onClose={handleCloseModal}>
        <h2>Registration Successful</h2>
        <p>
          Your registration was successful. Do you want to visit our website?
        </p>
        <div>
          <button onClick={handleCloseModal} color="primary">
            No
          </button>
          <button
            onClick={() => {
              navigate("/");
              handleCloseModal();
            }}
            color="primary"
          >
            <a href="/">Yes</a>
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Registration;
