import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../../constants";
import { FaArrowRight } from "react-icons/fa6";
import { motion, MotionValue } from "framer-motion";

interface HeroProp {
  scale?: any;
  opacity: MotionValue<number>;
}

const Hero = ({ scale, opacity }: HeroProp) => {
  return (
    <Box
      height={{
        mdDown: "100vh",
        lg: "100vh",
        xl: "90vh",
        "2xl": "90vh",
      }}
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        position: "sticky",
        top: 0,
      }}
      justifyContent={{
        mdDown: "flex-start",
        lgTo2xl: "center",
      }}
      alignItems={{
        mdDown: "flex-start",
        lgTo2xl: "center",
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
        }}
      >
        <Box
          maxWidth={{
            lgDown: "80%",
            xl: "2/3",
            "2xl": "2/3",
          }}
          width={{
            lgDown: "80%",
            xl: "2/3",
            "2xl": "2/3",
          }}
          display={"flex"}
          flexDirection={"column"}
          gap={4}
          textAlign="center"
          alignItems="center"
          paddingTop={{
            mdDown: "10rem",
          }}
        >
          <Text
            wordSpacing={{
              mdDown: "0.1rem",
              lgTo2xl: "0.15rem",
            }}
            fontSize={{
              lgTo2xl: 52,
              mdDown: 36,
            }}
            style={{
              fontWeight: 700,
              textWrap: "wrap",
            }}
            lineHeight={{
              mdDown: "1.25",
            }}
          >
            Get to work, with a lot less work
          </Text>
          <Text
            fontSize={{
              lgTo2xl: 22,
              mdDown: 16,
            }}
            opacity={0.7}
            style={{
              fontWeight: 500,
            }}
            width={{
              mdDown: "full",
              lgTo2xl: "3/4",
            }}
          >
            Dropbox delivers tools that help you move your work forward faster,
            keep it safe, and let you collaborate with ease.
          </Text>
          <Box
            justifyContent={{
              mdDown: "center",
              lgTo2xl: "space-between",
            }}
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
            width={{
              mdDown: "full",
              lgTo2xl: "40%",
            }}
            marginTop="6"
          >
            <Box
              paddingBottom={{ mdDown: "1.5rem", lgTo2xl: "1.3rem" }}
              paddingTop={{ mdDown: "1.5rem", lgTo2xl: "1.3rem" }}
              paddingRight={{ mdDown: "2.25rem", lgTo2xl: "1.8rem" }}
              paddingLeft={{ mdDown: "2.25rem", lgTo2xl: "1.8rem" }}
              display="flex"
              backgroundColor={Colors.primary}
              style={{
                borderRadius: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                fontSize={{
                  lgTo2xl: 16,
                  mdDown: 18,
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
            }}
            width={{
              mdDown: "full",
              lgTo2xl: "40%",
            }}
          >
            <Text
              fontSize={12}
              width="full"
              style={{
                fontWeight: 400,
                color: "white",
              }}
              opacity={0.6}
            >
              No credit card required
            </Text>
            <Box width="full" display={{ mdDown: "none", lgTo2xl: "flex" }} />
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
              fontSize={16}
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
