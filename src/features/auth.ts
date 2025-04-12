import { persist } from "zustand/middleware";
import { AuthState, LoginResponse, UserI } from "../types/auth.interface";
import { create } from "zustand";
import apiClient from "../config/axios";
import { AxiosError } from "axios";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isFormLoading: false,
      showPassword: false,
      formError: "",
      login: async (username: string, password: string) => {
        set({ isFormLoading: true, formError: "" });
        try {
          const response = await apiClient.post<LoginResponse>("/login", {
            username,
            password,
          });

          const { token, user } = response.data;
          set({ user, token, isFormLoading: false });
        } catch (error) {
          const errorMessage =
            error instanceof AxiosError && error.response?.data.msg
              ? error.response.data.msg
              : "Đăng nhập thất bại!";
          throw new Error(errorMessage);
        }
      },
      logout() {
        set({ user: null, token: null, formError: "", isFormLoading: false });
      },
      checkAuth: async () => {
        const token = localStorage.getItem("auth-storage")
          ? JSON.parse(localStorage.getItem("auth-storage")!).state.token
          : null;
        if (!token) {
          set({ user: null, token: null });
        }
        try {
          const response = await apiClient.get<UserI>("/user");
          const user = response.data;
          set({ user, token });
        } catch {
          set({ user: null, token: null });
        }
      },
      setShowPassword(show) {
        set({ showPassword: show });
      },
      setFormError(error) {
        set({ formError: error });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);
