import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorsDashboard";
import ManagementDashboard from "../Pages/Dashboard/ManagementDashboard";
import ForgotPassword from "../Pages/Auth/Forget Password";
import ProtectedRoute from "../Components/ProtectedRoute";
import EmailSent from "../Pages/Auth/Email Sent";
import PasswordResetDone from "../Pages/Auth/Password Reset Done";
import ResetPassword from "../Pages/Auth/Reset password";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/instructor"
          element={
            <ProtectedRoute allowedRoles={["instructor"]}>
              <InstructorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/management"
          element={
            <ProtectedRoute allowedRoles={["management"]}>
              <ManagementDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/password-reset-done" element={<PasswordResetDone />} />
        <Route path="/reset-password" element={<ResetPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
