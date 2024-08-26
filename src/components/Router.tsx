import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
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
import { Home as EmployerHome } from "../pages/employers/Home";
import CompanyDetails from "../pages/employers/CompanyDetails";
import AddCompany from "../pages/employers/AddCompany";

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

        </Route>

        {/* Protected routes */}
        <Route element={<RequireAuthLayout />}>
          <Route path="/add-job" element={<AddJob />}></Route>
          <Route path="/jobs/:id/edit" element={<EditJob />}></Route>
          <Route path="/employer/home" element={<EmployerHome />}></Route>
          <Route path="/employer/company" element={<CompanyDetails />}></Route>
          <Route path="/add-company" element={<AddCompany />}></Route>
          <Route path="/employer/*" element={<NotFound />}></Route>
        </Route>

        <Route path="/test" element={<TestingZone />}></Route>
      </Route>

    )
  );

  return <RouterProvider router={router} />
}

