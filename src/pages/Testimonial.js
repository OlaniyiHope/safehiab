import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./test.css"; // Import custom styles

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    customPaging: () => <div className="slick-dots" />, // Custom paging styles
  };

  return (
    <section className="testimonial-bg parallax section-padding text-center">
      <div className="container">
        <div id="testimonials">
          <Slider {...settings}>
            <div className="item">
              <div className="testimonial-grid text-center">
                <img
                  src="https://templates.scriptsbundle.com/logistic-pro/demo/logistic-pro/images/admin-1.jpg"
                  alt="Testimonials"
                  className="img-responsive"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam lacus lectus a quam eget, fringilla suscipit sapien.
                  Duis aliquet malesuada ipsum non sodales. Suspendisse a
                  consequat leo. Fusce tempus vitae erat at consequat. Aenean
                  commodo felis odio, ut congue est mollis non. Sed tincidunt.
                </p>
                <div className="name">John Doe</div>
                <div className="profession">Founder, Oxford</div>
              </div>
            </div>
            {/* Add more testimonial items here */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
