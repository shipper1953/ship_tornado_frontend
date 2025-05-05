import { useState } from "react";

export default function AuthForm({ type = "login", onSubmit }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    company_id: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        {type === "login" ? "Login to Your Account" : "Register Your Company"}
      </h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>

        {type === "register" && (
          <div>
            <label htmlFor="company_id" className="block text-sm font-medium text-gray-600">
              Company ID
            </label>
            <input
              id="company_id"
              type="text"
              name="company_id"
              placeholder="Enter Company UUID"
              value={form.company_id}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-md transition duration-200"
      >
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
