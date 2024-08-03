import { useForm, SubmitHandler } from "react-hook-form"
import { FormFieldSchema, FormFieldType } from "../../schemas/FormFieldsSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import useJob from "../../hooks/useJob";
import useUpdateJob from "../../hooks/useUpdateJob";
import { toast } from "react-toastify";

export default function EditJob() {

  const { id } = useParams();

  const { data: job } = useJob(id as string);

  const navigate = useNavigate();

  const updateJobMutation = useUpdateJob();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFieldType>(
    {
      defaultValues: {
        company: job?.company,
        type: job?.type,
        description: job?.description,
        location: job?.location,
        salary: job?.salary,
        title: job?.title
      },
      resolver: zodResolver(FormFieldSchema)
    },

  );

  const onSubmit: SubmitHandler<FormFieldType> = (data) => {
    try {
      updateJobMutation.mutate({ job: data, id: id as string }, {
        onSuccess: () => {
          toast("Job have been sucessfully updated");
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
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-center font-semibold mb-6">Edit Job</h2>

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

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company.name"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                {...register("company.name")}
                type="text"
                id="company"
                name="company.name"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
              {errors.company?.name && (<div className="text-red-500">{errors.company.name.message}</div>)}
            </div>

            <div className="mb-4">
              <label
                htmlFor="company.description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                {...register("company.description")}
                id="company.description"
                name="company.description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="What does your company do?"
              ></textarea>
              {errors.company?.description && (<div className="text-red-500">{errors.company.description.message}</div>)}
            </div>

            <div className="mb-4">
              <label
                htmlFor="company.contactEmail"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                {...register("company.contactEmail")}
                type="text"
                id="company.contactEmail"
                name="company.contactEmail"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"

              />
              {errors.company?.contactEmail && (<div className="text-red-500">{errors.company.contactEmail.message}</div>)}
            </div>
            <div className="mb-4">
              <label
                htmlFor="company.contactPhone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                {...register("company.contactPhone")}
                type="tel"
                id="company.contactPhone"
                name="company.contactPhone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
              />
              {errors.company?.contactPhone && (<div className="text-red-500">{errors.company.contactPhone.message}</div>)}
            </div>

            <div>
              <button
                className={clsx(
                  "transition ease-in-out duration-150 rounded-xl px-4 py-2 w-full",
                  updateJobMutation.isPending
                    ? "disabled:cursor-not-allowed bg-slate-500"
                    : "bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4]"
                )}
                // className="transition ease-in-out duration-150 rounded-xl px-4 py-2 w-full bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4]"
                type="submit"
                disabled={updateJobMutation.isPending ? true : false}
              >
                Edit Job
              </button>
              {errors.root && (<div className="text-red-500">{errors.root.message}</div>)}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
