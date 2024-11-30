"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import DiscoveryCard from "./card";
import { discoveryCardType, disoverCardArray } from "./data";
import { useInView } from "framer-motion";
import Slider, { Settings } from "react-slick";

const settings: Settings = {
  dots: false, // Disable navigation dots
  infinite: false, // No infinite scroll
  speed: 300,
  centerMode: true,
  autoplay: false,
  slidesToShow: 3, // Show 2 slides at a time
  slidesToScroll: 1, // Scroll one slide at a time
  draggable: true,
  initialSlide: 0,
  useCSS: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768, // Mobile breakpoint
      settings: {
        slidesToShow: 1.1, // Show 1 slide on smaller screens
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const Discover = () => {
  const targetRef = useRef<any | null>(null);
  const isInView = useInView(targetRef, { once: true });

  const variants = {
    initial: { filter: "blur(24px)", scale: 0 },
    animate: { filter: "blur(0px)", scale: 1 },
  };

  return (
    <>
      <Box
        height={{ mdDown: "120vh", lgTo2xl: "150vh" }}
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
        backgroundColor="#F7F5F2"
        width={{ mdDown: "100vw", lgTo2xl: "full" }}
        overflowX={{ mdDown: "hidden" }}
      >
        <Text
          fontSize={{
            mdDown: 42,
            lgTo2xl: 36,
          }}
          fontWeight={500}
          color="black"
          textAlign={{ mdDown: "center" }}
          maxWidth={{ mdDown: "90%", lgTo2xl: "full" }}
        >
          Discover, learn, thrive with Dropbox
        </Text>

        {/* mobile */}

        <Box width="full" zIndex="50" display={{ lgTo2xl: "none" }}>
          <Slider {...settings}>
            {disoverCardArray.map((item: discoveryCardType, i: number) => (
              <DiscoveryCard
                key={`${i}.${item.id}`}
                desc={item.desc}
                image={item.image}
                title={item.title}
                variants={variants}
                isInView={isInView}
                targetRef={targetRef}
                index={i}
              />
            ))}
          </Slider>
        </Box>

        {/* web  */}
        <Box
          width={{ mdDown: "100%", lgTo2xl: "70%" }}
          justifyContent={{ mdDown: "flex-start", lgTo2xl: "center" }}
          alignItems={{ mdDown: "flex-start", lgTo2xl: "center" }}
          display={{ mdDown: "none", lgTo2xl: "flex" }}
          overflowX={{
            mdDown: "auto",
            lgTo2xl: "hidden",
          }}
          style={{
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {disoverCardArray.map((item: discoveryCardType, i: number) => (
            <DiscoveryCard
              key={`${i}.${item.id}`}
              desc={item.desc}
              image={item.image}
              title={item.title}
              variants={variants}
              isInView={isInView}
              targetRef={targetRef}
              index={i}
            />
          ))}
        </Box>
        <Text
          fontSize={{
            mdDown: 16,
            lgTo2xl: 18,
          }}
          color="blue.600"
          fontWeight={400}
          style={{ marginTop: "2.5rem", cursor: "pointer" }}
        >
          View more resources
        </Text>
      </Box>
    </>
  );
};

export default Discover;
