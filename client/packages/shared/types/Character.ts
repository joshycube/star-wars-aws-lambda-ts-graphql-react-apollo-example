export interface CharacterResponse {
  url: string;
  id: string;
  name: string;
  height: number;
  mass: number | "unknown";
}

export interface Character {
  id: string;
  name: string;
  height: number;
  mass: number;
}

export interface CharacterAction {
  type: "add" | "remove";
  payload: Character;
}

export type DispatchCharacter = (action: CharacterAction) => void;
