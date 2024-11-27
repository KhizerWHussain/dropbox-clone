"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import DiscoveryCard from "./card";
import { discoveryCardType, disoverCardArray } from "./data";
import { useInView } from "framer-motion";

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
        style={{
          width: "100vw",
          height: "150vh",
          color: "black",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
        backgroundColor="#F7F5F2"
      >
        <Text fontSize={36}>Discover, learn, thrive with Dropbox</Text>
        <Box
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
          fontSize={18}
          color="blue.600"
          fontWeight={400}
          style={{ marginTop: "2.5rem" }}
        >
          View more resources
        </Text>
      </Box>
    </>
  );
};

export default Discover;
