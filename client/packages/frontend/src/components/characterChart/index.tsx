import React from "react";

import { Character } from "@swweight/shared/types/Character";

import CharacterChartRender from "./render";

interface Props {
  characters: Character[];
}

function CharacterChart({ characters }: Props) {
  return <CharacterChartRender data={characters} />;
}

export default CharacterChart;
