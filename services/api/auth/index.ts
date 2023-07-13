import { ApiResponse } from "apisauce";
import { getGeneralApiProblem } from "../api-problem";

// Types
import type { ApisauceInstance } from "apisauce";
import type {
  DoLoginResult,
  DoRegisterResult,
  LoginPayload,
  RegisterPayload,
} from "./types";

export class AuthApi {
  private api: ApisauceInstance;

  constructor(api: ApisauceInstance) {
    this.api = api;
  }

  async doLogin(payload: LoginPayload): Promise<DoLoginResult> {
    try {
      const response: ApiResponse<any> = await this.api.post(
        `users/v1/auth/login`,
        payload
      );

      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      return {
        kind: "ok",
        data: response.data.data,
      };
    } catch {
      return { kind: "bad-data" };
    }
  }

  async doRegister(payload: RegisterPayload): Promise<DoRegisterResult> {
    try {
      const response: ApiResponse<any> = await this.api.post(
        `users/v1/auth/register`,
        payload
      );

      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      return {
        kind: "ok",
        data: response.data.data,
      };
    } catch {
      return { kind: "bad-data" };
    }
  }
}
