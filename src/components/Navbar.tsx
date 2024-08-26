import logo_dark from "../assets/logo_dark.svg";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../state/AuthStore";
import { Navbar as EmployerNavBar } from "./employersUI/NavBar";

export default function Navbar() {

  const user = useAuthStore((state) => state.user);

  const navLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Jobs",
      path: "/jobs"
    },
    {
      title: "Sign in",
      path: "/login"
    }

  ]
  return (

    <div className="flex flex-row px-4 md:px-40 mt-2 py-4 w-full top-0 left-0 absolute justify-between">
      <img src={logo_dark} alt="react logo" height={40} width={40} />
      {
        user
          ? <EmployerNavBar />
          : (<div className="flex flex-row justify-center items-center gap-8">
            {navLinks.map((current) => (
              <NavLink to={current.path} className={({ isActive }) => (isActive ? "bg-[#62cff4] py-1 px-2 rounded-xl font-medium text-lg" : "text-white font-medium text-lg")} key={current.title}>
                {current.title}
              </NavLink>
            ))}
          </div>)
      }

    </div>
  )
}
