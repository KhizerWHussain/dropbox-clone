"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import IndustryCard from "./card";
import { IndustryDataArray, industryDataArrayType } from "./data";
import { useInView } from "framer-motion";

const Industries = () => {
  const targetRef = useRef<any | null>(null);
  const isInView = useInView(targetRef, { once: true });

  const variants = {
    initial: { filter: "blur(24px)", scale: 0 },
    animate: { filter: "blur(0px)", scale: 1 },
  };

  return (
    <>
      <Box
        style={{
          width: "100vw",
          height: "150vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          marginTop: "4rem",
        }}
      >
        <Text
          fontSize={{
            mdDown: 16,
            lgTo2xl: 32,
          }}
          color="black"
          style={{ fontWeight: 500 }}
        >
          Dropbox empowers across industries
        </Text>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            gap: "1rem",
          }}
        >
          {IndustryDataArray.map((item: industryDataArrayType, i: number) => (
            <IndustryCard
              item={item}
              key={i}
              variants={variants}
              isInView={isInView}
              targetRef={targetRef}
              index={i}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Industries;
