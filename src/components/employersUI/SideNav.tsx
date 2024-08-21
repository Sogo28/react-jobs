import logo_dark from "../../assets/logo_dark.svg";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <div className="h-full w-80 bg-[#1d2027] flex flex-col gap-8 p-4 relative ">
        <div className="flex flex-row gap-2">
          <img src={logo_dark} alt="react logo" height={40} width={40} />
          <div className="flex justify-center items-center text-lg text-white">React Employer</div>
        </div>
        <div className="flex flex-col gap-4">
          <NavLink to="/employer/home" className={({ isActive }) => !isActive ? "text-white p-2 text-xl rounded-lg" : "bg-[#62cff4] rounded p-2 text-xl text-white"}>My Job offers</NavLink>
          <NavLink to="/employer/company" className={({ isActive }) => !isActive ? "text-white p-2 text-xl rounded-lg" : "bg-[#62cff4] rounded p-2 text-xl text-white"}>My Company</NavLink>
        </div>
      </div>
    </>
  )
}
