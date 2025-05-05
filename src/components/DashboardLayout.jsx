// src/components/DashboardLayout.jsx
import Navbar from "./Layout";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
      <footer className="text-xs text-center text-gray-400 py-4">
        &copy; {new Date().getFullYear()} ShipTornado, Inc.
      </footer>
    </div>
  );
}
