"use client";
import React, { useState } from "react";
import { companiesPng } from "./data";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import { FaRegPauseCircle } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";

const Companies = () => {
  const [startSlider, setStartSlider] = useState<boolean>(true);

  return (
    <>
      <Box
        style={{
          width: "100%",
          marginTop: "2rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        zIndex={50}
      >
        <Text
          fontSize={{
            mdDown: 16,
            lgTo2xl: 16,
          }}
          opacity={0.7}
        >
          Trusted by the biggest companies in the world
        </Text>

        <Marquee
          pauseOnHover={true}
          speed={25}
          direction="left"
          // loop={100}
          play={startSlider}
          autoFill={true}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "200vw",
            overflow: "hidden",
          }}
        >
          {companiesPng.map((item: any, i: number) => (
            <Box
              key={`${item.id}.${i}`}
              width={{
                mdDown: "35vw",
                lgTo2xl: "10vw",
              }}
              height={{ mdDown: "20vh", lgTo2xl: "15vh" }}
              marginX={{ mdDown: "3rem", lgTo2xl: "4rem" }}
            >
              <Image
                src={item.data.src}
                alt={item.name}
                width={800}
                height={800}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          ))}
        </Marquee>

        <Box
          zIndex={50}
          onClick={() => setStartSlider((prev) => !prev)}
          style={{ marginTop: "1rem", cursor: "pointer" }}
        >
          {startSlider ? (
            <FaRegPauseCircle size={30} />
          ) : (
            <IoPlayCircleOutline size={30} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Companies;
