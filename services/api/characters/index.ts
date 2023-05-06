import { ApiResponse } from "apisauce";
import { getGeneralApiProblem } from "../api-problem";

// Types
import type { ApisauceInstance } from "apisauce";
import type { GetCharactersResult } from "./types";

export class CharacterApi {
  private api: ApisauceInstance;

  constructor(api: ApisauceInstance) {
    this.api = api;
  }

  async getCharacters(
    params?: Record<string, any>
  ): Promise<GetCharactersResult> {
    try {
      const response: ApiResponse<any> = await this.api.get(
        "character",
        params
      );

      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      return {
        kind: "ok",
        data: response.data.results,
      };
    } catch {
      return { kind: "bad-data" };
    }
  }
}
