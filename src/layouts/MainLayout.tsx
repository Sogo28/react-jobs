import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ScrollRestoration } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useAuthStore } from '../state/AuthStore';
import { Navbar as EmployerNavBar } from '../components/employersUI/NavBar';

import "react-toastify/dist/ReactToastify.css";

export default function MainLayout() {
  const user = useAuthStore((state) => state.user)
  return (
    <>
      <div>
        {
          user
            ? (
              <>
                <EmployerNavBar />
                <Outlet />
              </>
            )
            : (
              <>
                <Navbar></Navbar>
                <Outlet />
              </>
            )
        }
      </div>
      <ScrollRestoration />
      <ToastContainer />
    </>
  )
}
