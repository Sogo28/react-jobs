import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import JobCard from "../../components/JobCard";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../state/AuthStore";
import useOffers from "../../hooks/employer/useOffers";

export default function TestingZone() {



  return (
    <div className="h-screen w-full overflow-hidden">


      <div className="h-full flex flex-row">


        {/* <div className="w-full overflow-auto p-8">
          <div className="flex flex-col">
            <h2 className="text-2xl text-white mb-4">My job offers</h2>
            {jobs?.map((job) => (
              <JobCard key={job.id}
                title={job.title}
                description={job.description}
                mode={job.type}
                location={job.location}
                link={`/jobs/${job.id}`}
                salary={job.salary} />
            ))}
          </div>

        </div> */}
      </div>
    </div>
  )
}
