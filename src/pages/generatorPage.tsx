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
import { LOCAL_STORAGE_WITH_BLOCK_COPY, LOCAL_STORAGE_WITH_QUOTES, TITLE } from "@/data/contants";
import { LuRefreshCw } from "react-icons/lu";
import { LuClipboardCopy } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";
import SettingsDrawer from "@/components/settingsDrawer";
import useLocalStorage from "@/hooks/useLocalStorage";
import { generateIds, copyToClipboard, handleWithQuotes, handleWithBlockCopy, handleArrayToString } from "@/utils";

const RESET_TOAST_DELAY_MS = 1000;

const GeneratorPage = () => {
  document.title = `Generator | ${TITLE}`;

  const [uuid, setUuid] = useState<string[]>([uuidv4()]);

  const [withQuotesStorage] = useLocalStorage<boolean | null>(LOCAL_STORAGE_WITH_QUOTES, true);
  const [WithBlockCopyStorage] = useLocalStorage<boolean | null>(LOCAL_STORAGE_WITH_BLOCK_COPY, true);

  const [withQuotes, setWithQuotes] = useState<boolean>(withQuotesStorage ?? true);
  const [withBlockCopy, setWithBlockCopy] = useState<boolean>(WithBlockCopyStorage ?? true);

  const toast = useToast();

  const copyId = () => {
    try {
      // process
      const withQuotesOrNot = handleWithQuotes(withQuotes, uuid);
      const withBlockCopyOrSingleLine = handleWithBlockCopy(withBlockCopy, withQuotesOrNot);
      const idsToCopy = handleArrayToString(withBlockCopyOrSingleLine);

      // write to clipboard
      const clipboard = copyToClipboard(idsToCopy);
      clipboard
        .then(() => {
          toast({
            title: "Copied",
            status: "success",
            duration: RESET_TOAST_DELAY_MS,
            position: "bottom-left",
            variant: "subtle",
          });
        })
        .catch(() => {
          toast({
            title: "Copy failed",
            status: "error",
            duration: RESET_TOAST_DELAY_MS,
            position: "bottom-left",
            variant: "subtle",
          });
        });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during the copy operation.",
        status: "error",
        duration: RESET_TOAST_DELAY_MS,
        position: "bottom-left",
        variant: "subtle",
      });
    }
  };

  const formatIdsForTextArea = () => {
    return handleWithQuotes(withQuotes, uuid).join(", \n");
  };

  const handleGenerateIds = useCallback((count: number) => {
    const ids = generateIds(count);
    setUuid(ids);
  }, []);

  useEffect(() => {
    handleGenerateIds;
  }, [handleGenerateIds]);

  return (
    <Flex gap="12" flexDirection={"column"} justifyItems={"center"} alignItems={"center"} pb={12} px={2}>
      <Flex flexDirection={"row"} width={"full"} gap="2" justifyContent={"center"}>
        <Box maxWidth={"24"}>
          <NumberInput defaultValue={1} min={1} onChange={(value) => handleGenerateIds(Number(value))}>
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
          onClick={() => handleGenerateIds(1)}
        />
        <IconButton icon={<LuClipboardCopy />} aria-label="Copy uuid" variant="solid" title="Copy uuid" onClick={copyId} />
        <SettingsDrawer setWithQuotes={setWithQuotes} setWithBlockCopy={setWithBlockCopy} />
      </Flex>
      <Textarea value={formatIdsForTextArea()} maxWidth={"lg"} />
    </Flex>
  );
};

export default GeneratorPage;
