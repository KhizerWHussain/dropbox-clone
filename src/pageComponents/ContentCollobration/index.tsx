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
        style={{
          height: "90vh",
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
            style={{
              backgroundColor: color,
              color: "white",
              borderRadius: "1rem",
              minWidth: "13vw",
              height: "4vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "default",
              padding: "1rem",
            }}
          >
            {btnIcon}
            <Text>{btnText}</Text>
          </Button>
          <Text style={{ fontSize: 30, fontWeight: 550 }}>{title}</Text>
          <Text
            maxW="5/6"
            style={{ fontSize: 16, color: "#7A746B", textAlign: "center" }}
          >
            {desc}
          </Text>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            gap="10"
            marginTop="4"
            textAlign="center"
            minWidth="3/4"
            maxWidth="3/4"
          >
            <Box
              style={{
                display: "flex",
                borderRadius: "1rem",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "0.8rem",
                paddingBottom: "0.8rem",
                paddingRight: "1.75rem",
                paddingLeft: "1.75rem",
                border: "2px solid black",
              }}
            >
              <Box
                style={{
                  fontSize: 16,
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
                style={{
                  textDecoration: "underline",
                  fontSize: 16,
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
