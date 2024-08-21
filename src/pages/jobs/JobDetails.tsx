import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useJob from "../../hooks/jobs/useJob";
import useDeleteJob from "../../hooks/jobs/useDeleteJob";
import JobDetailsSkeleton from "../../components/skeletons/JobDetailsSkeleton";
import NotFound from "../NotFound";
import { toast } from "react-toastify";

export default function JobDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: job, isLoading, error } = useJob(id as string);
  const deleteJobMutation = useDeleteJob();

  const onDeleteJobClick = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirm) return;
    await deleteJobMutation.mutateAsync(id, {
      onSuccess: () => {
        toast.success(
          "Job have been sucessfully deleted",
          {
            autoClose: 5000
          }
        );
        navigate('/jobs');
      }
    })
  }


  if (isLoading) return <JobDetailsSkeleton />

  if (!job) return <NotFound />

  return (
    <section className="p-4 my-20">
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="flex flex-col lg:w-3/4 gap-6">
          <div className="bg-white rounded-lg flex flex-col gap-4 pl-4 py-4 shadow-lg">
            <h3 className="text-lg italic ">
              {job?.type}
            </h3>
            <h1 className="text-2xl sm:text-3xl font-bold">{job?.title}</h1>
            <div className="flex text-left text-lg gap-2 items-baseline text-red-600 border-b-slate-200">
              <p className="">{job?.location}</p>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-lg gap-3 pl-4 py-4 shadow-lg">
            <p className="text-left text-indigo-600 font-bold border-b-slate-200">
              Job Description
            </p>
            <p className="">{job?.description}</p>
            <p className="text-left text-indigo-600 font-bold border-b-slate-200">
              Salary
            </p>
            <p>{job?.salary} / Year</p>
          </div>
        </div>
        {/* <div className="flex flex-col lg:w-1/4 gap-6">
          <div className="bg-white p-8 flex flex-col gap-4 shadow-lg">
            <p className="font-bold text-xl">Company Info</p>
            <p className="text-2xl font-medium">{job?.company.name} </p>
            <p className="border-b-slate-200 border-b-2 pb-2">
              {job?.company.description}
            </p>
            <div className="flex flex-col">
              <p className="text-2xl font-medium">Contact Email :</p>
              <div className="p-2 md:text-[16px] bg-indigo-100 font-bold">
                {job?.company.contactEmail}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-medium">Contact Phone :</p>
              <div className="p-2 md:text-[16px] bg-indigo-100 font-bold">
                {job?.company.contactPhone}
              </div>
            </div>
          </div>
          <div className="bg-white p-8 flex flex-col gap-4 shadow-lg">
            <p className="font-bold text-xl">Manage Job</p>
            <NavLink
              className={"px-4 py-2 sm:px-4 sm:py-2 font-bold rounded-lg bg-blue-500 w-40 text-white text-center"}
              to={`/jobs/${job?.id}/edit`}>
              Edit Job
            </NavLink>
            <button
              className="px-4 py-2 sm:px-4 sm:py-2 font-bold rounded-lg bg-red-500 w-40 text-white"
              onClick={() => {
                onDeleteJobClick(id as string);
              }}
            >
              Delete Job
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}
