import React from "react";
import { SiAboutdotme } from "react-icons/si";
const ToggleTheme = React.lazy(() => import("@/Components/ToggleTheme"));
const ToggleGenerator = React.lazy(() => import("@/Components/ToggleGenerator"));

export const enum GlobalRouteKey {
  GENERATOR = "GENERATOR",
}

type IRouteKey = {
  [key in GlobalRouteKey]: string;
};

export const GlobalPath: IRouteKey = {
  GENERATOR: "/generator",
};

export type IRoute = {
  path: string;
  name: string;
  key: GlobalRouteKey;
  icon: React.ElementType;
  component: React.LazyExoticComponent<() => JSX.Element> | null;
};

export const GlobalNavigation: Record<GlobalRouteKey, IRoute> = {
  [GlobalRouteKey.GENERATOR]: {
    name: "Generator",
    path: GlobalPath.GENERATOR,
    key: GlobalRouteKey.GENERATOR,
    icon: SiAboutdotme,
    component: ToggleGenerator,
  },
};

export const ActionItems = [{ component: ToggleTheme }];
