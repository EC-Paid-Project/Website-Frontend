import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import banner1 from "../assets/banner.png";
import banner2 from "../assets/banner2.png";

const CustomCarousel = () => {
  const content = [
    { image: banner1 },
    { image: banner2 },
    { image: banner1 },
    { image: banner2 },
  ];

  return (
    <div className="main-div">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showArrows={true}
        className={"carouselHome"}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={100}
        infiniteLoop={true}
      >
        {content.map((img, index) => {
          return (
            <div key={index} className="carousel_item">
              <img src={img.image} alt="no-text" className="carousel_img" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
