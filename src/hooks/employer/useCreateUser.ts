import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/api/JobApi";

export const useCreateUser = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
    }
  })
}