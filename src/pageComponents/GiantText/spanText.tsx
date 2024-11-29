import { Box, Text } from "@chakra-ui/react";
import { useTransform, motion, MotionValue } from "framer-motion";
import React from "react";

interface SpanProp {
  children: any;
  range: [number, number];
  progress: MotionValue<number>;
  wordColor: string;
  hasOpacity: boolean;
  onAnimationComplete: () => void;
}

export default function Span({
  children,
  range,
  progress,
  wordColor,
  hasOpacity,
  onAnimationComplete,
}: SpanProp) {
  const opacity = useTransform(progress, range, [0.25, 1]);

  return (
    <motion.span
      style={{
        display: "inline-block",
        fontSize: 40,
        fontWeight: 550,
        color: wordColor,
        opacity: hasOpacity ? opacity : 1,
      }}
      transition={{ duration: 0.25, delay: 0.1, ease: "easeInOut" }}
      // when framer-motion animations ends
      onAnimationComplete={onAnimationComplete}
    >
      <Box
        paddingRight={{
          lgTo2xl: 0,
          mdDown: "2rem",
        }}
        paddingLeft={{
          lgTo2xl: 0,
          mdDown: "2rem",
        }}
      >
        <Text
          fontSize={{
            mdDown: 20,
            lg: 32,
            xlTo2xl: 40,
          }}
          padding={{
            lgTo2xl: 1,
          }}
          letterSpacing={{
            mdDown: 0,
            lgTo2xl: 1,
          }}
          lineHeight={0}
        >
          {children}
        </Text>
      </Box>
    </motion.span>
  );
}
