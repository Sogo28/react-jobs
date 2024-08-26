import { useForm, SubmitHandler } from "react-hook-form";
import { CompanyFormFieldsSchema, CompanyFormFieldsType } from "../../schemas/CompanyFormFieldsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../state/AuthStore";
import { usecreateCompany } from "../../hooks/employer/useCreateCompany";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/employersUI/NavBar";
import clsx from "clsx";

export default function AddCompany() {

  const user = useAuthStore((state) => state.user);
  const createCompanyMutation = usecreateCompany();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }, } = useForm<CompanyFormFieldsType>(
      {
        resolver: zodResolver(CompanyFormFieldsSchema)
      }
    );

  const onSubmit: SubmitHandler<CompanyFormFieldsType> = (data) => {
    const companyDataWithUserId = {
      ...data,
      userId: user?.id // Add the userId to the job data
    };

    try {
      createCompanyMutation.mutate(companyDataWithUserId, {
        onSuccess: () => {
          toast("Company Infos have been sucessfully added");
          navigate('/employer/company');
        }
      })
    } catch (error) {
      setError("root", {
        message: "Something went wrong !"
      })
    }
  }
  return (
    <section>
      <Navbar />
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Company</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Your company Name"
              />
              {errors.name?.message && (<div className="text-red-500">{errors.name?.message}</div>)}
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
              <label className="block text-gray-700 font-bold mb-2">
                Company Location
              </label>
              <input
                {...register("location")}
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Your company location"
              />
              {errors.location?.message && (<div className="text-red-500">{errors.location?.message}</div>)}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Email
              </label>
              <input
                {...register("contactEmail")}
                type="text"
                id="contactEmail"
                name="contactEmail"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="companycontactemail@email.com"
              />
              {errors.contactEmail?.message && (<div className="text-red-500">{errors.contactEmail?.message}</div>)}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Phone
              </label>
              <input
                {...register("contactPhone")}
                type="text"
                id="contactPhone"
                name="contactPhone"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="123-456-789"
              />
              {errors.contactPhone?.message && (<div className="text-red-500">{errors.contactPhone?.message}</div>)}
            </div>

            <div>
              <button
                className={clsx(
                  "transition ease-in-out duration-150 rounded-xl px-4 py-2 w-full",
                  createCompanyMutation.isPending
                    ? "disabled:cursor-not-allowed bg-slate-500"
                    : "bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4]"
                )}
                type="submit"
                disabled={createCompanyMutation.isPending ? true : false}
              >
                Add company
              </button>
              {errors.root && (<div className="text-red-500">{errors.root.message}</div>)}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
