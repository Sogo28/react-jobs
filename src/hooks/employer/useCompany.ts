import { useQuery } from "@tanstack/react-query";
import { fetchCompanyByEmployer } from "../../services/api/JobApi";

export default function useCompany(employerId: string) {

  return useQuery({
    queryFn: async () => {
      try {
        const company = await fetchCompanyByEmployer(employerId)
        return company;
      } catch (error) {
        return null;
      }
    },
    queryKey: ["company", employerId]
  })

}