import { Box, Text } from "@chakra-ui/react";
import { MotionValue, useTransform, motion } from "framer-motion";
import React from "react";

interface SpanProp {
  children: any;
  range: [number, number];
  progress: MotionValue<number>;
}

export default function Words({ children, range, progress }: SpanProp) {
  const opacity = useTransform(progress, range, [0.25, 1]);

  return (
    <Box
      paddingRight={{
        lgTo2xl: 0,
        mdDown: "2rem",
      }}
      paddingLeft={{
        lgTo2xl: 0,
        mdDown: "2rem",
      }}
      display="inline-block"
    >
      <motion.span
        style={{
          color: "black",
          opacity: typeof children !== "string" ? 1 : opacity,
        }}
        transition={{ duration: 0.25, delay: 0.1, ease: "easeInOut" }}
      >
        <Text
          fontSize={{
            mdDown: 20,
            lgTo2xl: 42,
          }}
          fontWeight={550}
          paddingBottom={{ lgTo2xl: 8 }}
          paddingTop={{ lgTo2xl: 8 }}
          paddingRight={{ lgTo2xl: 2 }}
          paddingLeft={{ lgTo2xl: 2 }}
          letterSpacing={{
            mdDown: 0,
            lgTo2xl: 1,
          }}
          lineHeight={0}
        >
          {children}
        </Text>
      </motion.span>
    </Box>
  );
}
