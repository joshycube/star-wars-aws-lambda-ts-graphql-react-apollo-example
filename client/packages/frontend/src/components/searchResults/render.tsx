import React from "react";
import { FormattedMessage } from "react-intl";

import { DispatchCharacter, Character } from "@swweight/shared/types/Character";

import * as Styled from "./styles";
import Button from "../button";
import Typography from "../typography";

interface Props {
  results: Character[];
  dispatchCharacter: DispatchCharacter;
}

function SearchResults({ results, dispatchCharacter }: Props) {
  return (
    <Styled.Wrapper>
      <Styled.Results data-test-id="results-wrapper">
        {!!results.length &&
          results.map((result: Character) => (
            <Styled.ResultItem key={result.id}>
              <Styled.ResultText>
                <Typography>{result.name}</Typography>
              </Styled.ResultText>
              <Button
                testid="add-item"
                variant="secondary"
                onClick={() =>
                  dispatchCharacter({
                    type: "add",
                    payload: result,
                  })
                }
              >
                <Typography>
                  <FormattedMessage id="add" />
                </Typography>
              </Button>
            </Styled.ResultItem>
          ))}
      </Styled.Results>
    </Styled.Wrapper>
  );
}

export default SearchResults;
