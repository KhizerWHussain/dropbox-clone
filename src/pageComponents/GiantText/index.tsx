"use client";
import { Box } from "@chakra-ui/react";
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

  const { scrollYProgress } = useScroll({
    target: targetElement,
    offset: ["end end", "center start"],
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
          // ref={targetElement}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyItems: "center",
            alignItems: "center",
            height: "100%",
            lineHeight: 1.25,
          }}
          maxW="3/5"
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
                  hasOpacity={!!item.color}
                >
                  {item.text}
                </Span>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GiantText;

const Span = ({ children, range, progress, wordColor, hasOpacity }: any) => {
  const opacity = useTransform(progress, range, [0.25, 1]);

  return (
    <motion.span
      style={{
        display: "inline-block",
        padding: 6,
        fontSize: 40,
        fontWeight: 550,
        letterSpacing: 1,
        color: wordColor,
        opacity: hasOpacity ? 1 : opacity,
      }}
      transition={{ duration: 0.25, delay: 0.1, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
};
