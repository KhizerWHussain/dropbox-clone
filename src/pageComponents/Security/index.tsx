import { Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import SecurityImages from "./images";
import SecurityText from "./text";
import Testimonials from "../Testimonials";
import Companies from "../Companies";
import {
  motion,
  // useAnimation,
  // useInView,
  // useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Security = () => {
  // const controls = useAnimation();
  // const targetRef = useRef(null);
  // const isInView = useInView(targetRef, { once: false });

  // useEffect(() => {
  //   if (isInView) {
  //     controls.start({ maxWidth: "90%" });
  //   }
  // }, [isInView, controls]);

  // const { scrollYProgress } = useScroll(); // Hook to track scroll progress
  // const maxWidth = useTransform(scrollYProgress, [0, 0.5], ["80%", "90%"]); // Map scroll progress to height values

  // console.log("scrollYProgress ==>", scrollYProgress);

  const targetRef = useRef<any | null>(null);
  // const [scrollPosition, setScrollPosition] = useState<number>(0);

  // const { scrollY } = useScroll({
  //   target: targetRef,
  //   offset: ["start start", "end end"],
  // });

  // useMotionValueEvent(scrollY, "change", () => {
  //   console.log(scrollY.get());
  //   // setScrollPosition(scrollY.get());
  // });

  const { scrollYProgress } = useScroll({
    target: targetRef, // Track only this component
    offset: ["start end", "end start"], // Start animating when the component enters and exits the viewport
  });

  // const maxWidth = useTransform(scrollY, [5000, 5550], ["80%", "90%"]);

  const maxWidth = useTransform(scrollYProgress, [0, 0.4], ["80%", "90%"]);

  return (
    <>
      <Box
        height={{
          mdDown: "150vh",
          lgTo2xl: "250vh",
        }}
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <motion.div
          ref={targetRef}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            minWidth: "80%",
            maxWidth,
            background: "linear-gradient(to bottom, #282B2F, #000000)",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-evenly",
            gap: "1rem",
            alignItems: "center",
            alignContent: "center",
            overflow: "hidden",
          }}
        >
          <SecurityText />
          <SecurityImages />
          <Testimonials />
          <Companies />
        </motion.div>
      </Box>
    </>
  );
};

export default Security;
