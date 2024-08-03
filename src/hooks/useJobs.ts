import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../services/api/JobApi";

export default function useJobs() {

  return useQuery({
    queryFn: () => fetchJobs(),
    queryKey: ["jobs"],
  })

}
