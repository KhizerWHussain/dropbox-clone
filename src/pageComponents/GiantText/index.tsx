"use client";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Colors } from "../../../constants";
import { useScroll, useInView } from "framer-motion";
import { giantTextArray } from "./text";
import Words from "./words";

const GiantText = () => {
  const targetElement = useRef<HTMLDivElement | null>(null);

  const [isAnimationStop, setIsAnimationStop] = useState<boolean>(false);

  console.log("isAnimationStop ==>", isAnimationStop);

  const isElementInView = useInView(targetElement, {
    once: false,
  });

  useEffect(() => {
    // Scroll to the center of the element when it's in view
    if (isElementInView && targetElement.current) {
      const element = targetElement.current;
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.clientHeight;

      // Scroll to center the element
      window.scrollTo({
        top:
          window.scrollY +
          elementTop -
          window.innerHeight / 2 +
          elementHeight / 2,
        behavior: "smooth",
      });
    }
  }, [isElementInView]);

  const { scrollYProgress } = useScroll({
    target: targetElement,
    offset: ["end", "start"],
  });

  return (
    <Box
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: Colors.back,
        overflowY: "auto",
        scrollBehavior: "smooth",
      }}
      height={{
        mdDown: "100vh",
        lg: "100vh",
        xlTo2xl: "120vh",
      }}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxW={{ mdDown: "full", lgTo2xl: "2/3" }}
        height="full"
      >
        <Box ref={targetElement}>
          {giantTextArray.map((item: string, i: number) => {
            const start = i / giantTextArray.length;
            const end = start + 1 / giantTextArray.length;

            return (
              <Words
                range={[start, end]}
                key={i}
                progress={scrollYProgress}
                onAnimationComplete={() => setIsAnimationStop(true)}
              >
                {item}
              </Words>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default GiantText;
