// src/pages/Dashboard.jsx
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        <p className="text-gray-600 mt-2">You're logged in 🎉</p>
      </div>
    </DashboardLayout>
  );
}
