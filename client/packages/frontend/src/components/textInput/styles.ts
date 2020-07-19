import styled from "styled-components";

export const TextInput = styled.input`
  padding: ${(props) => `${props.theme.paddings.small}`};
  border-radius: ${(props) => `${props.theme.misc.borderRadius}`};
  border: 1px solid ${(props) => `${props.theme.colors.luckyGrey}`};
`;
