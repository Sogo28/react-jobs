import { useQueryClient, useMutation } from "@tanstack/react-query";
import { editJob } from "../services/api/JobApi";
import { Jobtype } from "../schemas/JobSchemas";
import { FormFieldType } from "../schemas/FormFieldsSchemas";

export default function useUpdateJob() {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ job, id }: { job: FormFieldType, id: string }) => editJob({ job, id }),

    onMutate: async ({ job, id }: { job: FormFieldType, id: string }) => {

      await queryClient.cancelQueries({ queryKey: ['job', id], exact: true });

      const previousJob = queryClient.getQueryData<Jobtype>(['job', id]);

      const previousJobs = queryClient.getQueryData<Jobtype[]>(['jobs']);

      if (previousJob) {
        queryClient.setQueryData<Jobtype>(['job', id], {
          ...previousJob,
          ...job,
        });
      }

      if (previousJobs) {
        queryClient.setQueryData<Jobtype[]>(['jobs'], previousJobs.map(current =>
          current.id === id ? { ...current, ...job } : current
        ));
      }

      return { previousJob, previousJobs };
    },

    onError: (err, { id }, context) => {
      if (context?.previousJob) {
        queryClient.setQueryData(['job', id], context.previousJob);
      }
      if (context?.previousJobs) {
        queryClient.setQueryData(['jobs'], context.previousJobs);
      }
    },

    onSettled: (data, error, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      queryClient.invalidateQueries({ queryKey: ['job', id] });
    },
  })
}
