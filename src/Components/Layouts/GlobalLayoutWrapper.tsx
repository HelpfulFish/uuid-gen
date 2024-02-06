import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import useScreenSize from "@/Hooks/useScreenSize";

interface GlobalLayoutWrapperProps {
  children: React.ReactNode;
}

const GlobalLayoutWrapper: React.FC<GlobalLayoutWrapperProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const { isMobile } = useScreenSize();
  const bgColor = colorMode === "light" ? "gray.100" : "gray.800";

  return (
    <Box bg={bgColor} minWidth={isMobile ? "container.sm" : "full"}>
      {children}
    </Box>
  );
};

export default GlobalLayoutWrapper;
