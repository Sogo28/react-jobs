import { useQuery } from "@tanstack/react-query";
import { fetchJobsByEmployer } from "../../services/api/JobApi";

export default function useOffers(employerId: string) {

  return useQuery({
    queryFn: async () => {
      try {
        const jobs = await fetchJobsByEmployer(employerId)
        return jobs;
      } catch (error) {
        console.log(error)
        return [];
      }
    },
    queryKey: ["jobs", employerId]
  })

}