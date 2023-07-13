import { AuthApi } from "~/services/api/auth";
import { useSessionStore } from "./useSessionStore";

// Types
import type { UserSession } from "./useSessionStore";
import type {
  LoginPayload,
  RegisterPayload,
  RegisterResponse,
} from "~/services/api/auth/types";

interface AuthState {
  fetching: boolean;
  data: UserSession | null;
  error: string;
}

interface RegisterState {
  fetching: boolean;
  data: RegisterResponse | null;
  error: string;
}

export const useAuthStore = defineStore("userAuthStore", () => {
  const { $api } = useNuxtApp();
  const sessionStore = useSessionStore();

  const authState = ref<AuthState>({
    fetching: false,
    data: null,
    error: "",
  });

  const registerState = ref<RegisterState>({
    fetching: false,
    data: null,
    error: "",
  });

  const authApi = new AuthApi($api);

  const doLogin = async (payload: LoginPayload, onSuccess?: () => void) => {
    authState.value.fetching = true;
    const result = await authApi.doLogin(payload);

    if (result.kind === "ok") {
      authState.value.data = result.data;
      authState.value.fetching = false;
      authState.value.error = "";
      sessionStore.setSession(result.data);
      onSuccess?.();
    } else {
      authState.value.error = result.kind;
      authState.value.data = null;
      authState.value.fetching = false;
    }
  };

  const doRegister = async (
    payload: RegisterPayload,
    onSuccess?: () => void
  ) => {
    registerState.value.fetching = true;
    const result = await authApi.doRegister(payload);

    if (result.kind === "ok") {
      registerState.value.data = result.data;
      registerState.value.fetching = false;
      registerState.value.error = "";
      sessionStore.setSession(result.data.token);
      onSuccess?.();
    } else {
      registerState.value.error = result.kind;
      registerState.value.data = null;
      registerState.value.fetching = false;
    }
  };

  return {
    authState,
    doLogin,
    doRegister,
  };
});
