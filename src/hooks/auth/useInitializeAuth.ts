import { useEffect } from "react";
import { useAuthStore } from "../../state/AuthStore";
import axiosInstance from "../../services/api/AxiosConfig";

const useInitializeAuth = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const response = await axiosInstance.get("/api/auth/check-auth");
          setAuth(true);
          setUser(response.data.user);
        } catch (error) {
          setAuth(false);
          console.error("Error initializing authentication:", error);
        }
      }
    };

    initializeAuth();
  }, []);
};

export default useInitializeAuth;
