import React, { useCallback, useMemo } from "react";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalNavigation, GlobalRouteKey } from "@/Data/RoutesData";
import { SiAboutdotme } from "react-icons/si";

const ToggleGenerator = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const aboutNavigation = useCallback(() => {
    navigate(GlobalNavigation[GlobalRouteKey.GENERATOR].path);
  }, [navigate]);

  const isActive = useMemo(() => pathname === GlobalNavigation[GlobalRouteKey.GENERATOR].path, [pathname]);
  const activeColor = useColorModeValue("gray.300", "gray.800");
  return (
    <IconButton
      icon={<SiAboutdotme />}
      aria-label="Generator"
      variant="ghost"
      rounded="full"
      title={!isActive ? "Generator" : "Aleady at generator"}
      onClick={aboutNavigation}
      bg={isActive ? activeColor : undefined}
    />
  );
};

export default ToggleGenerator;
