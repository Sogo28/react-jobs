import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ScrollRestoration } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

export default function MainLayout() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
      <ScrollRestoration />
      <ToastContainer />
    </>
  )
}
