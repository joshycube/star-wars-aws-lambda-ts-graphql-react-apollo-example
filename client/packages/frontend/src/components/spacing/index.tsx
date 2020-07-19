import React from "react";

import * as Styled from "./styles";

interface Props {
  children: JSX.Element | JSX.Element[];
  horizontal?: "none" | "small" | "medium" | "large";
  vertical?: "none" | "small" | "medium" | "large";
}

function Spacing({ children, horizontal = "small", vertical = "none" }: Props) {
  return (
    <Styled.Spacing vertical={vertical} horizontal={horizontal}>
      {children}
    </Styled.Spacing>
  );
}

export default Spacing;
