import { useForm, SubmitHandler } from "react-hook-form"
import { useCreateJob } from "../../hooks/jobs/useCreateJob";
import { JobFormFieldSchema, JobFormFieldType } from "../../schemas/JobFormFieldsSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { toast } from "react-toastify";
import { useAuthStore } from "../../state/AuthStore";
import Navbar from "../../components/employersUI/NavBar";

export default function AddJob() {

  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user)

  const createJobMutation = useCreateJob();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<JobFormFieldType>(
    {
      resolver: zodResolver(JobFormFieldSchema)
    }
  );

  const onSubmit: SubmitHandler<JobFormFieldType> = (data) => {

    const jobDataWithUserId = {
      ...data,
      userId: user?.id // Add the userId to the job data
    };

    try {
      createJobMutation.mutate(jobDataWithUserId, {
        onSuccess: () => {
          toast("Job have been sucessfully added");
          navigate('/jobs');
        }
      })
    } catch (error) {
      setError("root", {
        message: "Something went wrong !"
      })
    }
  };

  return (
    <section className="">
      <Navbar />
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                {...register("type")}
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"


              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.type && (<div className="text-red-500">{errors.type.message}</div>)}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                {...register("title")}
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
              />
              {errors.title?.message && (<div className="text-red-500">{errors.title?.message}</div>)}
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
              {errors.description && (<div className="text-red-500">{errors.description.message}</div>)}
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                {...register("salary")}
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
              {errors.salary && (<div className="text-red-500">{errors.salary.message}</div>)}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                {...register("location")}
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"

              />
              {errors.location && (<div className="text-red-500">{errors.location.message}</div>)}
            </div>

            <div>
              <button
                className={clsx(
                  "transition ease-in-out duration-150 rounded-xl px-4 py-2 w-full",
                  createJobMutation.isPending
                    ? "disabled:cursor-not-allowed bg-slate-500"
                    : "bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4]"
                )}
                type="submit"
                disabled={createJobMutation.isPending ? true : false}
              >
                Add job
              </button>
              {errors.root && (<div className="text-red-500">{errors.root.message}</div>)}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
