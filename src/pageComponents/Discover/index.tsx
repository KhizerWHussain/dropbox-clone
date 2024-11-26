import { Box, Text } from "@chakra-ui/react";
import React from "react";
import DiscoveryCard from "./card";
import { discoveryCardType, disoverCardArray } from "./data";

const Discover = () => {
  return (
    <>
      <Box
        style={{
          width: "100vw",
          height: "150vh",
          color: "black",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
        backgroundColor="#F7F5F2"
      >
        <Text fontSize={36}>Discover, learn, thrive with Dropbox</Text>
        <Box
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {disoverCardArray.map((item: discoveryCardType, i: number) => (
            <DiscoveryCard
              key={`${i}.${item.id}`}
              desc={item.desc}
              image={item.image}
              title={item.title}
            />
          ))}
        </Box>
        <Text
          fontSize={18}
          color="blue.600"
          fontWeight={400}
          style={{ marginTop: "2.5rem" }}
        >
          View more resources
        </Text>
      </Box>
    </>
  );
};

export default Discover;
