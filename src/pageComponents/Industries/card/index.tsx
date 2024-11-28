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
      transition={{ duration: 0.3, delay: index * 0.2, ease: "easeInOut" }}
      variants={variants}
    >
      <Box
        backgroundColor="#F7F5F2"
        borderRadius="1rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "100%",
        }}
        // width={{ mdDown: "100%", lgTo2xl: "40%" }}
        color="black"
      >
        <Flex
          display={{
            mdDown: "none",
            lgTo2xl: "flex",
          }}
          width="1/3"
          flexDir="column"
          height="full"
          style={{ overflow: "hidden" }}
        >
          <Avatar
            src={item.image}
            size="full"
            shape="rounded"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Flex>
        <Flex
          width={{
            mdDown: "full",
            lgTo2xl: "2/3",
          }}
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
            <Text
              fontSize={{ mdDown: 14, lgTo2xl: 18 }}
              style={{ fontWeight: 550 }}
            >
              {item.title}
            </Text>
            <Text
              fontSize={{ mdDown: 10, lgTo2xl: 14 }}
              style={{ opacity: 0.7 }}
            >
              {item.desc}
            </Text>
          </Box>
          <Link
            fontSize={{ mdDown: 10, lgTo2xl: 14 }}
            padding="2"
            style={{ fontWeight: 700, color: "black" }}
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
