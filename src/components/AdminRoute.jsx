// src/components/AdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role_id === 1 ? <Outlet /> : <Navigate to="/" replace />;
  } catch (err) {
    console.error("Failed to decode token:", err);
    return <Navigate to="/login" replace />;
  }
}
