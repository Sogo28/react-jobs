import { useQuery } from "@tanstack/react-query";
import { fetchJobById } from "../../services/api/JobApi";

export default function useJob(id: string) {

  return useQuery({
    queryFn: async () => {
      try {
        const job = await fetchJobById(id as string)
        return job;
      } catch (error: any) {
        if (error.response.status === 404) {
          return null
        }
        throw error;
      }
    },
    queryKey: [`job`, id],
    refetchOnWindowFocus: false,
  }
  )
}
