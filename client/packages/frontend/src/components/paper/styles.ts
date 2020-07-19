import styled from "styled-components";

export const StyledPaper = styled.div`
  padding: ${(props) => `${props.theme.paddings.large}`};
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1);

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 10px;
    right: 10px;
    border-radius: 100px / 10px;
  }

  &:after {
    right: 10px;
    left: auto;
    transform: skew(8deg) rotate(3deg);
  }
`;
