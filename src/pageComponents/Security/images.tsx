"use client";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const images = {
  first:
    "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-2.png?id=c2b49cbb-0530-4d59-83b0-a04e82bb6cd4&output_type=png",
  second:
    "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-1.png?id=a9586e97-cdca-47f1-84f6-8e1b8492c225&output_type=png",
  third:
    "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-3.png?id=add2f4d9-c3c9-4e43-ad3b-9dfbba483c43&output_type=png",
  fourth:
    "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/permissions-en_GB.png?id=e9fb1962-85c0-4f29-bfa4-097ab8a7c289&output_type=png",
};

const SecurityImages = () => {
  return (
    <Box
      style={{
        height: "70vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="60vw"
      minWidth="60vw"
    >
      <Flex flexDir="column">
        <Image
          src={images.first}
          alt="Image 1"
          width={100}
          height={100}
          style={{
            zIndex: 2,
            height: "25vh",
            width: "10vw",
            marginBottom: "-1.5rem",
            marginRight: "-1rem",
          }}
        />
        <Image
          src={images.second}
          alt="Image 2"
          width={200}
          height={400}
          style={{
            height: "30vh",
            width: "25vw",
          }}
        />
      </Flex>

      <Image
        src={images.third}
        alt="Image 3"
        width={200}
        height={800}
        style={{
          zIndex: 3,
          height: "60vh",
          marginLeft: "-3.5rem",
          marginTop: "-4rem",
        }}
      />
      <Image
        src={images.fourth}
        alt="Small Image"
        width={400}
        height={800}
        style={{
          zIndex: 5,
          height: "40vh",
          width: "50vw",
        }}
      />
    </Box>
  );
};

export default SecurityImages;
