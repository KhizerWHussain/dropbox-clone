import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Colors } from "../../../../constants";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";

// import { MenuTrigger } from "@/components/ui/menu";

interface RightSideHeaderProp {
  headerOnRightArray: any[];
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: () => void;
}

const RightSideHeader = ({
  handleMouseEnter,
  handleMouseLeave,
  headerOnRightArray,
}: RightSideHeaderProp) => {
  return (
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
          //   <MenuTrigger asChild={true}>
          <Box
            key={`${i}.${item.id}`}
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 2.5,
            }}
            _hover={{
              color: Colors.primary,
            }}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
            display={{
              base: "none",
              sm: "none",
              md:
                item.title === "Contact Sales" || item.title === "Get app"
                  ? "none"
                  : "flex",
              lg:
                item.title === "Contact Sales" || item.title === "Get app"
                  ? "none"
                  : "flex",
              xl: "flex",
              "2xl": "flex",
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
          //   </MenuTrigger>
        ))}
      </Box>
      <Flex justifyContent="center" alignItems="center" gap="2.5">
        <Button
          display={{
            smDown: "none",
            md: "inline-block",
            lgDown: "flex",
          }}
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
        <Box
          display={{
            lgDown: "inline-block",
            xl: "none",
            "2xl": "none",
          }}
        >
          <GiHamburgerMenu color="white" size={24} />
        </Box>
      </Flex>
    </Box>
  );
};

export default RightSideHeader;
