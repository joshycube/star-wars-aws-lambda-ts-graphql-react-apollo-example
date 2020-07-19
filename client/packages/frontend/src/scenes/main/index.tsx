import React from "react";

import { Character, CharacterAction } from "@swweight/shared/types/Character";

import * as Styled from "./styles";
import MainLayout from "../../layouts/main";
import SearchWidget from "../../components/searchWidget";
import CharactersList from "../../components/charactersList";
import CharacterChart from "../../components/characterChart";
import Paper from "../../components/paper";

function reducer(state: Character[], action: CharacterAction): Character[] {
  switch (action.type) {
    case "add":
      const isAdded = state.some(
        (item: Character) => item.id === action.payload.id
      );
      return isAdded ? state : [...state, action.payload];
    case "remove":
      return state.filter((character) => character.id !== action.payload.id);
    default:
      throw new Error();
  }
}

function MainScene() {
  const [state, dispatch] = React.useReducer(reducer, []);

  return (
    <MainLayout>
      <Styled.Wrapper>
        <Paper>
          <SearchWidget dispatchCharacter={dispatch} />
        </Paper>
        {!!state.length && (
          <Styled.ResultColumns>
            <Paper>
              <CharacterChart characters={state} />
            </Paper>
            <Paper>
              <CharactersList characters={state} dispatchCharacter={dispatch} />
            </Paper>
          </Styled.ResultColumns>
        )}
      </Styled.Wrapper>
    </MainLayout>
  );
}

export default MainScene;
