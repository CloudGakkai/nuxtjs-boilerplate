import { CharacterApi } from "~/services/api/characters";

// Types
import type { Character } from "~/services/api/characters/types";

export const useCharacterStore = defineStore("characterStore", () => {
  const { $api } = useNuxtApp();
  const fetching = ref(false);
  const error = ref<any>(null);
  const data = ref<Character[]>([]);

  const getCharacters = async (params?: Record<string, any>) => {
    fetching.value = true;
    const characterApi = new CharacterApi($api);
    const result = await characterApi.getCharacters(params);

    console.log("result =>", result);

    if (result.kind === "ok") {
      data.value = result.data;
      fetching.value = false;
      error.value = null;
    } else {
      error.value = result.kind;
      data.value = [];
      fetching.value = false;
    }
  };

  return {
    fetching,
    error,
    data,
    getCharacters,
  };
});
