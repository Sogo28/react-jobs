import useOffers from "../../hooks/employer/useOffers"
import { useAuthStore } from "../../state/AuthStore"
import JobCard from "../../components/JobCard";
import { NavLink } from "react-router-dom";
import SideNav from "../../components/employersUI/SideNav";
import Navbar from "../../components/employersUI/NavBar";
import JobCardSkeleton from "../../components/skeletons/JobCardSkeleton";

export function Home() {
  const user = useAuthStore((state) => (state.user));
  const { data: jobs, isLoading } = useOffers(user?.id as string)

  return (
    <div className="h-screen w-full overflow-hidden">
      <Navbar />

      <div className="h-full flex flex-row">
        <SideNav />

        <div className="w-full overflow-auto p-8 mb-12 flex flex-col gap-4">
          <NavLink to="/add-job" className="transition ease-in-out duration-150 rounded-xl px-4 py-2 w-fit bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4] self-end">Post an offer</NavLink>
          {isLoading
            ? <>
              <JobCardSkeleton />
              <JobCardSkeleton />
              <JobCardSkeleton />
              <JobCardSkeleton />
            </>
            : !jobs?.length
              ? <h1 className="text-2xl text-white ">No offers</h1>
              : <div className="flex flex-col">
                <h2 className="text-2xl text-white mb-4">My job offers</h2>
                {jobs.map((job) => (
                  <JobCard key={job.id}
                    title={job.title}
                    description={job.description}
                    mode={job.type}
                    location={job.location}
                    link={`/jobs/${job.id}`}
                    salary={job.salary} />
                ))}
              </div>
          }
        </div>

      </div>

    </div>

  )
}
