import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "@/Config/theme";

import Navigation from "@/Components/Navigation";
import LoadingState from "@/Components/States/LoadingState";
import PageLayoutWrapper from "@/Components/Layouts/PageLayoutWrapper";
import GlobalLayoutWrapper from "./Components/Layouts/GlobalLayoutWrapper";
import { GlobalNavigation, GlobalRouteKey } from "./Data/RoutesData";

const GeneratorPage = React.lazy(() => import("@/Pages/GeneratorPage"));

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <GlobalLayoutWrapper>
            <Navigation />
            <React.Suspense fallback={<LoadingState />}>
              <PageLayoutWrapper>
                <Routes>
                  <Route index element={<Navigate to={GlobalNavigation[GlobalRouteKey.GENERATOR].path} />} />
                  <Route path={GlobalNavigation[GlobalRouteKey.GENERATOR].path} element={<GeneratorPage />} />
                </Routes>
              </PageLayoutWrapper>
            </React.Suspense>
          </GlobalLayoutWrapper>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
