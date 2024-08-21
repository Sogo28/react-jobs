import { create } from "zustand";

type AuthStore = {
  token: string;
  user: { id: string } | undefined;
  isAuthenticated: boolean;
  setAuth: (isAuthenticated: boolean) => void;
  setToken: (token: string) => void,
  setUser: (user: { id: string }) => void,
  clearUser: () => void,
}

export const useAuthStore = create<AuthStore>((set) =>
({
  token: "",
  user: undefined,
  isAuthenticated: false,
  setAuth: (isAuthenticated) => set({ isAuthenticated }),
  setToken: (token: string) => set((state) => ({ token })),
  setUser: (user: { id: string }) => set((state) => ({ user })),
  clearUser: () => set((state) => ({ user: undefined }))
})
)