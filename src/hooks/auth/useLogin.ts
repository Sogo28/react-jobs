import { login } from "../../services/api/AuthApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { LoginFormFieldsType } from "../../schemas/LoginFormFieldsSchema";

type LoginResult = {
  token: string;
  user: {
    id: string
  };
}
export default function useLogin(): UseMutationResult<LoginResult, Error, LoginFormFieldsType> {

  return useMutation({
    mutationFn: login,

  })

}
