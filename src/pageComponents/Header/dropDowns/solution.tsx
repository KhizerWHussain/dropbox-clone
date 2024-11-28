import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { solutionsDropDownArray, solutionsDropDownArrayType } from "./data";

const SolutionDropDown = ({ onMouseEnter, onMouseLeave }: any) => {
  return (
    <>
      <HStack
        style={{
          display: "flex",
          height: "45vh",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          marginLeft: "17rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            width: "50vw",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            padding: "2rem",
          }}
        >
          {solutionsDropDownArray.map(
            (item: solutionsDropDownArrayType, i: number) => (
              <VStack
                key={`${i}.${item.id}`}
                style={{
                  height: "100%",
                  justifyContent: "start",
                  alignItems: "flex-start",
                  width: "100%",
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Text style={{ fontSize: 14, fontWeight: 600, opacity: 0.6 }}>
                  {item.title}
                </Text>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  {item.data.map((val: string, index: number) => (
                    <Text
                      cursor="pointer"
                      width="full"
                      key={`${val}.${index}`}
                      style={{ padding: "0.25rem" }}
                      _hover={{
                        backgroundColor: "#52321a",
                        borderRadius: "0.5rem",
                      }}
                    >
                      {val}
                    </Text>
                  ))}
                </Box>
              </VStack>
            )
          )}
        </Box>
      </HStack>
    </>
  );
};

export default SolutionDropDown;
