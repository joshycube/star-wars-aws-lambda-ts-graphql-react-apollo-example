import gql from "graphql-tag";

export const CHARACTER_QUERY = gql`
  query getCharacter($name: String!) {
    character(name: $name) {
      id
      name
      mass
      height
    }
  }
`;
