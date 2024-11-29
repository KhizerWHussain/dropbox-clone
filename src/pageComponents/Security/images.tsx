"use client";
import React, { useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import Security1 from "./png/security_1.png";
import Security2 from "./png/security_2.png";
import Security3 from "./png/security_3.png";
import Security4 from "./png/security_4.png";

const SecurityImages = () => {
  const targetRef = useRef<any | null>(null);
  const isInView = useInView(targetRef, { once: true });

  const variants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
  };

  return (
    <Box
      height={{ mdDown: "50vh", lgTo2xl: "80vh" }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "6rem",
      }}
      maxWidth={{ mdDown: "90%", lgTo2xl: "60vw" }}
      minWidth={{ mdDown: "90%", lgTo2xl: "60vw" }}
    >
      {/* mobile */}
      <Box display={{ mdDown: "flex", lgTo2xl: "none" }}>
        <motion.div
          ref={targetRef}
          animate={isInView ? "animate" : "initial"}
          initial="initial"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          variants={variants}
        >
          <Image
            src={Security4}
            alt="fourth"
            width={100}
            height={100}
            style={{
              width: "100vw",
              objectFit: "contain",
            }}
          />
        </motion.div>
      </Box>

      {/* web  */}
      <Flex
        display={{ mdDown: "none" }}
        justifyContent="center" // Center all items
        alignItems="center" // Align items in the center vertically
        style={{
          width: "100%",
          height: "100%",
          position: "relative", // To control image positions using zIndex
        }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "absolute",
            zIndex: 2,
            left: "5%",
          }}
          ref={targetRef}
          animate={isInView ? "animate" : "initial"}
          initial="initial"
          transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
          variants={variants}
        >
          <Image
            src={Security1}
            alt="first"
            width={400}
            height={400}
            style={{
              zIndex: 2,
              height: "20vh",
              width: "10vw",
              marginBottom: "-1.5rem",
              marginLeft: "1rem",
              objectFit: "contain",
            }}
          />
          <Image
            src={Security2}
            alt="second"
            width={400}
            height={400}
            style={{
              zIndex: 1,
              height: "35vh",
              width: "15vw",
              objectFit: "contain",
            }}
          />
        </motion.div>

        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "absolute",
            left: "25%",
            zIndex: 5,
          }}
          ref={targetRef}
          animate={isInView ? "animate" : "initial"}
          initial="initial"
          transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
          variants={variants}
        >
          <Image
            src={Security3}
            alt="third"
            width={400}
            height={400}
            style={{
              zIndex: 5,
              height: "60vh",
              width: "30vw",
              marginLeft: "-3.5rem",
              marginTop: "-5rem",
              objectFit: "contain",
            }}
          />
        </motion.div>

        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "absolute",
            left: "60%",
            zIndex: 10,
            bottom: "10%",
          }}
          ref={targetRef}
          animate={isInView ? "animate" : "initial"}
          initial="initial"
          transition={{ duration: 0.2, delay: 0.3, ease: "easeInOut" }}
          variants={variants}
        >
          <Image
            src={Security4}
            alt="fourth"
            width={1300}
            height={1000}
            style={{
              zIndex: 10,
              height: "70vh",
              width: "100vw",
              marginLeft: "-8rem",
              marginTop: "-4rem",
              objectFit: "contain",
            }}
          />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default SecurityImages;
