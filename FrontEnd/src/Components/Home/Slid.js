import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from "react-countdown";
import Slider from "react-slick";

import { Box, Button, Divider, Typography } from "@mui/material";
var settings = {
  dots: false,
  dtag: true,
  autoplay: true,
  infinite: true,
  speed: 600,
  autoplaySpeed: 2500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Slid({ Products,title,timer }) {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  };
  return (
    <Box sx={{ marginTop: "10px", background: "#ffffff" }}>
      <Box sx={{ padding: "15px 20px", display: "flex" }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: "600", marginRight: "15px" }}
        >
          {title}
        </Typography>
        {timer && (
          <Box
            sx={{
              display: "flex",
              marginLeft: "10px",
              alignItems: "center",
              color: "#7f7f7f",
              lineHeight: "32px",
            }}
          >
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              alt="timer"
              style={{ width: "24px" }}
            />
            <Countdown renderer={renderer} date={Date.now() + 5.04e7} />
          </Box>
        )}
        <Button
          variant="contained"
          sx={{
            marginLeft: "auto",
            backgroundColor: "#2874f0",
            borderRadius: "2px",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          View All
        </Button>
      </Box>
      <Divider />
      <Slider {...settings}>
        {Products.products.map((el, id) => {
          return (
            <Box
              sx={{
                padding: "25px 15px",
                textAlign: "center",
              }}
              key={id}
            >
              <img
                src={el.url}
                alt="product"
                style={{ width: "auto", height: "150px" }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginLeft: "-140px",
                  fontWeight: "600",
                  color: "#212121",
                }}
              >
                {el.title.shortTitle}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginLeft: "-140px",
                  color: "green",
                }}
              >
                {el.discount}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginTop: "5px",
                  marginLeft: "-140px",
                  color: "#212121",
                  opacity: "0.6",
                }}
              >
                {el.tagline}
              </Typography>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
