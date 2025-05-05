// src/components/Navbar.jsx
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  let isAdmin = false;
  try {
    const token = localStorage.getItem("token");
    const payload = JSON.parse(atob(token.split(".")[1]));
    isAdmin = payload.role_id === 1;
  } catch (err) {
    console.warn("Unable to parse token", err);
  }

  return (
    <nav className="bg-white shadow w-full p-4 flex justify-between items-center">
      <div className="text-indigo-600 font-bold text-xl">ShipTornado</div>
      <div className="flex items-center space-x-4">
        <Link
          to="/profile"
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Profile
        </Link>
        {isAdmin && (
          <Link
            to="/admin/users"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Admin
          </Link>
        )}
        <button
          onClick={handleLogout}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

