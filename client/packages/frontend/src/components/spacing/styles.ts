import styled from "styled-components";

interface Props {
  vertical: "none" | "small" | "medium" | "large";
  horizontal: "none" | "small" | "medium" | "large";
}

export const Spacing = styled.div<Props>`
  margin-left: ${(props) => `${props.theme.paddings[props.horizontal]}`};
  margin-right: ${(props) => `${props.theme.paddings[props.horizontal]}`};
  margin-top: ${(props) => `${props.theme.paddings[props.vertical]}`};
  margin-bottom: ${(props) => `${props.theme.paddings[props.vertical]}`};
`;
