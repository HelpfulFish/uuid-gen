import React, { useCallback } from "react";
import { IconButton } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

const ToggleGitHub = () => {
  const gitHubNavigation = useCallback(() => {
    const url = "https://github.com/HelpfulFish/uuid-gen";
    window.open(url, "_blank");
  }, []);

  return (
    <IconButton
      icon={<BsGithub />}
      aria-label="GitHub"
      variant="ghost"
      rounded="full"
      title="View project on GitHub"
      onClick={gitHubNavigation}
    />
  );
};

export default ToggleGitHub;
