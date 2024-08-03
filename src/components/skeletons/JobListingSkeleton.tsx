import JobCardSkeleton from "./JobCardSkeleton"

export default function JobListingSkeleton() {
  return (
    <section className="flex flex-col justify-between items-center md:px-40 mb-20 mt-32">
      <div className="flex flex-col gap-12 xl:grid xl:grid-cols-3">
        <JobCardSkeleton />
        <JobCardSkeleton />
        <JobCardSkeleton />
      </div>
    </section >
  )
}
