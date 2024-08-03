import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function JobCard({
  title = "provided title",
  description = "provided desc",
  link = "provided link",
  mode = "Remote",
  salary = "$70-$80k / year",
  location = "Bostom, MA",
}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col gap-4 py-8 px-4 mb-4 rounded-lg shadow-lg bg-white">
      <h3 className="text-lg italic">{mode}</h3>
      <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
      <div className="flex flex-col gap-1">
        <p className="text-left">
          {showMore ? description : description.substring(0, 90) + "..."}
        </p>
        <button
          className="text-indigo-600 self-start"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "Show Less" : "Show More..."}
        </button>
      </div>
      <p className="text-left text-indigo-600 font-bold border-b-2 border-b-slate-200">
        {salary}
      </p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex text-left text-lg gap-2 items-baseline text-red-600 border-b-slate-200">
          {/* <FaMapMarker /> */}
          <p className="">{location}</p>
        </div>
        <NavLink to={link} className='transition ease-in-out duration-150 rounded-xl px-4 py-2 w-fit bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4]'>Read more</NavLink>
      </div>
    </div>
  );
}
