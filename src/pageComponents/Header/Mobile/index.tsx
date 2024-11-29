import { Box, Flex, Text } from "@chakra-ui/react";
import { useScroll, motion, useTransform } from "framer-motion";
import React from "react";
import { Colors } from "../../../../constants";
import { FaDropbox } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileHeader = () => {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0.8)"]
  );

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["none", "0px 2px 5px rgba(0,0,0,0.2)"]
  );

  return (
    <Flex
      display={{
        mdDown: "flex",
        lgTo2xl: "none",
      }}
      style={{
        width: "100vw",
        overflowX: "hidden",
        top: 0,
        zIndex: 50,
        color: "white",
        position: "fixed",
        gap: 0,
      }}
    >
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
          width: "100%",
          boxShadow,
          backgroundColor,
        }}
        transition={{ duration: 0.15, delay: 0.05, ease: "easeOut" }}
      >
        <Box
          style={{
            backgroundColor: Colors.primary,
            height: 50,
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaDropbox size={32} />
        </Box>
        <Box display="flex" justifyContent="center" gap="4.5" pr="1">
          <Text fontWeight={400} opacity={0.9}>
            Sign up
          </Text>
          <Text fontWeight={400} opacity={0.9}>
            Log in
          </Text>
          <GiHamburgerMenu color="white" size={24} />
        </Box>
      </motion.div>
    </Flex>
  );
};

export default MobileHeader;
