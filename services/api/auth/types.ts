import type { GeneralApiProblem } from "../api-problem";
import type { UserSession } from "~/stores/useSessionStore";

export interface LoginPayload {
  identity: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone_number: string;
  date_of_birth: string;
  gender: string;
  country: string;
}

export interface RegisterResponse {
  user: {
    email: string;
    username: string;
    created_at: string;
    updated_at: string;
    id: number;
  };
  profile: {
    user_id: number;
    name: string;
    phone_number: string;
    date_of_birth: string;
    gender: string;
    country: string;
    created_at: string;
    updated_at: string;
    id: 1;
  };
  token: UserSession;
}

export type DoLoginResult =
  | { kind: "ok"; data: UserSession }
  | GeneralApiProblem;

export type DoRegisterResult =
  | { kind: "ok"; data: RegisterResponse }
  | GeneralApiProblem;
