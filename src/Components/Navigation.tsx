import React from "react";
import { Flex, useColorMode } from "@chakra-ui/react";
import { ActionItems } from "@/Data/RoutesData";
import { nanoid } from "nanoid";

const Navigation = () => {
  const { colorMode } = useColorMode();

  const renderActionItems = () => {
    return ActionItems.map((action) => action.component && <action.component key={nanoid()} />);
  };

  return (
    <Flex as="header" align="center" justify="space-between" px={6} py={2} bg={colorMode === "light" ? "gray.100" : "gray.900"}>
      <Flex></Flex>
      <Flex>{renderActionItems()}</Flex>
    </Flex>
  );
};

export default Navigation;
