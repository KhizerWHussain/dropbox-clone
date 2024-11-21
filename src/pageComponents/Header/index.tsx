import { Avatar } from "@/components/ui/avatar";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const headerOnRightArray = [
  {
    title: "Products",
  },
  {
    title: "Solutions",
  },
  {
    title: "Enterprise",
  },
  {
    title: "Price",
  },
];

const headerOnLeftArray = [
  {
    title: "Contact Sales",
  },
  {
    title: "Get app",
  },
  {
    title: "Signup",
  },
  {
    title: "Log in",
  },
];

const Header = () => {
  return (
    <>
      <Box
        style={{
          width: "100vw",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          height: "100%",
          backgroundColor: "black",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            style={{
              borderRadius: 0,
              height: 50,
              width: 50,
            }}
          />
          <Text style={{ fontSize: 20, fontWeight: 700 }}>Dropbox</Text>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {headerOnRightArray.map((item: any, i: number) => (
            <Text
              key={i}
              style={{
                fontWeight: 500,
              }}
            >
              {item.title}
            </Text>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Header;
