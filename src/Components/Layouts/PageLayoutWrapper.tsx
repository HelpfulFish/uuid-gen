import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

interface PageLayoutWrapperProps {
  children: React.ReactNode;
}

const PageLayoutWrapper: React.FC<PageLayoutWrapperProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "gray.900";

  return (
    <Box bg={bgColor} p={4}>
      {children}
    </Box>
  );
};

export default PageLayoutWrapper;
