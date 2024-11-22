"use client";
import React, { useRef } from "react";
import Header from "@/pageComponents/Header";
import Hero from "../Hero";
import HeroContent from "../HeroContent";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Box } from "@chakra-ui/react";
import GiantText from "../GiantText";

const Base = () => {
  const targetRef = useRef<any | null>(null);

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollY, "change", () => {
    console.log(scrollY.get());
  });

  const scale = useTransform(scrollY, [0, 350], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <>
      <Header />
      <Box ref={targetRef} position="relative">
        <Box style={{ position: "sticky" }}>
          <AnimatePresence mode="sync">
            <motion.div
              initial={{ opacity: 1, top: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                height: "100%",
                position: "sticky",
                opacity,
              }}
            >
              <Hero scale={scale} />
            </motion.div>
            <motion.div
              initial={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ height: "80vh", position: "sticky" }}
            >
              <HeroContent scale={scale} opacity={opacity} />
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
      <GiantText />
    </>
  );
};

export default Base;
