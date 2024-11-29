import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

interface CollabrationProp {
  btnText?: string;
  btnIcon?: any;
  title: string;
  desc: string;
  color?: string;
}

const ContentCollaboration = ({
  btnIcon,
  btnText,
  desc,
  title,
  color,
}: CollabrationProp) => {
  return (
    <>
      <Box
        height={{
          mdDown: "45vh",
          lgTo2xl: "90vh",
        }}
        style={{
          width: "100vw",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          textAlign: "center",
        }}
      >
        <Box
          style={{
            color: "black",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          maxWidth={{
            mdDown: "90%",
            lgTo2xl: "3/5",
          }}
        >
          <Button
            padding={{ mdDown: "0.35rem", lgTo2xl: "1rem" }}
            borderRadius={{ mdDown: "full", lgTo2xl: "1rem" }}
            minWidth={{ mdDown: "25vw", lgTo2xl: "13vw" }}
            style={{
              backgroundColor: color,
              color: "white",
              height: "4vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "default",
            }}
          >
            {btnIcon}
            <Text fontSize={{ mdDown: 14, lgTo2xl: 14 }}>{btnText}</Text>
          </Button>
          <Text
            fontSize={{
              mdDown: 28,
              lgTo2xl: 30,
            }}
            style={{ fontWeight: 550 }}
          >
            {title}
          </Text>
          <Text
            maxW="5/6"
            fontSize={{
              mdDown: 16,
              lgTo2xl: 16,
            }}
            style={{ color: "#7A746B", textAlign: "center" }}
          >
            {desc}
          </Text>
          <Box
            flexDirection={{
              mdDown: "column",
              lgTo2xl: "row",
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            gap={{
              mdDown: "4",
              lgTo2xl: "8",
            }}
            marginTop="4"
            textAlign="center"
            minWidth="3/4"
            maxWidth="3/4"
          >
            <Box
              paddingTop={{ mdDown: "1rem", lgTo2xl: "0.8rem" }}
              paddingBottom={{ mdDown: "1rem", lgTo2xl: "0.8rem" }}
              paddingRight={{ mdDown: "2rem", lgTo2xl: "1.75rem" }}
              paddingLeft={{ mdDown: "2rem", lgTo2xl: "1.75rem" }}
              borderRadius={{ mdDown: "1rem", lgTo2xl: "1rem" }}
              border={{
                mdDown: "1.5px solid black",
                lgTo2xl: "2px solid black",
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                fontSize={{
                  mdDown: 18,
                  lgTo2xl: 16,
                }}
                style={{
                  color: "black",
                }}
                fontWeight={{
                  mdDown: 550,
                  lgTo2xl: 600,
                }}
              >
                Get started free
              </Box>
              <FaArrowRight
                color="black"
                arabicForm="isolated"
                overlineThickness={10}
                style={{
                  fontWeight: 200,
                  marginLeft: "0.5rem",
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                fontSize={{
                  mdDown: 16,
                  lgTo2xl: 16,
                }}
                style={{
                  textDecoration: "underline",
                  fontWeight: 600,
                }}
                textUnderlineOffset={{ mdDown: "4px", lgTo2xl: "2px" }}
                textDecorationThickness={{ mdDown: "0.5px", lgTo2xl: "1px" }}
              >
                Learn more
              </Text>
              <FaArrowRight
                color="black"
                arabicForm="isolated"
                overlineThickness={10}
                style={{
                  fontWeight: 200,
                  marginLeft: "0.5rem",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContentCollaboration;
