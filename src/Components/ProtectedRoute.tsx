import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  allowedRoles?: Array<"admin" | "instructor" | "management">;
};

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const role = localStorage.getItem("role") as
    | "admin"
    | "instructor"
    | "management"
    | null;

  // لو مش عامل login
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  // لو عامل login بس مش مسموح له بالدور ده
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
