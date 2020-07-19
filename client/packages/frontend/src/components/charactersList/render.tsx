import React from "react";

import { DispatchCharacter, Character } from "@swweight/shared/types/Character";

import * as Styled from "./styles";
import Button from "../button";
import Typography from "../typography";

interface Props {
  dispatchCharacter: DispatchCharacter;
  characters: Character[];
}

function CharactersListRender({ dispatchCharacter, characters }: Props) {
  return (
    <Styled.Results data-test-id="characters-wrapper">
      {characters.map((character: Character) => (
        <Styled.ResultItem key={character.id}>
          <Button
            testid="remove-item"
            variant="secondary"
            onClick={() =>
              dispatchCharacter({
                type: "remove",
                payload: character,
              })
            }
          >
            <Styled.ResultText>
              <Typography>{`${character.name} - (X)`}</Typography>
            </Styled.ResultText>
          </Button>
        </Styled.ResultItem>
      ))}
    </Styled.Results>
  );
}

export default CharactersListRender;
