import { Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import SecurityImages from "./images";
import SecurityText from "./text";
import Testimonials from "../Testimonials";
import Companies from "../Companies";
import { motion, useScroll, useTransform } from "framer-motion";

const Security = () => {
  const targetRef = useRef<any | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef, // Track only this component
    offset: ["start end", "end start"], // Start animating when the component enters and exits the viewport
  });

  const maxWidth = useTransform(scrollYProgress, [0, 0.4], ["80%", "90%"]);

  return (
    <>
      {/* web */}
      <Box
        display={{ mdDown: "none", lgTo2xl: "flex" }}
        height={{
          mdDown: "200vh",
          lgTo2xl: "240vh",
        }}
        style={{
          width: "100vw",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <motion.div
          ref={targetRef}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            minWidth: "80%",
            maxWidth,
            background: "linear-gradient(to bottom, #282B2F, #000000)",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-around",
            overflow: "hidden",
          }}
        >
          <SecurityText />
          <SecurityImages />
          <Testimonials />
          <Companies />
        </motion.div>
      </Box>
      {/* mobile */}

      <Box
        display={{ mdDown: "flex", lgTo2xl: "none" }}
        height={{
          mdDown: "200vh",
          lgTo2xl: "250vh",
        }}
        style={{
          width: "100vw",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          background: "linear-gradient(to bottom, #282B2F, #000000)",
          alignContent: "center",
        }}
      >
        <SecurityText />
        <SecurityImages />
        <Testimonials />
        <Companies />
      </Box>
    </>
  );
};

export default Security;
