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
      <Box
        width={{ mdDown: "90%", lgTo2xl: "33%" }}
        height={{ mdDown: "2/3", lgTo2xl: "full" }}
      >
        <motion.div
          ref={targetRef}
          animate={isInView ? "animate" : "initial"}
          initial="initial"
          transition={{ duration: 0.3, delay: index * 0.2, ease: "easeInOut" }}
          variants={variants}
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
              <Box height={{ mdDown: "20vh" }}>
                <Image
                  src={image}
                  alt={title}
                  height={500}
                  width={500}
                  style={{
                    borderRadius: "1rem",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Flex
                direction="column"
                gap="4"
                style={{ padding: "1rem", height: "100%" }}
              >
                <Text
                  fontSize={{ mdDown: 14, lgTo2xl: 12 }}
                  fontWeight={{ mdDown: 800, lgTo2xl: 600 }}
                  color="darkgray"
                >
                  Article
                </Text>
                <Text
                  fontSize={{
                    mdDown: 20,
                    lgTo2xl: 18,
                  }}
                  fontWeight={550}
                >
                  {title}
                </Text>
                <Text
                  fontSize={{ mdDown: 16, lgTo2xl: 14 }}
                  fontWeight={400}
                  opacity={{ mdDown: 0.6, lgTo2xl: 0.8 }}
                >
                  {desc}
                </Text>
              </Flex>
              <Link
                fontSize={{
                  mdDown: 16,
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
      </Box>
    </>
  );
};

export default DiscoveryCard;
