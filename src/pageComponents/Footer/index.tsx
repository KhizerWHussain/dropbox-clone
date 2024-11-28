import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { footerContentArray, footerContentType } from "./data";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box
        style={{
          height: "120vh",
          width: "100vw",
          maxWidth: "100vw",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-2rem",
          gap: "4rem",
        }}
        color="white"
      >
        <Box width={{ mdDown: "full", lgTo2xl: "80%" }}>
          <HStack
            width="full"
            flexWrap={{ mdDown: "wrap", lgTo2xl: "nowrap" }}
            style={{ justifyContent: "space-between", alignItems: "start" }}
          >
            {footerContentArray.map((item: footerContentType, i: number) => (
              <VStack
                key={`${item.id}.${i}`}
                justifyContent="start"
                alignItems="start"
                width={{ mdDown: "1/12", lgTo2xl: "full" }}
              >
                <Text
                  as="h2"
                  fontSize={{ mdDown: 10, lgTo2xl: 20 }}
                  style={{
                    marginBottom: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </Text>
                <VStack justifyContent="start" alignItems="start" gap="1rem">
                  {item.content.map((content: string, contentIndex: number) => (
                    <Text
                      as="p"
                      maxWidth="40"
                      fontSize={{
                        mdDown: 8,
                        lgTo2xl: 14,
                      }}
                      fontWeight={300}
                      key={contentIndex}
                      textAlign="start"
                      cursor="pointer"
                      _hover={{
                        textDecoration: "underline",
                      }}
                    >
                      {content}
                    </Text>
                  ))}
                </VStack>
              </VStack>
            ))}
          </HStack>
        </Box>
        <VStack
          justifyContent="start"
          alignItems="start"
          style={{ width: "80%" }}
        >
          <HStack gap="4">
            <BsTwitterX size={22} />
            <FaFacebook size={22} />
            <FaYoutube size={22} />
          </HStack>
          <p
            style={{
              borderBottom: "1px solid white",
              opacity: 0.3,
              height: "5vh",
              width: "10%",
            }}
          />
          <HStack style={{ marginTop: "1rem" }}>
            <IoIosGlobe size={22} />
            <Text fontSize={{ mdDown: 12, lgTo2xl: 16 }}>
              English (United States)
            </Text>
            <MdOutlineKeyboardArrowRight
              size={32}
              fontWeight={200}
              width="1px"
              overlineThickness="1px"
            />
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Footer;
