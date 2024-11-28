"use client";
import React, { useRef, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { useScroll, useTransform, motion } from "framer-motion";

import ProductDropDown from "./dropDowns/product";
import SolutionDropDown from "./dropDowns/solution";
import GetApp from "./dropDowns/getApp";
import LeftSideHeader from "./left";
import RightSideHeader from "./right";
import { headerOnLeftArray, headerOnRightArray } from "./data";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  console.log("hoveredItem ==>", hoveredItem);

  const { scrollYProgress } = useScroll();

  const framerPadding = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["1.7rem", "0.6rem"]
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0.8)"]
  );

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["none", "0px 2px 5px rgba(0,0,0,0.2)"]
  );

  const handleMouseEnter = (title: string) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    // setHoveredItem(null);

    hoverTimeout.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200); // Delay to avoid flickering
  };

  const loadDropDownComponent = () => {
    switch (hoveredItem) {
      case "Products":
        return (
          <ProductDropDown
            onMouseEnter={() => handleMouseEnter(hoveredItem || "")}
            onMouseLeave={handleMouseLeave}
          />
        );
      case "Solutions":
        return (
          <SolutionDropDown
            onMouseEnter={() => handleMouseEnter(hoveredItem || "")}
            onMouseLeave={handleMouseLeave}
          />
        );
      case "Get app":
        return (
          <GetApp
            onMouseEnter={() => handleMouseEnter(hoveredItem || "")}
            onMouseLeave={handleMouseLeave}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* <MenuRoot> */}
      <VStack
        style={{
          height: "100%",
          width: "100vw",
          overflowX: "hidden",
          top: 0,
          zIndex: 50,
          color: "white",
          position: "fixed",
          gap: 0,
        }}
      >
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: framerPadding,
            paddingBottom: framerPadding,
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            boxShadow,
            backgroundColor,

            borderBottom:
              hoveredItem !== null
                ? "1px solid rgba(128, 128, 128, 0.25)"
                : undefined,
          }}
          transition={{ duration: 0.15, delay: 0.05, ease: "easeOut" }}
        >
          <LeftSideHeader
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            headerOnLeftArray={headerOnLeftArray}
          />
          <RightSideHeader
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            headerOnRightArray={headerOnRightArray}
          />
        </motion.div>

        <Box
          style={{
            backgroundColor: "black",
            display: "flex",
            width: "100vw",
            height: "fit-content",
          }}
        >
          {loadDropDownComponent()}
        </Box>

        {/* <MenuContent
            position="fixed"
            style={{
              backgroundColor: "black",
              display: "flex",
              width: "100vw",
            }}
          >
            {loadDropDownComponent()}
          </MenuContent> */}
      </VStack>
      {/* </MenuRoot> */}
    </>
  );
};

export default Header;
