import logo_dark from "../assets/logo_dark.svg";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../state/AuthStore";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {

  const user = useAuthStore((state) => state.user);

  return (

    <div className="flex flex-row px-4 md:px-40 mt-2 py-4 w-full top-0 left-0 absolute justify-between">
      <img src={logo_dark} alt="react logo" height={40} width={40} />

      <details className="dropdown ">
        <summary className="btn m-1 border-none text-white"> <CgProfile className="h-7 w-7" /> <IoIosArrowDown /></summary>
        <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-white">
          <li><NavLink to="/logout">
            Logout
          </NavLink></li>
        </ul>
      </details>



    </div>
  )
}
