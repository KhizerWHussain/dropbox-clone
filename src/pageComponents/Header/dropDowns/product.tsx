import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { productDropDownArray, productDropDownArrayType } from "./data";
import { Avatar } from "@/components/ui/avatar";

const ProductDropDown = ({ onMouseEnter, onMouseLeave }: any) => {
  return (
    <>
      <Flex
        style={{
          display: "flex",
          height: "55vh",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          marginLeft: "13rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            width: "30vw",
            maxWidth: "30vw",
            minWidth: "30vw",
            height: "100%",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {productDropDownArray.map(
            (item: productDropDownArrayType, i: number) => (
              <HStack
                key={`${i}.${item.id}`}
                gap={0}
                style={{ height: "10vh", width: "14vw", padding: "0.5rem" }}
                cursor="pointer"
                _hover={{
                  backgroundColor: "#52321a",
                  color: "blue.500",
                  borderRadius: "0.5rem",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    height: "100%",
                    width: "25%",
                    minWidth: "25%",
                  }}
                >
                  <Avatar src={item.image} shape="square" size="md" />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    height: "100%",
                    gap: "0.25rem",
                    width: "75%",
                    minWidth: "75%",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: 600 }}>
                    {item.title}
                  </Text>
                  <Text
                    width="full"
                    color="white"
                    style={{
                      fontSize: 12,
                      fontWeight: 300,
                      opacity: 0.7,
                    }}
                  >
                    {item.desc}
                  </Text>
                </Box>
              </HStack>
            )
          )}
        </Box>
      </Flex>
    </>
  );
};

export default ProductDropDown;
