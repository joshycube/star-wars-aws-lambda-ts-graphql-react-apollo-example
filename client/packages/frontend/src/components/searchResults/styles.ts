import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Results = styled.ul`
  list-style-type: "";
  margin: 0;
  padding: ${(props) => `${props.theme.paddings.medium}`};
`;

export const ResultItem = styled.li`
  display: flex;
  padding: ${(props) => `${props.theme.paddings.small}`};
  justify-content: space-between;
`;

export const ResultText = styled.p`
  padding-right: ${(props) => `${props.theme.paddings.small}`};
`;
