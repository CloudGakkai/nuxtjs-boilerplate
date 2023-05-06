import { ApisauceInstance, create } from "apisauce";

export interface ApiConfig {
  url: string;
  timeout: number;
}

export default defineNuxtPlugin((nuxtApp) => {
  const apiConfig = ref<ApiConfig>({
    url: "/api/",
    timeout: 30000, // miliseconds
  });

  const api = ref<ApisauceInstance>(
    create({
      baseURL: apiConfig.value.url,
      timeout: apiConfig.value.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  );

  return {
    provide: {
      api: api.value,
    },
  };
});
