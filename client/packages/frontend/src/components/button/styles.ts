import styled from "styled-components";

interface Props {
  variant: string;
}

export const StyledButton = styled.button<Props>`
  min-width: 75px;
  padding: ${(props) => `${props.theme.paddings.small}`};
  cursor: pointer;
  border-radius: ${(props) => `${props.theme.misc.borderRadius}`};
  border: 1px solid
    ${(props) => `${props.theme.buttons.variants[props.variant].borderColor}`};
  background-color: ${(props) =>
    `${props.theme.buttons.variants[props.variant].backgroundColor}`};
  color: ${(props) => `${props.theme.buttons.variants[props.variant].color}`};
  font-weight: ${(props) =>
    `${props.theme.buttons.variants[props.variant].fontWeight}`};
`;
