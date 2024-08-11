import React, { lazy, Suspense } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import RootLayout from '../layouts/RootLayout';
import AdminRootLayout from '../layouts/AdminRootLayout';
import NotFound from '../utils/PageNotFound';
import "../component/User/pages/page.css"
import CircularProgress from "@mui/material/CircularProgress";
//Auth Route
const LoginUser = lazy(() => import('../component/Auth/login'));
const Logout = lazy(() => import('../component/Auth/logout'));
const Register = lazy(() => import('../component/Auth/Register'));
const ForgetPassword = lazy(() => import('../component/Auth/ForgetPassword'));
const ChangePassword = lazy(() => import('../component/Auth/ChangePassword'));

//UserSpecific Route
const Dashboard = lazy(() => import('../component/User/pages/Dashboard'));
const Hotline = lazy(()=> import('../component/User/pages/Hotline'))
const Attendance = lazy(() => import('../component/User/pages/Attendance'));
const Leaves = lazy(() => import('../component/User/pages/Leaves'));
const Claims = lazy(() => import('../component/User/pages/Claims'));
const CompanyPolicy = lazy(() => import('../component/User/pages/CompanyPolicy'));
const Committee = lazy(() => import('../component/User/pages/Committee'));
const Sensation = lazy(() => import('../component/User/pages/Sensation'));
const Profile = lazy(() => import('../component/User/pages/Profile'));
const EditProfile = lazy(() => import('../component/User/pages/EditProfile'));
const UpdateLeave = lazy(() => import('../component/User/pages/UpdateLeave'));
const Calender = lazy(() => import('../component/User/pages/Calender'));


// Admin-specific pages
const Employee = lazy(() => import('../component/Admin/pages/Employee'));
const UpdateEmployee = lazy(() => import('../component/Admin/pages/UpdateEmployee'));
const AllLeaves = lazy(() => import('../component/Admin/pages/AllLeaves'));
const LeaveRequest = lazy(() => import('../component/Admin/pages/LeaveRequest'));
const AssignLeave = lazy(() => import('../component/Admin/pages/AssignLeave'));
const Holidays = lazy(() => import('../component/Admin/pages/Holidays'));
const AdminProfile = lazy(() => import('../component/Admin/pages/AdminProfile'));
const AllAttendance = lazy(() => import('../component/Admin/pages/AllAttendance'));
const EmployeeAttendance = lazy(() => import('../component/Admin/pages/EmployeeAttendance'));
const UpdateAttendance = lazy(() => import('../component/Admin/pages/UpdateAttendance'));
const AdminChat = lazy(() => import('../component/Admin/pages/AdminChat'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* User Routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="leaves" element={<Leaves />} />
        <Route path="claims" element={<Claims />} />
        <Route path="companyPolicy" element={<CompanyPolicy />} />
        <Route path="committee" element={<Committee />} />
        <Route path="sensation" element={<Sensation />} />
        <Route path="hotline" element={<Hotline />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<EditProfile />} />
        <Route path="update-leave" element={<UpdateLeave />} />
        <Route path="calender" element={<Calender />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<LoginUser />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/logout" element={<Logout />} />

      
      {/*Admin Routes*/}
      <Route path="/dashboard" element={<AdminRootLayout />}>
          <Route index element={<Employee />} />
          <Route path="sensation" element={<Sensation />} />
          <Route path="committee" element={<Committee />} />
          <Route path="companyPolicy" element={<CompanyPolicy />} />
          <Route path="holidays" element={<Holidays />} />
          <Route path="leaves" element={<LeaveRequest />} />
          <Route path="attendance" element={<AllAttendance />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="calendar" element={<Calender />} />
          <Route path="profile/edit" element={<EditProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="attendance/:userId" element={<EmployeeAttendance />} />
          <Route path="employee/edit/:userId" element={<UpdateEmployee />} />
          <Route path="assign-leave" element={<AssignLeave />} />
          <Route path="all-leave" element={<AllLeaves />} />
          <Route path="comments" element={<AdminChat />} />
          <Route path="updateAttendance/:userId" element={<UpdateAttendance />} />      
          <Route path="*" element={<NotFound />} />
        </Route>
    
    </>
  )
);

const Routing = () => (
  <Provider store={store}>
    <Suspense fallback={<div className='spinner-container'><CircularProgress /></div>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);

export default Routing;
