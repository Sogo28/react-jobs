import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteJob } from "../services/api/JobApi";
import { Jobtype } from "../schemas/JobSchemas";

export default function useDeleteJob() {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteJob,
    onMutate: async (id) => {

      await queryClient.cancelQueries({ queryKey: ['jobs'] });
      await queryClient.cancelQueries({ queryKey: ['job', id], exact: true });

      const previousJobs = queryClient.getQueryData(['jobs']);

      queryClient.setQueryData(['jobs'], (old: Jobtype[]) =>
        old ? old.filter((job) => job.id !== id) : []
      );

      return { previousJobs };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['jobs'], context?.previousJobs);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    }
  })
}
