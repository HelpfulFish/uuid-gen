import React from "react";
import { createRoot } from "react-dom/client";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "@/Config/theme";

import Navigation from "@/Components/Navigation";
import PageLayoutWrapper from "@/Components/Layouts/PageLayoutWrapper";
import GlobalLayoutWrapper from "@/Components/Layouts/GlobalLayoutWrapper";

const GeneratorPage = React.lazy(() => import("@/Pages/GeneratorPage"));

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
