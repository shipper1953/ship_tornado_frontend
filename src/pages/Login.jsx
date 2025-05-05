import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";

export default function Login() {
  const handleLogin = async (e, data) => {
    e.preventDefault();
    try {
      const res = await login(data);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}