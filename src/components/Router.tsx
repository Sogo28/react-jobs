import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import SignIn from "../pages/auth/SignIn";
import Jobs from "../pages/jobs/Jobs";
import JobDetails from "../pages/jobs/JobDetails";
import AddJob from "../pages/jobs/AddJob";
import EditJob from "../pages/jobs/EditJob";
import NotFound from "../pages/NotFound";
import TestingZone from "../pages/dev/TestingZone";
import RequireAuthLayout from "../layouts/RequireAuthLayout";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* User auth */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/" element={<MainLayout />}>

          {/* Home page */}
          <Route path="/" element={<Home />}></Route>

          {/* Jobs */}
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/jobs/:id" element={<JobDetails />}></Route>

          {/* Protected routes */}
          <Route element={<RequireAuthLayout />}>
            <Route path="/add-job" element={<AddJob />}></Route>
            <Route path="/jobs/:id/edit" element={<EditJob />}></Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/test" element={<TestingZone />}></Route>
      </Route>

    )
  );

  return <RouterProvider router={router} />
}

