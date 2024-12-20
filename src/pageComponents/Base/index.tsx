"use client";
import React, { useRef, lazy, Suspense } from "react";
const Header = lazy(() => import("@/pageComponents/Header"));

import Base2 from "../Base2";

const Hero = lazy(() => import("../Hero"));
const HeroContent = lazy(() => import("../HeroContent"));
const Footer = lazy(() => import("../Footer"));

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Box } from "@chakra-ui/react";

const Base = () => {
  const targetRef = useRef<any | null>(null);

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollY, [0, 350], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>

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
                opacity,
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
      <Base2 />

      <Footer />
    </>
  );
};

export default Base;
