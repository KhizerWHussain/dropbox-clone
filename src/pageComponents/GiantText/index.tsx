"use client";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Colors } from "../../../constants";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import Span from "./spanText";

const fullText: string =
  "With Dropbox, you can edit and sign your documents, collaborate on projects and search across all your apps, and it happens in the same place you securely store all your content. It’s that simple :)";

const GiantText = () => {
  const targetElement = useRef<HTMLDivElement | null>(null);
  const { design } = Colors;

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const isElementInView = useInView(targetElement, {
    once: false,
  });

  console.log("isAnimating ==>", isAnimating);

  // useEffect(() => {
  //   if (isElementInView) {
  //     setIsAnimating(true);
  //   } else {
  //     setIsAnimating(false);
  //   }
  // }, [isElementInView]);

  // useEffect(() => {
  //   if (isElementInView) {
  //     // Lock the scroll when animation starts
  //     document.body.style.overflow = "hidden";
  //     setIsAnimating(true);
  //   } else {
  //     // Unlock the scroll when animation ends
  //     document.body.style.overflow = "auto";
  //     setIsAnimating(false);
  //   }
  // }, [isElementInView]);

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

  const colorMap: { [key: string]: string } = {
    "edit and sign": design.brownish,
    collaborate: design.greenish,
    search: design.purplish,
    "securely store": design.pinkish,
  };

  const { scrollYProgress } = useScroll({
    target: targetElement,
    // offset: ["end end", "center start"],
    offset: ["end", "start"],
  });

  // Handle multi-word phrases directly
  const processedText: { text: string; color?: string }[] = [];
  const words = fullText.split(" ");
  let i = 0;

  while (i < words.length) {
    const currentWord = words[i];
    const nextWord = words[i + 1] || "";
    const nextNextWord = words[i + 2] || "";

    const threeWords = `${currentWord} ${nextWord} ${nextNextWord}`;
    const twoWords = `${currentWord} ${nextWord}`;

    if (colorMap[threeWords]) {
      processedText.push({ text: threeWords, color: colorMap[threeWords] });
      i += 3; // Skip the next two words
    } else if (colorMap[twoWords]) {
      processedText.push({ text: twoWords, color: colorMap[twoWords] });
      i += 2; // Skip the next word
    } else if (colorMap[currentWord]) {
      processedText.push({ text: currentWord, color: colorMap[currentWord] });
      i += 1; // Single word with a color
    } else {
      processedText.push({ text: currentWord });
      i += 1; // Regular single word
    }
  }

  return (
    <>
      <Box
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          alignContent: "center",
          backgroundColor: Colors.back,
          overflowY: "hidden",
        }}
        height={{
          mdDown: "100vh",
          lg: "100vh",
          xlTo2xl: "120vh",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            scrollBehavior: "smooth",
          }}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW={{ mdDown: "full", lgTo2xl: "2/3" }}
            overflowY="scroll"
            scrollBehavior="smooth"
            height="full"
          >
            <Box ref={targetElement}>
              {processedText.map((item, i) => {
                const start = i / processedText.length;
                const end = start + 1 / processedText.length;

                return (
                  <Span
                    key={`${i}.${item.text}`}
                    range={[start, end]}
                    progress={scrollYProgress}
                    wordColor={item.color || "black"}
                    hasOpacity={!item.color}
                    onAnimationComplete={() => setIsAnimating(false)}
                  >
                    {item.text}
                  </Span>
                );
              })}
            </Box>
          </Flex>
        </motion.div>
      </Box>
    </>
  );
};

export default GiantText;
