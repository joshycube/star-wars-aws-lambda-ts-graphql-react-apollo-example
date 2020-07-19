import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${(props) => `${props.theme.paddings.large}`};
  border: 1px solid ${(props) => `${props.theme.colors.monaLisa}`};
  color: ${(props) => `${props.theme.colors.monaLisa}`};
  font-weight: ${(props) => `${props.theme.misc.bold}`};
`;
