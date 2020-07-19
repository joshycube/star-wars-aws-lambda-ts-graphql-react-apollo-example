import React from "react";

import * as Styled from "./styles";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  testid?: string;
}

function TextInput({ onChange, placeholder, testid }: Props) {
  return (
    <Styled.TextInput
      data-test-id={testid}
      placeholder={placeholder}
      type="text"
      onChange={onChange}
    />
  );
}

export default TextInput;
