import React from "react";
import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import { ActionItems } from "@/Data/RoutesData";
import { nanoid } from "nanoid";
import { TITLE } from "@/Data/Contants";

const Navigation = () => {
  const { colorMode } = useColorMode();

  const renderActionItems = () => {
    return ActionItems.map((action) => action.component && <action.component key={nanoid()} />);
  };

  return (
    <Flex
      as="header"
      align="center"
      alignContent="center"
      justify="space-between"
      px={8}
      py={4}
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
    >
      <Heading fontSize="medium">{TITLE}</Heading>

      <Flex>{renderActionItems()}</Flex>
    </Flex>
  );
};

export default Navigation;
