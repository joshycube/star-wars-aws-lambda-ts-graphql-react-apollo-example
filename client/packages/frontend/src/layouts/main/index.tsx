import React from "react";

import * as Styled from "./styles";

interface Props {
  children: JSX.Element;
}

function MainLayout({ children }: Props) {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
}

export default MainLayout;
