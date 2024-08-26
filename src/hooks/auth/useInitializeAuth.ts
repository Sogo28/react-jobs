import { useEffect } from "react";
import { useAuthStore } from "../../state/AuthStore";
import axiosInstance from "../../services/api/AxiosConfig";

const useInitializeAuth = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("accessToken");
      // Si pas de token, ne pas tenter d'authentification
      if (!token) {
        setAuth(false);
        return;
      }
      try {
        const response = await axiosInstance.get("/api/auth/check-auth");
        setAuth(true);
        setUser(response.data.user);
      } catch (error: any) {
        setAuth(false);
        localStorage.removeItem("accessToken");
      }

    };

    initializeAuth();
  }, []);
};

export default useInitializeAuth;
