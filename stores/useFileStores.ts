import { FileApi } from "~/services/api/files";
import { loadString, saveString, remove } from "~/utils/storage";

// Types
import type { File } from "~/services/api/files/types";

export const useFileStore = defineStore("fileStore", () => {
  const { $api } = useNuxtApp();
  const detail = ref<{
    fetching: boolean;
    error: any;
    data?: File;
  }>({
    fetching: false,
    error: null,
    data: undefined,
  });
  const generateToken = ref<{ fetching: boolean }>({
    fetching: false,
  });
  const download = ref<{
    downloadToken: string | null;
    isDownloadStarting: boolean;
    progress: number;
    isComplete: boolean;
  }>({
    downloadToken: null,
    isDownloadStarting: false,
    progress: 0,
    isComplete: false,
  });

  const fileApi = new FileApi($api);

  const getFileDetail = async (uuid: string) => {
    detail.value.fetching = true;
    const result = await fileApi.getFileDetail(uuid);

    if (result.kind === "ok") {
      detail.value.data = result.data;
      detail.value.fetching = false;
      detail.value.error = null;
    } else {
      detail.value.error = result.kind;
      detail.value.data = undefined;
      detail.value.fetching = false;
    }
  };

  const doGenerateDownloadToken = async (uuid: string) => {
    generateToken.value.fetching = true;

    const userToken = await loadString("user.token");
    fileApi.setHeader("x-auth-token", userToken);

    const result = await fileApi.doGenerateDownloadToken(uuid);

    if (result.kind === "ok") {
      download.value.downloadToken = result.data.token;
      generateToken.value.fetching = false;
      fileApi.setHeader("x-download-token", result.data.token);
      await saveString("user.download_token", result.data.token);
    } else {
      download.value.downloadToken = null;
      generateToken.value.fetching = false;
    }
  };

  const downloadFile = async () => {
    const result = await fileApi.downloadFile();

    if (result.kind === "ok") {
      const url = URL.createObjectURL(result.data);
      const a = document.createElement("a");
      a.href = url;
      a.download = result.filename;
      a.click();
      URL.revokeObjectURL(url);
      await remove("user.download_token");
      fileApi.setHeader("x-download-token", null);
    } else {
      await remove("user.download_token");
    }
  };

  return {
    detail,
    getFileDetail,
    doGenerateDownloadToken,
    downloadFile,
  };
});
