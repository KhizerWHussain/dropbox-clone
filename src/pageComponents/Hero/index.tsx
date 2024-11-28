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
      height={{
        mdDown: "50vh",
        lg: "100vh",
        xl: "90vh",
        "2xl": "90vh",
      }}
      style={{
        width: "100vw",
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
          maxWidth={{
            lgDown: "full",
            xl: "2/3",
            "2xl": "2/3",
          }}
          display={"flex"}
          flexDirection={"column"}
          gap={4}
          textAlign="center"
          alignItems="center"
        >
          <Text
            fontSize={{
              lgTo2xl: 52,
              md: 32,
              mdDown: 20,
            }}
            style={{
              fontWeight: 700,
              textWrap: "wrap",
              wordSpacing: "0.15rem",
            }}
          >
            Get to work, with a lot less work
          </Text>
          <Text
            fontSize={{
              lgTo2xl: 22,
              md: 14,
              mdDown: 10,
            }}
            opacity={0.7}
            style={{
              fontWeight: 500,
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
              paddingBottom={{ mdDown: "0.5rem", lgTo2xl: "1.3rem" }}
              paddingTop={{ mdDown: "0.5rem", lgTo2xl: "1.3rem" }}
              paddingRight={{ mdDown: "0.75rem", lgTo2xl: "1.8rem" }}
              paddingLeft={{ mdDown: "0.75rem", lgTo2xl: "1.8rem" }}
              display="flex"
              style={{
                borderRadius: "1rem",
                justifyContent: "center",
                backgroundColor: Colors.primary,
              }}
            >
              <Text
                fontSize={{
                  mdDown: 10,
                  lgTo2xl: 16,
                }}
                style={{
                  fontWeight: 600,
                  color: "black",
                  backgroundColor: Colors.primary,
                }}
              >
                Sign up for free
              </Text>
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
              display={{
                mdDown: "none",
                lgTo2xl: "flex",
              }}
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                fontSize={{
                  mdDown: 12,
                  lgTo2xl: 16,
                }}
                style={{
                  textDecoration: "underline",
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
              fontSize={{
                mdDown: 6,
                lgTo2xl: 12,
              }}
              style={{
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
          <Box
            display={{
              mdDown: "flex",
              lgTo2xl: "none",
            }}
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              fontSize={{
                mdDown: 10,
                lgTo2xl: 16,
              }}
              style={{
                textDecoration: "underline",
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
                marginLeft: "0.5rem",
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;
