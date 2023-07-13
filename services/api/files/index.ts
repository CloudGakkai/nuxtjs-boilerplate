import { ApiResponse } from "apisauce";
import { getGeneralApiProblem } from "../api-problem";

// Types
import type { ApisauceInstance } from "apisauce";
import type {
  GetFileDetailResult,
  DoGenerateDownloadTokenResult,
} from "./types";

export class FileApi {
  private api: ApisauceInstance;

  constructor(api: ApisauceInstance) {
    this.api = api;
  }

  public setHeader(key: string, value: string | null) {
    if (!value) {
      this.api.deleteHeader(key);
    } else {
      this.api.setHeader(key, value);
    }
  }

  async getFileDetail(uuid: string): Promise<GetFileDetailResult> {
    try {
      const response: ApiResponse<any> = await this.api.get(
        `public/v1/file/${uuid}`
      );

      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      const modifiedFile = {
        ...response.data.data,
        file_size: Number(response.data.data.file_size),
      };
      delete modifiedFile.user_id;

      return {
        kind: "ok",
        data: modifiedFile,
      };
    } catch {
      return { kind: "bad-data" };
    }
  }

  async doGenerateDownloadToken(
    uuid: string
  ): Promise<DoGenerateDownloadTokenResult> {
    try {
      const response: ApiResponse<any> = await this.api.post(
        `users/v1/file/${uuid}/generate-download`
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

  async downloadFile(): Promise<any> {
    try {
      const response: ApiResponse<any> = await this.api.get(
        "users/v1/file/download/411f4f1a-abe0-4abd-b3c5-9f9cccb07003",
        undefined,
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2ODQ1OTE5NTMsImV4cCI6MTY4NTE5Njc1M30.gNxoqqdjFgQrbFuW0AwNyFV3OBfcAZlPX846Gp1m-to",
            "x-download-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJmaWxlX3V1aWQiOiI0MTFmNGYxYS1hYmUwLTRhYmQtYjNjNS05ZjljY2NiMDcwMDMiLCJpYXQiOjE2ODQ1OTU5MjIsImV4cCI6MTY4NDU5OTUyMn0.nsFaUtMd41WkJO3AqMALuz9kVOBb07ofmP46x0DWgpA",
          },
          responseType: "blob",
          timeout: 0,
        }
      );

      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      return {
        kind: "ok",
        data: response.data,
        filename:
          response.headers!["content-disposition"].split("filename=")[1],
      };
    } catch {
      return { kind: "bad-data" };
    }
  }
}
