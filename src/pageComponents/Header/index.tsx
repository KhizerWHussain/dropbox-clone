"use client";
import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { Colors } from "../../../constants";
import { FaDropbox } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const headerOnLeftArray = [
  { title: "Products", haveDropDown: true },
  { title: "Solutions", haveDropDown: true },
  { title: "Enterprise", haveDropDown: false },
  { title: "Pricing", haveDropDown: false },
];

const headerOnRightArray = [
  { title: "Contact Sales", haveDropDown: false },
  { title: "Get app", haveDropDown: true },
  { title: "Sign up", haveDropDown: false },
  { title: "Log in", haveDropDown: false },
];

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleMainIconNavigation = () => {
    router.push("/", { scroll: true });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <Box
        style={{
          overflowX: "hidden",
          width: "100vw",
          paddingTop: isScrolled ? "1.2rem" : "1.7rem",
          paddingBottom: isScrolled ? "1.2rem" : "1.7rem",
          paddingRight: "1.5rem",
          paddingLeft: "1.5rem",
          backgroundColor: isScrolled
            ? "rgba(0, 0, 0, 0.8)" // Reduced opacity on scroll
            : "black", // Full opacity at the top
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
          flex: 1,
          boxShadow: isScrolled ? "0px 2px 5px rgba(0,0,0,0.2)" : "none",
        }}
        // position="sticky"
        position="fixed"
        top={0}
        zIndex="50"
        transition="all 0.3s ease"
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
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2.5,
                }}
              >
                <Text
                  style={{
                    fontWeight: 550,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                  _hover={{
                    color: Colors.primary,
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
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2.5,
                }}
              >
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                  _hover={{
                    color: Colors.primary,
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
      </Box>
    </>
  );
};

export default Header;
