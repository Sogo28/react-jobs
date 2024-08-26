import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createCompany } from "../../services/api/JobApi";

export const usecreateCompany = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
    }
  })
}