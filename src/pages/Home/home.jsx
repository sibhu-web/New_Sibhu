
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import "./home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1484242857719-4b9144542727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1492546643178-96d64f3fd824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
    "https://images.unsplash.com/photo-1494506132334-19732cd53b32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
  ];

  const handleChangeIndex = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className="main-home-page">
      <SwipeableViews
        index={currentSlide}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="swiper-slide"
            style={{ backgroundImage: `url(${slide})` }}
          >
            <div className="slide-content">
              <h2>Slide {index + 1}</h2>
              <p>Your slide content goes here.</p>
            </div>
          </div>
        ))}
      </SwipeableViews>

      <div className="about">
     <a
      className="bg_links social portfolio"
      href="https://www.rafaelalucas.com"
      target="__blank"
    >
      <span className="icon" />
    </a>
    <a
      className="bg_links social dribbble"
      href="https://dribbble.com/rafaelalucas"
      target="__blank"
    >
      <span className="icon" />
    </a>
    <a
      className="bg_links social linkedin"
      href="https://www.linkedin.com/in/rafaelalucas/"
      target="__blank"
    >
      <span className="icon" />
    </a>
    < div className="bg_links logo-nav"/>
  </div>

      <div
        className="swiper-button-prev"
        onClick={() => handleChangeIndex(currentSlide - 1)}
      >
        <span>&lt;</span>
      </div>
      <div
        className="swiper-button-next"
        onClick={() => handleChangeIndex(currentSlide + 1)}
      >
        <span>&gt;</span>
      </div>
    </main>
  );
};

export default Home;
