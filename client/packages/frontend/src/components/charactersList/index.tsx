import React from "react";

import { DispatchCharacter, Character } from "@swweight/shared/types/Character";

import CharactersListRender from "./render";

interface Props {
  dispatchCharacter: DispatchCharacter;
  characters: Character[];
}

function CharactersList({ dispatchCharacter, characters }: Props) {
  return (
    <CharactersListRender
      dispatchCharacter={dispatchCharacter}
      characters={characters}
    />
  );
}

export default CharactersList;
