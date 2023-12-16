import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./clint.css"; // Import your custom styles

const Clint = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-clint">
      <div className="row">
        <div className="col-md-12">
          <Slider {...sliderSettings}>
            <div  className="clints-name">
              <h4>Item 1</h4>
              <p>Content for item 1 goes here.</p>
            </div>
            <div className="clints-name">
              <h4>Item 2</h4>
              <p>Content for item 2 goes here.</p>
            </div>
            <div className="clints-name">
              <h4>Item 3</h4>
              <p>Content for item 1 goes here.</p>
            </div>
            <div className="clints-name">
              <h4>Item 2</h4>
              <p>Content for item 2 goes here.</p>
            </div>
            <div className="clints-name">
              <h4>Item 3</h4>
              <p>Content for item 3 goes here.</p>
            </div>
            {/* Add more items as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clint;
