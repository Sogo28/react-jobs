import axios from "axios";
import axiosInstance from "./AxiosConfig";
import { LoginFormFieldsType } from "../../schemas/LoginFormFieldsSchema";
import { useAuthStore } from "../../state/AuthStore";


export const login = async (data: LoginFormFieldsType): Promise<{ token: string, user: { id: string } }> => {

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const response = await axios.post("/api/auth", data, config);
  const { accessToken: token, user } = response.data
  return { token, user };

}

export const logout = async () => {

  try {
    axiosInstance.post('/api/auth/logout');

    console.log("logged out!");// Assuming you have an endpoint to handle this

  } catch (error) {
    console.error("Logout error:", error);
  }



}