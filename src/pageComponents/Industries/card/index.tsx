"use client";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { industryDataArrayType } from "../data";
import { motion } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";

interface IndustryCardProp {
  item: industryDataArrayType;
  variants: any;
  isInView: boolean;
  index: number;
}

const IndustryCard = ({
  item,
  variants,
  isInView,
  index,
}: IndustryCardProp) => {
  return (
    <Box
      width={{
        mdDown: "100%",
        lgTo2xl: "40%",
      }}
      height={{
        mdDown: "20vh",
        lgTo2xl: "30vh",
      }}
    >
      <motion.div
        style={{
          height: "100%",
          borderRadius: "1rem",
          cursor: "pointer",
        }}
        animate={isInView ? "animate" : "initial"}
        initial="initial"
        transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
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
              <Text fontSize={18} style={{ fontWeight: 550 }}>
                {item.title}
              </Text>
              <Text fontSize={14} style={{ opacity: 0.7 }}>
                {item.desc}
              </Text>
            </Box>
            <Box display="flex" justifyItems="center" alignItems="center">
              <Link
                fontSize={{ mdDown: 16, lgTo2xl: 14 }}
                padding="2"
                style={{ fontWeight: 700, color: "black" }}
                textDecoration="underline"
                textUnderlineOffset="0.15rem"
              >
                Learn More
              </Link>
              <IoArrowForwardOutline size={20} />
            </Box>
          </Flex>
        </Box>
      </motion.div>
    </Box>
  );
};

export default IndustryCard;
