import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../../../../constants";
import { FaDropbox } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

// import { MenuTrigger } from "@/components/ui/menu";

interface LeftSideHeaderProp {
  headerOnLeftArray: any[];
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: () => void;
}

const LeftSideHeader = ({
  handleMouseEnter,
  handleMouseLeave,
  headerOnLeftArray,
}: LeftSideHeaderProp) => {
  const router = useRouter();

  const handleMainIconNavigation = () => {
    router.push("/", { scroll: true });
  };

  return (
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
        <Text
          display={{
            mdDown: "none",
          }}
          style={{ fontSize: 22, fontWeight: 700 }}
        >
          Dropbox
        </Text>
      </Box>
      <Box
        display={{
          base: "none",
          sm: "none",
          lg: "none",
          md: "none",
          xl: "flex",
          "2xl": "flex",
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          marginLeft: "1rem",
        }}
      >
        {headerOnLeftArray.map((item: any, i: number) => (
          //   <MenuTrigger asChild={true}>
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
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
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
          //   </MenuTrigger>
        ))}
      </Box>
    </Box>
  );
};

export default LeftSideHeader;
