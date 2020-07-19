import styled from "styled-components";

export const Typography = styled.span`
  font-family: ${(props) => props.theme.fonts.join(", ")};
`;
