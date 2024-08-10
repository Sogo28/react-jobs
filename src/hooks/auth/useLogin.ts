import { login } from "../../services/api/AuthApi";
import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import { LoginFormFieldsType } from "../../schemas/LoginFormFieldsSchema";
export default function useLogin(): UseMutationResult<string, Error, LoginFormFieldsType> {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
  })

}
