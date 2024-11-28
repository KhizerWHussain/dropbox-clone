import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface DisoveryCardProp {
  title: string;
  desc: string;
  image: string;
  variants: any;
  isInView: boolean;
  targetRef: any;
  index: number;
}

const DiscoveryCard = ({
  desc,
  image,
  title,
  isInView,
  targetRef,
  variants,
  index,
}: DisoveryCardProp) => {
  return (
    <>
      <motion.div
        ref={targetRef}
        animate={isInView ? "animate" : "initial"}
        initial="initial"
        transition={{ duration: 0.3, delay: index * 0.2, ease: "easeInOut" }}
        variants={variants}
        style={{
          width: "33%",
          height: "100%",
          minHeight: "100%",
          maxHeight: "100%",
        }}
      >
        <Box
          style={{
            height: "70vh",
            minHeight: "70vh",
            maxHeight: "70vh",
            backgroundColor: "white",
            borderRadius: "1rem",
            cursor: "pointer",
          }}
          width="full"
        >
          <Box
            style={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              height: "100%",
            }}
          >
            <Box>
              <Image
                src={image}
                alt={title}
                height={400}
                width={400}
                style={{ borderRadius: "1rem", width: "100%" }}
              />
            </Box>
            <Flex
              direction="column"
              gap="4"
              style={{ padding: "1rem", height: "100%" }}
            >
              <Text fontSize={12} fontWeight={600} color="darkgray">
                Article
              </Text>
              <Text
                fontSize={{
                  mdDown: 12,
                  lgTo2xl: 18,
                }}
                fontWeight={550}
              >
                {title}
              </Text>
              <Text
                fontSize={{ mdDown: 8, lgTo2xl: 14 }}
                fontWeight={400}
                opacity={0.8}
              >
                {desc}
              </Text>
            </Flex>
            <Link
              fontSize={{
                mdDown: 8,
                lgTo2xl: 14,
              }}
              href=""
              style={{
                padding: "1rem",
                textDecoration: "underline",
                fontWeight: 600,
                color: "black",
                opacity: 0.9,
                textUnderlineOffset: "0.15rem",
              }}
            >
              Read Article
            </Link>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default DiscoveryCard;
