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
          mdDown: "40vh",
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
          maxWidth="3/5"
        >
          <Button
            padding={{ mdDown: "0", lgTo2xl: "1rem" }}
            borderRadius={{ mdDown: "full", lgTo2xl: "1rem" }}
            style={{
              backgroundColor: color,
              color: "white",
              minWidth: "13vw",
              height: "4vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "default",
            }}
          >
            {btnIcon}
            <Text fontSize={{ mdDown: 10, lgTo2xl: 14 }}>{btnText}</Text>
          </Button>
          <Text
            fontSize={{
              mdDown: 16,
              lgTo2xl: 30,
            }}
            style={{ fontWeight: 550 }}
          >
            {title}
          </Text>
          <Text
            maxW="5/6"
            fontSize={{
              mdDown: 10,
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
              paddingTop={{ mdDown: "0.5rem", lgTo2xl: "0.8rem" }}
              paddingBottom={{ mdDown: "0.5rem", lgTo2xl: "0.8rem" }}
              paddingRight={{ mdDown: "0.75rem", lgTo2xl: "1.75rem" }}
              paddingLeft={{ mdDown: "0.75rem", lgTo2xl: "1.75rem" }}
              borderRadius={{ mdDown: "0.5rem", lgTo2xl: "1rem" }}
              border={{
                mdDown: "1px solid black",
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
                  mdDown: 10,
                  lgTo2xl: 16,
                }}
                style={{
                  fontWeight: 600,
                  color: "black",
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
