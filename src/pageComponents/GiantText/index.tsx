"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Colors } from "../../../constants";
import { useScroll, useTransform, motion } from "framer-motion";

const fullText: string =
  "With Dropbox, you can edit and sign your documents, collaborate on projects and search across all your apps, and it happens in the same place you securely store all your content. It’s that simple :)";

const GiantText = () => {
  const { design } = Colors;

  const colorMap: { [key: string]: string } = {
    "edit and sign": design.brownish,
    collaborate: design.greenish,
    search: design.purplish,
    "securely store": design.pinkish,
  };

  const targetElement = useRef<any>(null);

  // const [isAnimating, setIsAnimating] = useState(false);

  // Lock the scroll during animation and unlock it when the animation is done
  // useEffect(() => {
  //   if (isAnimating) {
  //     document.body.style.overflow = "hidden"; // Lock scrolling
  //   } else {
  //     document.body.style.overflow = "auto"; // Unlock scrolling
  //   }
  // }, [isAnimating]);

  // Scroll to bottom when the component comes into view
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         window.scrollTo({
  //           top: document.body.scrollHeight,
  //           behavior: "smooth", // Smooth scroll to bottom
  //         });
  //       }
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (targetElement.current) {
  //     observer.observe(targetElement.current);
  //   }

  //   return () => {
  //     if (targetElement.current) {
  //       observer.unobserve(targetElement.current);
  //     }
  //   };
  // }, []);

  const { scrollYProgress } = useScroll({
    target: targetElement,
    // offset: ["start 0.9", "start 0.25"],
    offset: ["start 0.9", "start 0.25"],
  });

  const characters = fullText.split(" ");

  return (
    <Box
      style={{
        height: "120vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: Colors.back,
      }}
    >
      <Box
        style={{
          height: "100%",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Box
          ref={targetElement}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyItems: "center",
            alignItems: "center",
            lineHeight: 1.4,
            // height: "100%",
            // transition: "all 3s",
            // top: "40%",
            // position: "relative",
          }}
          maxW="3/5"
        >
          {characters.map((item: string, i: number) => {
            const start = i / characters.length;
            const end = start + 1 / characters.length;

            const wordColor = colorMap[item] || "black";
            const isSpecialWord = colorMap[item]; // Check if the word is special and should have opacity

            return (
              <Span
                key={i}
                range={[start, end]}
                progress={scrollYProgress}
                wordColor={wordColor}
                hasOpacity={isSpecialWord}
                // setIsAnimating={setIsAnimating}
              >
                {item}
              </Span>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default GiantText;

const Span = ({
  children,
  range,
  progress,
  wordColor,
  hasOpacity,
  setIsAnimating,
}: any) => {
  // const opacity = useTransform(progress, range, [0.25, 1]);
  const opacity = !hasOpacity ? useTransform(progress, range, [0.25, 1]) : 1;

  // const handleAnimationStart = () => {
  //   setIsAnimating(true); // Lock scroll
  // };

  // // Trigger end of animation
  // const handleAnimationComplete = () => {
  //   setIsAnimating(false); // Unlock scroll
  // };

  return (
    <motion.span
      style={{
        display: "inline-block",
        padding: 6,
        fontSize: 40,
        // color: "black",
        fontWeight: 550,
        letterSpacing: 1,
        color: wordColor,
        opacity,
      }}
      // onAnimationStart={handleAnimationStart}
      // onAnimationComplete={handleAnimationComplete}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
};

// <Box
//   style={{
//     display: "flex",
//     justifyItems: "center",
//     alignItems: "center",
//     height: "100%",
//   }}
//   maxW="3/5"
// >
//   <Text
//     color="black"
//     style={{
//       fontSize: 40,
//       fontWeight: 550,
//       letterSpacing: 1,
//     }}
//   >
//     With Dropbox, you can{" "}
//     <span style={{ color: design.brownish }}>edit and sign</span> your
//     documents,
//     <span style={{ color: design.greenish }}> collaborate</span> on projects
//     and <span style={{ color: design.purplish }}>search</span> across all
//     your apps, and it happens in the same place you{" "}
//     <span style={{ color: design.pinkish }}>securely store</span> all your
//     content. It’s that simple :)
//   </Text>
// </Box>;
