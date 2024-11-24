import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { BiLock } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

const Security = () => {
  return (
    <>
      <Box
        style={{
          height: "200vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Box
          maxW="3/4"
          minW="3/4"
          backgroundColor="#282B2F"
          borderRadius="1rem"
          style={{
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <BiLock size={48} />
            <Text style={{ fontSize: 30, fontWeight: 550 }}>
              Security never comes second
            </Text>
            <Text
              maxW="5/6"
              style={{ fontSize: 16, textAlign: "center", opacity: 0.7 }}
            >
              From industry-leading encryption and tamper-proof documents to
              version history and recovery, Dropbox keeps your intellectual
              property safe and never sells or shares your data.
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
                  border: "2px solid white",
                }}
              >
                <Box
                  style={{
                    fontSize: 16,
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
                    textUnderlineOffset: "2px",
                    textDecorationThickness: "1px",
                    opacity: 0.95,
                  }}
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
        </Box>
      </Box>
    </>
  );
};

export default Security;
