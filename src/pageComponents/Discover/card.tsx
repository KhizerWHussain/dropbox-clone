import { Avatar, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface DisoveryCardProp {
  title: string;
  desc: string;
  image: string;
}

const DiscoveryCard = ({ desc, image, title }: DisoveryCardProp) => {
  return (
    <>
      <Box
        style={{
          height: "60vh",
        }}
      >
        <Box>
          {/* <Avatar /> */}
          <Box>
            <Text>Article</Text>
            <Text>title</Text>
            <Text>desc</Text>
          </Box>
          <Link href="">Read Article</Link>
        </Box>
      </Box>
    </>
  );
};

export default DiscoveryCard;
