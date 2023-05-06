import type { GeneralApiProblem } from "../api-problem";

export enum CharacterStatus {
  alive = "Alive",
  dead = "Dead",
  unknown = "unknown",
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type GetCharactersResult =
  | { kind: "ok"; data: Character[] }
  | GeneralApiProblem;
