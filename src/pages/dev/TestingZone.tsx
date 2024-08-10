import logo_dark from "../../assets/logo_dark.svg";
import { useAuthStore } from "../../state/AuthStore";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import JobCard from "../../components/JobCard";

import { NavLink } from "react-router-dom"
import useJobs from "../../hooks/jobs/useJobs";
export default function TestingZone() {
  const { data: jobs, isLoading } = useJobs();
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex flex-row px-4 md:px-20 py-2 w-full shadow-lg justify-end">
        <details className="dropdown">
          <summary className="btn m-1 border-none text-white"> <CgProfile className="h-7 w-7" /> <IoIosArrowDown /></summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-32 p-2 shadow bg-white">
            <li><NavLink to="/logout">
              Logout
            </NavLink></li>
          </ul>
        </details>
      </div>

      <div className="h-full flex flex-row">

        <div className="h-full w-80 bg-[#1d2027] flex flex-col gap-8 p-4 relative ">
          <div className="flex flex-row gap-2">
            <img src={logo_dark} alt="react logo" height={40} width={40} />
            <div className="flex justify-center items-center text-lg text-white">React Employer</div>
          </div>
          <div className="flex flex-col gap-4">
            <NavLink to="/myJobs" className={({ isActive }) => !isActive ? "text-white p-2 text-xl rounded-lg" : "bg-[#62cff4] text-white"}>Jobs</NavLink>
            <NavLink to="/myJobs" className="bg-[#62cff4] rounded p-2 text-xl text-white">My Company</NavLink>
          </div>
        </div >
        <div className="w-full overflow-auto p-8">
          <div className="flex flex-col">
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

        </div>
      </div>
    </div>
  )
}
