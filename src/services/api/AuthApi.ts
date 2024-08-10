import axios from "axios";
import { LoginFormFieldsType } from "../../schemas/LoginFormFieldsSchema";

export const login = async (data: LoginFormFieldsType): Promise<string> => {

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const response = await axios.post("/api/auth", data, config);
  const token = response.data;
  if (!token) throw new Error("Invalid Email or password");

  return token;

}
