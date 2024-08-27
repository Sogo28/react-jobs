import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import useLogout from "../../hooks/auth/useLogout";
import { NavLink, useNavigate } from "react-router-dom";
import logo_dark from "../../assets/logo_dark.svg";
import { useAuthStore } from "../../state/AuthStore";

export function Navbar() {

  const logoutMutation = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutMutation.mutate()
    navigate("/");
    localStorage.removeItem("accessToken");
    useAuthStore.getState().clearUser();
  }

  return (

    <div className="flex flex-row px-4 md:px-20 py-2 w-full items-center gap-4 shadow-lg justify-between">
      <NavLink to={"/"}>
        <img src={logo_dark} alt="react logo" height={40} width={40} />
      </NavLink>
      <div className="flex items-center justify-center">
        <NavLink to={"/employer/home"} className={({ isActive }) => (isActive ? "bg-[#62cff4] py-1 px-2 rounded-xl font-medium text-lg" : "text-white font-medium text-lg")}>Home</NavLink>
        <details className="dropdown">
          <summary className="btn m-1 border-none text-white"> <CgProfile className="h-7 w-7" /> <IoIosArrowDown /></summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-32 p-2 shadow bg-white">
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </details>
      </div>
    </div>

  )
}
