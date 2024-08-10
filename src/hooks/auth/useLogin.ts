import { login } from "../../services/api/AuthApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { LoginFormFieldsType } from "../../schemas/LoginFormFieldsSchema";
export default function useLogin(): UseMutationResult<string, Error, LoginFormFieldsType> {

  return useMutation({
    mutationFn: login,
  })

}
