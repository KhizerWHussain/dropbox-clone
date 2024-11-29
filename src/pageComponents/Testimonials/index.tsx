import { Box } from "@chakra-ui/react";
import React from "react";
import Testimonial from "./component";
import { testimonialsArray, testimonialType } from "./data";
import Slider, { Settings } from "react-slick";

const settings: Settings = {
  dots: false, // Disable navigation dots
  infinite: false, // No infinite scroll
  speed: 300,
  centerMode: true,
  autoplay: false,
  slidesToShow: 1.7, // Show 2 slides at a time
  slidesToScroll: 1, // Scroll one slide at a time
  draggable: true,
  initialSlide: 0,
  useCSS: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768, // Mobile breakpoint
      settings: {
        slidesToShow: 1.25, // Show 1 slide on smaller screens
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <Box width="100%">
      <Slider {...settings}>
        {testimonialsArray.map((item: testimonialType, i: number) => (
          <Testimonial item={item} key={`${i}.${item.id}`} index={i} />
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonials;
