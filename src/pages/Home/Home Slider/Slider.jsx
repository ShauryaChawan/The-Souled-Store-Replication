import React, { useState, useLayoutEffect } from "react";
import "./slider.scss";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const banner_slider_desktop_imgs = [
  "./assets/banner_slider_1.webp",
  "./assets/banner_slider_2.webp",
  "./assets/banner_slider_3.webp",
  "./assets/banner_slider_4.webp",
  "./assets/banner_slider_5.webp",
  "./assets/banner_slider_6.webp",
];

const banner_slider_mob_imgs = [
  "./assets/banner_slider_mob_1.webp",
  "./assets/banner_slider_mob_2.webp",
  "./assets/banner_slider_mob_3.webp",
  "./assets/banner_slider_mob_4.webp",
  "./assets/banner_slider_mob_5.webp",
];

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to check if the current screen size is mobile or desktop
  const isMobile = () => {
    return window.innerWidth <= 768; // You can adjust this value based on your desired breakpoint for mobile devices.
  };

  useLayoutEffect(() => {
    // Check the screen size on mount and whenever it's resized
    const handleResize = () => {
      setIsMobileView(isMobile());
    };

    setIsMobileView(isMobile()); // Set the initial state
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (index) => {
    setSlideNumber(index + 1);
  };

  const handleNextSlide = () => {
    setSlideNumber((prevSlide) =>
      prevSlide < banner_slider_desktop_imgs.length ? prevSlide + 1 : 1
    );
  };

  const handlePrevSlide = () => {
    setSlideNumber((prevSlide) =>
      prevSlide > 1 ? prevSlide - 1 : banner_slider_desktop_imgs.length
    );
  };

  // Choose the appropriate image set based on the screen size
  const bannerImgs = isMobileView ? banner_slider_mob_imgs : banner_slider_desktop_imgs;

  return (
    <div className="slider_container">
      <div className="frame">
        {/* Pass slideNumber to the .slider class using CSS variables */}
        <div className="slider" style={{ "--slideNumber": slideNumber }}>
          {bannerImgs.map((item, key) => (
            <img key={key} src={item} alt={`banner ${key}`} />
          ))}
        </div>
      </div>

      <div className="arrow" id="left" onClick={handlePrevSlide}>
        <ArrowBackIosNewIcon sx={{ fontSize: "30px" }} />
      </div>

      <div className="arrow" id="right" onClick={handleNextSlide}>
        <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
      </div>

      <div className="circular_buttons">
        {bannerImgs.map((_, index) => (
          <div
            key={index}
            className={`button ${slideNumber === index + 1 ? "active" : ""}`}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
