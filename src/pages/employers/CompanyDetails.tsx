import SideNav from "../../components/employersUI/SideNav";
import { Navbar } from "../../components/employersUI/NavBar";
import useCompany from "../../hooks/employer/useCompany";
import { useAuthStore } from "../../state/AuthStore";
import { NavLink } from "react-router-dom";

export default function CompanyDetails() {

  const user = useAuthStore((state) => (state.user));
  const { data: company, isLoading } = useCompany(user?.id as string)


  return (
    <div className="h-screen w-full overflow-hidden">
      <Navbar />

      <div className="h-full flex flex-row">
        <SideNav />

        <div className="w-full overflow-auto p-8 mb-12 flex flex-col gap-4">
          {
            isLoading
              ? <h2 className="text-lg text-white">Loading company Infos...</h2>
              : company
                ? <div className="flex flex-col w-full">
                  <div className="bg-white p-8 flex flex-col gap-4 shadow-lg">
                    <p className="font-bold text-xl">Company Info</p>
                    <p className="text-2xl font-medium">{company?.name} </p>
                    <p className="border-b-slate-200 border-b-2 pb-2">
                      {company?.description}
                    </p>
                    <div className="flex flex-col">
                      <p className="text-2xl font-medium">Contact Email :</p>
                      <div className="p-2 md:text-[16px] bg-indigo-100 font-bold">
                        {company?.contactEmail}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-2xl font-medium">Contact Phone :</p>
                      <div className="p-2 md:text-[16px] bg-indigo-100 font-bold">
                        {company?.contactPhone}
                      </div>
                    </div>
                  </div>
                </div>
                : <div className="flex justify-between items-center">
                  <h2 className="text-white text-lg">No company infos</h2>

                  <NavLink to="/add-company" className="transition ease-in-out duration-150 rounded-xl px-4 py-2 w-fit bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4] self-end">Add your company Infos</NavLink>
                </div>
          }
        </div>

      </div>

    </div>
  )
}
