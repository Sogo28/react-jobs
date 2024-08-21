import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { logout } from "../../services/api/AuthApi";
import useLogout from "../../hooks/auth/useLogout";
export default function Navbar() {

  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (

    <div className="flex flex-row px-4 md:px-20 py-2 w-full shadow-lg justify-end">
      <details className="dropdown">
        <summary className="btn m-1 border-none text-white"> <CgProfile className="h-7 w-7" /> <IoIosArrowDown /></summary>
        <ul className="menu dropdown-content rounded-box z-[1] w-32 p-2 shadow bg-white">
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </details>
    </div>

  )
}
