import React from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "../../themes/default";

export function AppWrapper({ children }: { children: JSX.Element }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}

export default AppWrapper;
