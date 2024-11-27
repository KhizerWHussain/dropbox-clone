import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { industryDataArrayType } from "../data";
import { motion } from "framer-motion";

interface IndustryCardProp {
  item: industryDataArrayType;
  variants: any;
  isInView: boolean;
  targetRef: any;
  index: number;
}

const IndustryCard = ({
  item,
  variants,
  isInView,
  targetRef,
  index,
}: IndustryCardProp) => {
  return (
    <motion.div
      ref={targetRef}
      style={{
        height: "30vh",
        borderRadius: "1rem",
        width: "40%",
        cursor: "pointer",
      }}
      animate={isInView ? "animate" : "initial"}
      initial="initial"
      transition={{ duration: 0.2, delay: index * 0.1, ease: "easeInOut" }}
      variants={variants}
    >
      <Box
        backgroundColor="#F7F5F2"
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "100%",
        }}
        color="black"
      >
        <Flex
          width="1/3"
          flexDir="column"
          height="full"
          style={{ overflow: "hidden" }}
        >
          <Avatar
            src={item.image}
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              objectFit: "contain",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            }}
          />
        </Flex>
        <Flex
          width="2/3"
          padding="3"
          height="full"
          flexDir="column"
          justifyContent="space-between"
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
            padding="2"
          >
            <Text style={{ fontSize: 18, fontWeight: 550 }}>{item.title}</Text>
            <Text style={{ fontSize: 14, opacity: 0.7 }}>{item.desc}</Text>
          </Box>
          <Link
            padding="2"
            style={{ fontSize: 14, fontWeight: 700, color: "black" }}
            textDecoration="underline"
          >
            Learn More
          </Link>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default IndustryCard;
