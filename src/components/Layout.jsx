import Navbar from "./Layout";

export default function Layout({ children }) {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {isAuthenticated && <Navbar />}

      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">ShipTornado</h1>
          <p className="text-gray-500 text-sm">Welcome to your logistics dashboard</p>
        </div>

        {children}
      </div>

      <footer className="mt-8 text-xs text-gray-400 text-center pb-4">
        &copy; {new Date().getFullYear()} ShipTornado, Inc.
      </footer>
    </div>
  );
}
