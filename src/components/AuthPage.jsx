import AuthForm from "./AuthForm";
import AuthLayout from "./AuthLayout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthPage({ type }) {
  const [mode, setMode] = useState(type || "login");
  const navigate = useNavigate();

  const toggleMode = () => setMode(mode === "login" ? "register" : "login");

  const handleSubmit = async (formData) => {
    try {
      const res = await axios.post(`/api/auth/${mode}`, formData);
      localStorage.setItem("token", res.data.token);
      navigate("/"); // redirect after login
    } catch (err) {
      console.error("Auth failed:", err.response?.data || err.message);
    }
  };

  return (
    <AuthLayout>
      <AuthForm type={mode} onSubmit={handleSubmit} />
      <p className="mt-4 text-sm text-gray-600 text-center">
        {mode === "login" ? "Don't have an account?" : "Already registered?"}{" "}
        <button onClick={toggleMode} className="text-indigo-600 hover:underline">
          {mode === "login" ? "Register here" : "Login here"}
        </button>
      </p>
    </AuthLayout>
  );
}
