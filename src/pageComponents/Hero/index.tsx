"use client";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../../constants";
import { FaArrowRight } from "react-icons/fa6";
import { motion, MotionValue } from "framer-motion";

interface HeroProp {
  scale?: any;
  opacity: MotionValue<number>;
}

const Hero = ({ scale }: HeroProp) => {
  return (
    <Box
      style={{
        width: "100vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "black",
        position: "sticky",
        top: 0,
      }}
    >
      <motion.div
        style={{
          scale,
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          // opacity,
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={4}
          textAlign="center"
          maxWidth="2/3"
          alignItems="center"
        >
          <Text
            style={{
              fontWeight: 700,
              fontSize: 52,
              textWrap: "wrap",
              wordSpacing: "0.15rem",
            }}
          >
            Get to work, with a lot less work
          </Text>
          <Text
            opacity={0.7}
            style={{
              fontWeight: 500,
              fontSize: 22,
            }}
            maxWidth="3/4"
            minWidth="3/4"
          >
            Dropbox delivers tools that help you move your work forward faster,
            keep it safe, and let you collaborate with ease.
          </Text>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
              maxWidth: "40%",
              minWidth: "40%",
            }}
            marginTop="6"
          >
            <Box
              display="flex"
              style={{
                borderRadius: "1rem",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1.3rem",
                paddingBottom: "1.3rem",
                paddingRight: "1.8rem",
                paddingLeft: "1.8rem",
                backgroundColor: Colors.primary,
              }}
            >
              <Box
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "black",
                  backgroundColor: Colors.primary,
                }}
              >
                Sign up free
              </Box>
              <FaArrowRight
                color="black"
                arabicForm="isolated"
                overlineThickness={10}
                style={{
                  fontWeight: 200,
                  marginLeft: "1rem",
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textDecoration: "underline",
                  fontSize: 16,
                  fontWeight: 600,
                  textUnderlineOffset: "2px",
                  textDecorationThickness: "1px",
                }}
              >
                Find your plan
              </Text>
              <FaArrowRight
                color="white"
                arabicForm="isolated"
                overlineThickness={10}
                style={{
                  fontWeight: 200,
                  marginLeft: "0.5rem",
                }}
              />
            </Box>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
              maxWidth: "40%",
              minWidth: "40%",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: "white",
                width: "50%",
              }}
              opacity={0.6}
              textAlign="center"
            >
              No credit card required
            </Text>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;
