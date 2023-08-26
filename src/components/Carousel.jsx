import React, { useEffect,useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getoffer } from "../actions/action";
import { baseURL } from "../api";
const CustomCarousel = () => {
  const [offer,setOffer]=useState([])
  const dispatch=useDispatch()
  const {isLoading}=useSelector(state=>state.centralStore)
useEffect(()=>async()=>{
  const offer=await dispatch(getoffer())
  setOffer(offer)
} 
,[])
if(isLoading){
  return(
    <div className="main-div"></div>
      )}
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
        {offer?.map((img, index) => {
          return (
            <div key={index} className="carousel_item">
              <img src={baseURL+img.image} alt="no-text" className="carousel_img" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
