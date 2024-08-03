import JobCard from "./JobCard"
// import { useJobStore } from "../state/JobStore"
import JobListingSkeleton from "./skeletons/JobListingSkeleton";
import useJobs from "../hooks/useJobs";


export default function JobListing({ isHome = false }) {

  // const filters = useJobStore((state) => state.filters);
  const { data: jobs, isLoading } = useJobs();

  const renderedJobs = isHome ? jobs?.slice(0, 3) : jobs

  if (isLoading) return <JobListingSkeleton />

  return (
    <section className="flex flex-col justify-between items-center md:px-40 mb-20 mt-20">
      <div className="flex flex-col gap-12 xl:grid xl:grid-cols-3">
        {renderedJobs?.map((job) => (
          <JobCard key={job.id}
            title={job.title}
            description={job.description}
            mode={job.type}
            location={job.location}
            link={`/jobs/${job.id}`}
            salary={job.salary} />
        ))}
      </div>

    </section>
  )
}
