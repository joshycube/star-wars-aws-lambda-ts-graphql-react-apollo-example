import React from "react";

import * as Styled from "./styles";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

function Typography({ children }: Props) {
  return <Styled.Typography>{children}</Styled.Typography>;
}

export default Typography;
