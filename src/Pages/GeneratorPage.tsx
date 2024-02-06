import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { TITLE } from "@/Data/Contants";
import { LuRefreshCw } from "react-icons/lu";
import { LuClipboardCopy } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";

const RESET_TOAST_DELAY_MS = 1000;

const GeneratorPage = () => {
  document.title = `Generator | ${TITLE}`;

  const [uuid, setUuid] = useState<string[]>([uuidv4()]);
  const [uuidToGenerate, setUuidToGenerate] = useState<number>(1);

  const toast = useToast();

  const generateNewUuid = useCallback(() => {
    const ids: string[] = [];
    for (let index = 0; index < uuidToGenerate; index++) {
      const id = uuidv4();
      ids.push(id);
    }
    setUuid(ids);
  }, [uuidToGenerate]);

  const copyId = () => {
    const uuidToText = uuid.join(", ");
    window.navigator.clipboard.writeText(uuidToText);
    toast({
      title: "Copied",
      status: "success",
      duration: RESET_TOAST_DELAY_MS,
      position: "bottom-left",
      variant: "subtle",
    });
  };

  const formatIds = () => {
    return uuid.join(",\n");
  };

  useEffect(() => {
    generateNewUuid();
  }, [generateNewUuid]);

  return (
    <Flex gap="12" flexDirection={"column"} justifyItems={"center"} alignItems={"center"} pb={12} px={2}>
      <Flex flexDirection={"row"} width={"full"} gap="2" justifyContent={"center"}>
        <Box maxWidth={"24"}>
          <NumberInput defaultValue={1} min={1} onChange={(value) => setUuidToGenerate(Number(value))}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <IconButton
          icon={<LuRefreshCw />}
          aria-label="Generate new uuid"
          variant="solid"
          title={"Generate new uuid"}
          onClick={generateNewUuid}
        />
        <IconButton icon={<LuClipboardCopy />} aria-label="Copy uuid" variant="solid" title="Copy new uuid" onClick={copyId} />
      </Flex>
      <Textarea value={formatIds()} maxWidth={"lg"} />
    </Flex>
  );
};

export default GeneratorPage;
