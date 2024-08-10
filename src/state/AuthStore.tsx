import { create } from "zustand";
import { UserType } from "../schemas/UserSchema";

type AuthStore = {
  token: string;
  user: UserType | undefined;
  setToken: (token: string) => void
}

export const useAuthStore = create<AuthStore>((set) =>
({
  token: "",
  user: undefined,

  setToken: (token: string) => set((state) => ({ token })),
  setUser: (user: UserType) => set((state) => ({ user }))
})
)