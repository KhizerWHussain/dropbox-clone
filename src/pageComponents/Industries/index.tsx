"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import IndustryCard from "./card";
import { IndustryDataArray, industryDataArrayType } from "./data";
import { useInView } from "framer-motion";

const Industries = () => {
  const targetRef = useRef<any | null>(null);
  const isInView = useInView(targetRef, { once: true, margin: "0px" });

  const variants = {
    initial: { filter: "blur(24px)", scale: 0 },
    animate: { filter: "blur(0px)", scale: 1 },
  };

  return (
    <>
      <Box
        height={{ mdDown: "180vh", lgTo2xl: "150vh" }}
        style={{
          width: "100vw",
          // height: "150vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={{ mdDown: "2rem", lgTo2xl: "4rem" }}
      >
        <Text
          fontSize={{
            mdDown: 36,
            lgTo2xl: 32,
          }}
          fontWeight={500}
          color="black"
          textAlign={{ mdDown: "center" }}
          maxWidth={{ mdDown: "2/3", lgTo2xl: "full" }}
        >
          Dropbox empowers across industries
        </Text>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
          width={{
            mdDown: "90%",
            lgTo2xl: "100%",
          }}
          ref={targetRef}
        >
          {IndustryDataArray.map((item: industryDataArrayType, i: number) => (
            <IndustryCard
              item={item}
              key={i}
              variants={variants}
              isInView={isInView}
              index={i}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Industries;
