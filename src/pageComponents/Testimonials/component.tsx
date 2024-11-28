import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { testimonialType } from "./data";
import { Avatar } from "@/components/ui/avatar";
import { useInView, motion } from "framer-motion";

interface Prop {
  item: testimonialType;
  index: number;
}

const Testimonial = ({ item, index }: Prop) => {
  const targetRef = useRef<any | null>(null);
  const isInView = useInView(targetRef, { once: true });

  const variants = {
    initial: { filter: "blur(24px)", scale: 0 },
    animate: { filter: "blur(0px)", scale: 1 },
  };

  return (
    <motion.div
      ref={targetRef}
      variants={variants}
      animate={isInView ? "animate" : "initial"}
      initial="initial"
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeInOut" }}
      style={{ cursor: "pointer" }}
    >
      <Box
        backgroundColor="#1C1D21"
        display="flex"
        flexDir={{
          mdDown: "column",
          lgTo2xl: "row",
        }}
        justifyContent="center"
        alignItems="center"
        width={{
          mdDown: "40vw",
          lgTo2xl: "47vw",
        }}
        style={{
          height: "40vh",
          borderRadius: "1rem",
        }}
      >
        <Flex
          width={{
            mdDown: "full",
            lgTo2xl: "2/5",
          }}
          flexDir="column"
          padding={{
            mdDown: "1",
            lgTo2xl: "3",
          }}
          height="full"
          position="relative"
        >
          <Avatar size="full" shape="rounded" src={item.pictureSource} />
          <FaPlayCircle
            size={20}
            style={{
              marginTop: "-1.5rem",
              zIndex: 10,
              marginLeft: "0.5rem",
            }}
          />
        </Flex>
        <Flex
          width={{
            mdDown: "full",
            lgTo2xl: "3/5",
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
              fontSize={{ mdDown: 8, lgTo2xl: 12 }}
              color="#CD2F7B"
              style={{ fontWeight: 600 }}
            >
              Testimonial
            </Text>
            <Text
              maxWidth={{
                mdDown: "full",
                lgTo2xl: "80%",
              }}
              fontSize={{ mdDown: 12, lgTo2xl: 18 }}
              style={{ fontWeight: 700 }}
            >
              {item.title}
            </Text>
            <Text
              fontSize={{
                mdDown: 10,
                lgTo2xl: 14,
              }}
              style={{ opacity: 0.7 }}
            >
              {item.desc}
            </Text>
          </Box>
          <Link
            fontSize={{ mdDown: 10, lgTo2xl: 16 }}
            padding="2"
            style={{ fontWeight: 700, color: "white" }}
            textDecoration="underline"
          >
            {item.text}
          </Link>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Testimonial;
