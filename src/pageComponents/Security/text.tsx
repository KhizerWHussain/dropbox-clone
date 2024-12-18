import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { BiLock } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

const SecurityText = () => {
  return (
    <Box
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <BiLock size={48} />
      <Text
        fontSize={{
          mdDown: 24,
          lgTo2xl: 30,
        }}
        style={{ fontWeight: 550 }}
      >
        Security never comes second
      </Text>
      <Text
        maxW="5/6"
        fontSize={{
          mdDown: 14,
          lgTo2xl: 16,
        }}
        opacity={{ mdDown: 0.5, lgTo2xl: 0.7 }}
        style={{ textAlign: "center" }}
      >
        From industry-leading encryption and tamper-proof documents to version
        history and recovery, Dropbox keeps your intellectual property safe and
        never sells or shares your data.
      </Text>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        marginTop="4"
        textAlign="center"
        minWidth="3/4"
        maxWidth="3/4"
        gap={{
          mdDown: "4",
          lgTo2xl: "10",
        }}
        flexDirection={{
          mdDown: "column",
          lgTo2xl: "flex",
        }}
      >
        <Box
          paddingTop={{ mdDown: "1rem", lgTo2xl: "0.8rem" }}
          paddingBottom={{ mdDown: "1rem", lgTo2xl: "0.8rem" }}
          paddingRight={{ mdDown: "1.5rem", lgTo2xl: "1.75rem" }}
          paddingLeft={{ mdDown: "1.5rem", lgTo2xl: "1.75rem" }}
          borderRadius={{ mdDown: "1rem", lgTo2xl: "1rem" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid white",
          }}
        >
          <Box
            fontSize={{
              mdDown: 16,
              lgTo2xl: 16,
            }}
            style={{
              fontWeight: 600,
              color: "white",
            }}
          >
            Get started free
          </Box>
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
              textDecorationThickness: "1px",
              opacity: 0.95,
            }}
            textUnderlineOffset={{ mdDown: "4px", lgTo2xl: "2px" }}
          >
            Learn more
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
    </Box>
  );
};

export default SecurityText;
