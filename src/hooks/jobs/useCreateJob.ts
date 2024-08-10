import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createJob } from "../../services/api/JobApi";

export const useCreateJob = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    }
  })
}