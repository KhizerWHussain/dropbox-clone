import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DisoveryCardProp {
  title: string;
  desc: string;
  image: string;
}

const DiscoveryCard = ({ desc, image, title }: DisoveryCardProp) => {
  return (
    <>
      <Box
        style={{
          height: "70vh",
          backgroundColor: "white",
          borderRadius: "1rem",
          cursor: "pointer",
        }}
        width="1/3"
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
            <Text fontSize={18} fontWeight={550}>
              {title}
            </Text>
            <Text fontSize={14} fontWeight={400} opacity={0.8}>
              {desc}
            </Text>
          </Flex>
          <Link
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
    </>
  );
};

export default DiscoveryCard;
