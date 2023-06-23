import React from "react";

import { Box } from "@mui/material";
import { bannerData } from "../../Constants/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
var settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 600,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Banner() {
  return (
    <Slider {...settings}>
      {bannerData.map((el,id) => {
        return <img src={el.url} alt="banner" key={id}/>;
      })}
    </Slider>
  );
}
