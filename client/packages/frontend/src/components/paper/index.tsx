import React from "react";

import * as Styled from "./styles";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Paper({ children }: Props) {
  return <Styled.StyledPaper>{children}</Styled.StyledPaper>;
}

export default Paper;
