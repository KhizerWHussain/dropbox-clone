"use client";
import React, { lazy, Suspense, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Box } from "@chakra-ui/react";
const Hero = lazy(() => import("../Hero"));
const HeroContent = lazy(() => import("../HeroContent"));

const HeroSection = () => {
  const targetRef = useRef<any | null>(null);

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollY, [0, 350], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 350],
    ["rgba(0, 0, 0, 1)", "rgba(247, 245, 242, 1)"]
  );

  return (
    <Box ref={targetRef} position="relative" color="white">
      <Box style={{ position: "sticky" }}>
        <AnimatePresence mode="sync">
          <motion.div
            key="hero-section"
            initial={{ opacity: 1, top: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              height: "100%",
              position: "sticky",
              backgroundColor,
            }}
          >
            <Suspense fallback={null}>
              <Hero scale={scale} opacity={opacity} />
            </Suspense>
          </motion.div>
          <motion.div
            key="hero-content"
            initial={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ height: "80vh", position: "sticky" }}
          >
            <Suspense fallback={null}>
              <HeroContent opacity={opacity} />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default HeroSection;
