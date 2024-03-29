import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

export const enum ThemeScheme {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

const config: ThemeConfig = {
  initialColorMode: ThemeScheme.DARK,
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "black" : undefined,
      },
    }),
  },
});

export default theme;
