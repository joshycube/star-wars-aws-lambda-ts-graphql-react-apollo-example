import React from "react";

import * as Styled from "./styles";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: JSX.Element;
  variant: "primary" | "secondary";
  testid?: string;
}

function Button({ onClick, children, variant = "primary", testid }: Props) {
  return (
    <Styled.StyledButton
      data-test-id={testid}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Styled.StyledButton>
  );
}

export default Button;
