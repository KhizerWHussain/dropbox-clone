"use client";
import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { Colors } from "../../../constants";
import { FaDropbox } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useScroll, useTransform, motion } from "framer-motion";

const headerOnLeftArray = [
  { id: 1, title: "Products", haveDropDown: true },
  { id: 2, title: "Solutions", haveDropDown: true },
  { id: 3, title: "Enterprise", haveDropDown: false },
  { id: 4, title: "Pricing", haveDropDown: false },
];

const headerOnRightArray = [
  { id: 1, title: "Contact Sales", haveDropDown: false },
  { id: 2, title: "Get app", haveDropDown: true },
  { id: 3, title: "Sign up", haveDropDown: false },
  { id: 4, title: "Log in", haveDropDown: false },
];

const Header = () => {
  const router = useRouter();

  const { scrollYProgress } = useScroll();

  const framerPadding = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["1.7rem", "0.65rem"]
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

  const handleMainIconNavigation = () => {
    router.push("/", { scroll: true });
  };

  return (
    <>
      <motion.div
        style={{
          overflowX: "hidden",
          width: "100vw",
          paddingTop: framerPadding,
          paddingBottom: framerPadding,
          paddingRight: "1.5rem",
          paddingLeft: "1.5rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
          flex: 1,
          boxShadow,
          backgroundColor,
          position: "fixed",
          top: 0,
          zIndex: 50,
          color: "white",
        }}
        transition={{ duration: 0.15, delay: 0.05, ease: "easeOut" }}
      >
        <Box style={{ display: "flex", gap: "1.5rem" }}>
          <Box
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleMainIconNavigation}
          >
            <Box
              style={{
                backgroundColor: Colors.primary,
                padding: 4,
                height: 40,
                width: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaDropbox size={32} />
            </Box>
            <Text style={{ fontSize: 22, fontWeight: 700 }}>Dropbox</Text>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
              marginLeft: "1rem",
            }}
          >
            {headerOnLeftArray.map((item: any, i: number) => (
              <Box
                key={`${i}.${item.id}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2.5,
                }}
                _hover={{
                  color: Colors.primary,
                }}
              >
                <Text
                  style={{
                    fontWeight: 550,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  {item.title}
                </Text>
                {item.haveDropDown ? <IoIosArrowDown /> : null}
              </Box>
            ))}
          </Box>
        </Box>

        <Box style={{ display: "flex", gap: "1.5rem" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
              marginLeft: "1rem",
            }}
          >
            <Box>
              <TbWorld
                style={{
                  fontSize: 18,
                }}
              />
            </Box>
            {headerOnRightArray.map((item: any, i: number) => (
              <Box
                key={`${i}.${item.id}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2.5,
                }}
                _hover={{
                  color: Colors.primary,
                }}
              >
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  {item.title}
                </Text>
                {item.haveDropDown ? <IoIosArrowDown /> : null}
              </Box>
            ))}
          </Box>
          <Box>
            <Button
              style={{
                padding: 2,
                width: 120,
                fontWeight: 550,
                fontSize: 16,
                borderRadius: 10,
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Header;
