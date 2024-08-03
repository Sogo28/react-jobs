import { create } from "zustand";

export type GetJobsfilters = {
  limit: string;
}

type JobStore = {
  filters?: GetJobsfilters,
  setFilters: (filters?: GetJobsfilters) => void
}

export const useJobStore = create<JobStore>((set) => ({
  filters: undefined,
  setFilters: (filters) => set((state) => ({ filters }))
}));