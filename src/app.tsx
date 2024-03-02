import React from "react";
import { createRoot } from "react-dom/client";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "@/config/theme";

import Navigation from "@/components/navigation";
import PageLayoutWrapper from "@/components/layouts/PageLayoutWrapper";
import GlobalLayoutWrapper from "@/components/layouts/GlobalLayoutWrapper";

const GeneratorPage = React.lazy(() => import("@/pages/generatorPage"));

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <GlobalLayoutWrapper>
        <Navigation />
        <PageLayoutWrapper>
          <GeneratorPage />
        </PageLayoutWrapper>
      </GlobalLayoutWrapper>
    </ChakraProvider>
  );
};

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
