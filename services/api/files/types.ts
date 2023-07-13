import type { GeneralApiProblem } from "../api-problem";

export interface File {
  id: number;
  file_name: string;
  file_path: string;
  content_type: string;
  file_size: number;
  created_at: string;
  updated_at: string;
  uuid: string;
}

export interface DownloadToken {
  type: string;
  token: string;
}

export type GetFileDetailResult =
  | { kind: "ok"; data: File }
  | GeneralApiProblem;

export type DoGenerateDownloadTokenResult =
  | { kind: "ok"; data: DownloadToken }
  | GeneralApiProblem;
