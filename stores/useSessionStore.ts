// Types
export interface UserSession {
  type: string;
  token: string;
}

export const useSessionStore = defineStore("userSessionStore", () => {
  const session = useCookie("user.session");

  const setSession = (newSession: UserSession) => {
    session.value = newSession.token;
  };

  const clearSession = () => {
    session.value = null;
  };

  return {
    session,
    setSession,
    clearSession,
  };
});
